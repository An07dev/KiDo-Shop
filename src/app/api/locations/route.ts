import { NextResponse } from 'next/server';
import { vietnamProvinces } from '@/lib/vietnamLocations';

// In-memory cache to ensure lightning-fast responses (< 5ms)
let cachedProvinces: any[] | null = null;
let cachedDistrictsMap: Record<string, any[]> = {};
let cachedWardsMap: Record<string, any[]> = {};

// Clean province names for display (e.g., 'Thành phố Hà Nội' -> 'Hà Nội', 'Tỉnh Bắc Giang' -> 'Bắc Giang')
function cleanProvinceName(raw: string): string {
  if (!raw) return '';
  return raw
    .replace(/^Thành phố\s+/i, '')
    .replace(/^Tỉnh\s+/i, '')
    .trim();
}

function normalize(s: string): string {
  return (s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/^(thanh pho|tinh|tp\.|tp|quan|huyen|thi xa|tx\.|tx|phuong|xa|thitran|thi tran)\s+/i, '')
    .replace(/[^a-z0-9]/g, '')
    .trim();
}

async function fetchAllProvinces(): Promise<any[]> {
  if (cachedProvinces && cachedProvinces.length > 0) {
    return cachedProvinces;
  }

  try {
    const res = await fetch('https://provinces.open-api.vn/api/p/', {
      next: { revalidate: 86400 }, // Cache for 24h
    });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        cachedProvinces = data.map((p: any) => ({
          code: p.code,
          name: cleanProvinceName(p.name),
          fullName: p.name,
          codename: p.codename,
        }));
        return cachedProvinces;
      }
    }
  } catch (err) {
    console.warn('Failed to fetch from open-api.vn, using local fallback for provinces:', err);
  }

  // Fallback to local provinces
  cachedProvinces = vietnamProvinces.map((p, idx) => ({
    code: idx + 1,
    name: p.name,
    fullName: p.name,
    codename: normalize(p.name),
  }));
  return cachedProvinces;
}

async function fetchDistrictsByProvince(provinceCodeOrName: string | number): Promise<any[]> {
  const cacheKey = String(provinceCodeOrName);
  if (cachedDistrictsMap[cacheKey]) {
    return cachedDistrictsMap[cacheKey];
  }

  const provinces = await fetchAllProvinces();
  let provObj = provinces.find((p) => String(p.code) === String(provinceCodeOrName));
  if (!provObj) {
    const normTarget = normalize(String(provinceCodeOrName));
    provObj = provinces.find((p) => normalize(p.name) === normTarget || normalize(p.fullName) === normTarget);
  }

  if (provObj?.code) {
    try {
      const res = await fetch(`https://provinces.open-api.vn/api/p/${provObj.code}?depth=2`, {
        next: { revalidate: 86400 },
      });
      if (res.ok) {
        const data = await res.json();
        if (data && Array.isArray(data.districts)) {
          const list = data.districts.map((d: any) => ({
            code: d.code,
            name: d.name,
            codename: d.codename,
            provinceCode: provObj.code,
            provinceName: provObj.name,
          }));
          cachedDistrictsMap[cacheKey] = list;
          if (provObj.name) cachedDistrictsMap[provObj.name] = list;
          return list;
        }
      }
    } catch (e) {
      console.warn('Failed to fetch districts from open-api.vn, using local fallback:', e);
    }
  }

  // Fallback from local data
  const localProv = vietnamProvinces.find(
    (p) => normalize(p.name) === normalize(String(provinceCodeOrName))
  ) || vietnamProvinces[0];

  const localDistricts = (localProv?.districts || []).map((d, idx) => ({
    code: idx + 100,
    name: d.name,
    codename: normalize(d.name),
    provinceName: localProv.name,
  }));
  cachedDistrictsMap[cacheKey] = localDistricts;
  return localDistricts;
}

async function fetchWardsByDistrict(districtCodeOrName: string | number, provinceName?: string): Promise<any[]> {
  const cacheKey = `${provinceName || ''}_${districtCodeOrName}`;
  if (cachedWardsMap[cacheKey]) {
    return cachedWardsMap[cacheKey];
  }

  // If numeric code is given
  if (!isNaN(Number(districtCodeOrName))) {
    try {
      const res = await fetch(`https://provinces.open-api.vn/api/d/${districtCodeOrName}?depth=2`, {
        next: { revalidate: 86400 },
      });
      if (res.ok) {
        const data = await res.json();
        if (data && Array.isArray(data.wards)) {
          const list = data.wards.map((w: any) => ({
            code: w.code,
            name: w.name,
            codename: w.codename,
            districtCode: data.code,
            districtName: data.name,
          }));
          cachedWardsMap[cacheKey] = list;
          return list;
        }
      }
    } catch (e) {
      console.warn('Failed to fetch wards by code from open-api.vn:', e);
    }
  }

  // If name is given, search districts first
  if (provinceName) {
    const districts = await fetchDistrictsByProvince(provinceName);
    const normTarget = normalize(String(districtCodeOrName));
    const distObj = districts.find((d) => String(d.code) === String(districtCodeOrName) || normalize(d.name) === normTarget);
    if (distObj?.code) {
      try {
        const res = await fetch(`https://provinces.open-api.vn/api/d/${distObj.code}?depth=2`, {
          next: { revalidate: 86400 },
        });
        if (res.ok) {
          const data = await res.json();
          if (data && Array.isArray(data.wards)) {
            const list = data.wards.map((w: any) => ({
              code: w.code,
              name: w.name,
              codename: w.codename,
              districtCode: data.code,
              districtName: data.name,
            }));
            cachedWardsMap[cacheKey] = list;
            return list;
          }
        }
      } catch (e) {
        console.warn('Failed to fetch wards from open-api.vn:', e);
      }
    }
  }

  // Fallback to local
  const localProv = vietnamProvinces.find((p) => normalize(p.name) === normalize(provinceName || '')) || vietnamProvinces[0];
  const localDist = localProv?.districts?.find((d) => normalize(d.name) === normalize(String(districtCodeOrName))) || localProv?.districts?.[0];
  const wards = (localDist?.wards || []).map((w, idx) => ({
    code: idx + 1000,
    name: w,
    codename: normalize(w),
    districtName: localDist?.name,
  }));

  cachedWardsMap[cacheKey] = wards;
  return wards;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || 'provinces';
    const provinceCode = searchParams.get('provinceCode') || searchParams.get('provinceId') || '';
    const provinceName = searchParams.get('provinceName') || searchParams.get('province') || '';
    const districtCode = searchParams.get('districtCode') || searchParams.get('districtId') || '';
    const districtName = searchParams.get('districtName') || searchParams.get('district') || '';

    if (type === 'provinces') {
      const provinces = await fetchAllProvinces();
      return NextResponse.json(
        { success: true, count: provinces.length, data: provinces },
        { headers: { 'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200' } }
      );
    }

    if (type === 'districts') {
      const query = provinceCode || provinceName;
      if (!query) {
        return NextResponse.json({ success: false, message: 'Missing provinceCode or provinceName' }, { status: 400 });
      }
      const districts = await fetchDistrictsByProvince(query);
      return NextResponse.json(
        { success: true, count: districts.length, data: districts },
        { headers: { 'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200' } }
      );
    }

    if (type === 'wards') {
      const query = districtCode || districtName;
      if (!query) {
        return NextResponse.json({ success: false, message: 'Missing districtCode or districtName' }, { status: 400 });
      }
      const wards = await fetchWardsByDistrict(query, provinceName);
      return NextResponse.json(
        { success: true, count: wards.length, data: wards },
        { headers: { 'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200' } }
      );
    }

    // Default: return provinces
    const provinces = await fetchAllProvinces();
    return NextResponse.json({ success: true, count: provinces.length, data: provinces });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Lỗi tải danh mục đơn vị hành chính' },
      { status: 500 }
    );
  }
}
