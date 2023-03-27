import prisma from '@/lib/prisma';
import { errorHandler, formatResponse } from '@/utils/api';

export async function GET(request: Request) {
  try {
    const result = await prisma.budget.findMany({
      select: {
        amount: true,
        category: true,
        period: true,
        id: true,
        name: true,
      },
    });
    return formatResponse(
      `Successfully fetched ${result.length} Budgets`,
      result
    );
  } catch (error) {
    return errorHandler(error);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = await prisma.budget.create({
      data: {
        amount: body.amount,
        name: body.name,
        periodId: body.periodId,
        categoryId: body.categoryId,
      },
    });

    return formatResponse(`Successfully created Budget ${result.name}`, result);
  } catch (error) {
    return errorHandler(error);
  }
}
