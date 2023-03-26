import ky from '@/lib/ky';
import { BaseResponse } from '@/types/api';
import { Period } from '@prisma/client';

export async function getPeriod(): Promise<BaseResponse<Period[]>> {
  const response = await ky.get('period', { cache: 'no-store' });

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}

export async function getPeriodById(id: number): Promise<BaseResponse<Period>> {
  const response = await ky.get(`period/${id}`, { cache: 'no-store' });

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
  const response = await ky.patch(`period/${id}`, {
    json: { name, startDate, endDate },
  });

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}
