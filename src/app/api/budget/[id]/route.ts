import prisma from '@/lib/prisma';
import { errorHandler, formatResponse } from '@/utils/api';

interface IdParams {
  params: { id: string };
}

export async function GET(request: Request, { params: { id } }: IdParams) {
  try {
    const result = await prisma.budget.findFirst({
      select: {
        amount: true,
        category: true,
        period: true,
        id: true,
        name: true,
      },
      where: { id: parseInt(id, 10) },
    });
    return formatResponse(`Successfully fetched Budgets`, result);
  } catch (error) {
    return errorHandler(error);
  }
}

export async function PATCH(request: Request, { params: { id } }: IdParams) {
  try {
    const body = await request.json();

    const result = await prisma.budget.update({
      data: {
        amount: body.amount,
        name: body.name,
        periodId: body.periodId,
        categoryId: body.categoryId,
      },
      where: { id: parseInt(id, 10) },
    });

    return formatResponse(`Successfully updated Budget ${result.name}`, result);
  } catch (error) {
    return errorHandler(error);
  }
}

export async function DELETE(request: Request, { params: { id } }: IdParams) {
  try {
    const result = await prisma.budget.delete({
      where: { id: parseInt(id, 10) },
    });

    return formatResponse(`Successfully deleted Budget ${result.name}`, result);
  } catch (error) {
    return errorHandler(error);
  }
}
