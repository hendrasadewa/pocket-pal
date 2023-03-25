import ky from '@/lib/ky';
import { BaseResponse } from '@/types/api';
import { BudgetCategory } from '@prisma/client';

export async function getBudgetCategory(): Promise<
  BaseResponse<BudgetCategory[]>
> {
  const response = await ky.get('budget/category');

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}

export async function createBudgetCategory(
  name: string
): Promise<BaseResponse<BudgetCategory[]>> {
  const response = await ky.post('budget/category', {
    json: { name },
  });

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}

export async function updateBudgetCategory(
  id: number,
  name: string
): Promise<BaseResponse<BudgetCategory[]>> {
  const response = await ky.post('budget/category', {
    json: { name },
    searchParams: { id },
  });

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}
