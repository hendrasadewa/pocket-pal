import prisma from '@/lib/prisma';
import { errorHandler, formatResponse } from '@/utils/api';

export async function GET(req: Request) {
  try {
    const result = await prisma.transaction.findMany({
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
        typeId: body.typeId,
        budgetId: body.budgetId,
      },
    });

    return formatResponse(`Successfully created Period ${result.name}`, result);
  } catch (error) {
    return errorHandler(error);
  }
}
