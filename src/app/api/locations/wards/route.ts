import { NextResponse } from 'next/server';
import offlineWardsData from '@/data/vietnamWards.json';

// 100% Offline Master Dataset of all 10,051 wards across 63 provinces in Vietnam
const offlineMap = offlineWardsData as Record<string, string[]>;

function normalizeLocation(str: string): string {
  return (str || '')
    .toLowerCase()
    .replace(/[đĐ]/g, 'd')
    .replace(/^(tỉnh|thành phố|quận|huyện|thị xã|tp\.?)\s+/i, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const districtParam = (searchParams.get('district') || '').trim();
    const provinceParam = (searchParams.get('province') || '').trim();

    if (!districtParam) {
      return NextResponse.json({ success: true, source: 'offline_local', wards: [] });
    }

    const pNorm = normalizeLocation(provinceParam);
    const dNorm = normalizeLocation(districtParam);

    // 1. Primary lookup in offline local dataset (< 0.1ms, zero network requests)
    const compositeKey = `${pNorm}__${dNorm}`;
    const wards = offlineMap[compositeKey] || offlineMap[dNorm];

    if (wards && wards.length > 0) {
      return NextResponse.json({
        success: true,
        source: 'offline_local',
        district: districtParam,
        wards,
      });
    }

    // 2. Extra safety fallback: Query provinces.open-api.vn if not found in offline local map
    const cleanDistrict = districtParam.replace(/^(quận|huyện|thành phố|thị xã|tp\.?)\s+/i, '').trim();
    const searchUrl = `https://provinces.open-api.vn/api/d/search/?q=${encodeURIComponent(cleanDistrict || districtParam)}`;
    const searchRes = await fetch(searchUrl, {
      headers: { Accept: 'application/json' },
      next: { revalidate: 86400 },
    });

    if (searchRes.ok) {
      const dList: any[] = await searchRes.json();
      if (dList && dList.length > 0) {
        let targetDistrict = dList[0];
        if (dList.length > 1 && provinceParam) {
          const exactMatch = dList.find(
            (d: any) =>
              d.name.toLowerCase().includes(cleanDistrict.toLowerCase()) ||
              d.name.toLowerCase() === districtParam.toLowerCase()
          );
          if (exactMatch) targetDistrict = exactMatch;
        }

        const detailUrl = `https://provinces.open-api.vn/api/d/${targetDistrict.code}?depth=2`;
        const detailRes = await fetch(detailUrl, {
          headers: { Accept: 'application/json' },
          next: { revalidate: 86400 },
        });

        if (detailRes.ok) {
          const detailData = await detailRes.json();
          const fetchedWards: string[] = (detailData.wards || []).map((w: any) => w.name);
          return NextResponse.json({
            success: true,
            source: 'openapi_fallback',
            district: detailData.name,
            wards: fetchedWards,
          });
        }
      }
    }

    return NextResponse.json({ success: true, source: 'offline_empty', wards: [] });
  } catch (error: any) {
    console.error('Error in /api/locations/wards:', error.message);
    return NextResponse.json(
      { success: false, message: 'Lỗi tải danh mục phường xã', wards: [] },
      { status: 500 }
    );
  }
}
