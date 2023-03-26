import ky from '@/lib/ky';
import { BaseResponse } from '@/types/api';
import { Category } from '@prisma/client';

export async function getCategory(): Promise<BaseResponse<Category[]>> {
  const response = await ky.get('category', { cache: 'no-store' });

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}

export async function getCategoryById(
  id: number
): Promise<BaseResponse<Category>> {
  const response = await ky.get(`category/${id}`);

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}

export async function createCategory(
  name: string,
  emoji: string
): Promise<BaseResponse<Category[]>> {
  const response = await ky.post('category', {
    json: { name, emoji },
  });

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}

export async function updateCategory(
  id: number,
  name: string,
  emoji: string
): Promise<BaseResponse<Category[]>> {
  const response = await ky.patch(`category/${id}`, {
    json: { name, emoji },
  });

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}
