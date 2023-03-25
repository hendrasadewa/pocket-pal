import ky from '@/lib/ky';
import { BaseResponse } from '@/types/api';
import { Period } from '@prisma/client';

export async function getPeriod(): Promise<BaseResponse<Period[]>> {
  const response = await ky.get('period');

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}

export async function createPeriod(
  name: string,
  startDate: Date,
  endDate: Date
): Promise<BaseResponse<Period[]>> {
  const response = await ky.post('period', {
    json: { name, startDate, endDate },
  });

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}

export async function updatePeriod(
  id: number,
  name: string,
  startDate: Date,
  endDate: Date
): Promise<BaseResponse<Period[]>> {
  const response = await ky.post('period', {
    json: { name, startDate, endDate },
    searchParams: { id },
  });

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}
