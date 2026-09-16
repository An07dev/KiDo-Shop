import { redirect } from 'next/navigation';

export default async function DemoRedirectPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const queryString = new URLSearchParams();

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => queryString.append(key, v));
      } else if (value !== undefined) {
        queryString.append(key, value);
      }
    });
  }

  const query = queryString.toString();
  redirect(query ? `/?${query}` : '/');
}