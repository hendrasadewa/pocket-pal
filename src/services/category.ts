import ky from '@/lib/ky';
import { BaseResponse } from '@/types/api';
import { Category } from '@prisma/client';

export async function getCategory(): Promise<BaseResponse<Category[]>> {
  const response = await ky.get('category');

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}

export async function createCategory(
  name: string
): Promise<BaseResponse<Category[]>> {
  const response = await ky.post('category', {
    json: { name },
  });

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}

export async function updateCategory(
  id: number,
  name: string
): Promise<BaseResponse<Category[]>> {
  const response = await ky.post('category', {
    json: { name },
    searchParams: { id },
  });

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}
