import prisma from '@/lib/prisma';
import { errorHandler, formatResponse, getIdFromQS } from '@/utils/api';

export async function GET() {
  try {
    const result = await prisma.transaction.findMany({
      include: {
        category: true,
        period: true,
        type: true,
      },
    });
    return formatResponse(
      `Successfully fetched ${result.length} transactions`,
      result
    );
  } catch (error) {
    return errorHandler(error);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = await prisma.transaction.create({
      data: {
        name: body.name,
        amount: body.amount,
        date: new Date(body.date),
        categoryId: body.categoryId,
        periodId: body.periodId,
        typeId: body.typeId,
      },
    });

    return formatResponse(
      `Successfully created transaction ${result.name}`,
      result
    );
  } catch (error) {
    return errorHandler(error);
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();

    const result = await prisma.transaction.update({
      data: {
        name: body.name,
        amount: body.amount,
        date: new Date(body.date),
        categoryId: body.categoryId,
        periodId: body.periodId,
        typeId: body.typeId,
      },
      where: { id: getIdFromQS(request) },
    });

    return formatResponse(
      `Successfully updated transaction ${result.name}`,
      result
    );
  } catch (error) {
    return errorHandler(error);
  }
}

export async function DELETE(request: Request) {
  try {
    const result = await prisma.transaction.delete({
      where: { id: getIdFromQS(request) },
    });

    return formatResponse(
      `Successfully deleted transaction ${result.name}`,
      result
    );
  } catch (error) {
    return errorHandler(error);
  }
}
