import prisma from '@/lib/prisma';
import { errorHandler, formatResponse } from '@/utils/api';
import { NextRequest } from 'next/server';

interface IdParams {
  params: { id: string };
}

export async function GET(_: NextRequest, { params: { id } }: IdParams) {
  try {
    const result = await prisma.transaction.findFirst({
      select: {
        id: true,
        amount: true,
        date: true,
        name: true,
        type: true,
        typeId: true,
        budgetId: true,
        budget: {
          include: {
            category: true,
            period: true,
          },
        },
      },
      where: { id: parseInt(id, 10) },
    });
    return formatResponse(`Successfully fetched transaction`, result);
  } catch (error) {
    return errorHandler(error);
  }
}

export async function PATCH(request: Request, { params: { id } }: IdParams) {
  try {
    const body = await request.json();

    const result = await prisma.transaction.update({
      data: {
        name: body.name,
        amount: body.amount,
        date: body.date,
        typeId: body.typeId,
        budgetId: body.budgetId,
      },
      where: { id: parseInt(id, 10) },
    });

    return formatResponse(
      `Successfully updated transaction ${result.name}`,
      result
    );
  } catch (error) {
    return errorHandler(error);
  }
}

export async function DELETE(request: Request, { params: { id } }: IdParams) {
  try {
    const result = await prisma.transaction.delete({
      where: { id: parseInt(id, 10) },
    });

    return formatResponse(
      `Successfully deleted transaction ${result.name}`,
      result
    );
  } catch (error) {
    return errorHandler(error);
  }
}
