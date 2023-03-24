import prisma from '@/lib/prisma';
import { errorHandler, formatResponse, getIdFromQS } from '@/utils/api';

export async function GET(request: Request) {
  try {
    const result = await prisma.budgetCategory.findMany();
    return formatResponse(
      `Successfully fetched ${result.length} Budget Categories`,
      result
    );
  } catch (error) {
    return errorHandler(error);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = await prisma.budgetCategory.create({
      data: {
        name: body.name,
      },
    });

    return formatResponse(
      `Successfully created Budget Category ${result.name}`,
      result
    );
  } catch (error) {
    return errorHandler(error);
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();

    const result = await prisma.budgetCategory.update({
      data: {
        name: body.name,
      },
      where: { id: getIdFromQS(request) },
    });

    return formatResponse(
      `Successfully update budget category ${body.name}`,
      result
    );
  } catch (error) {
    return errorHandler(error);
  }
}

export async function DELETE(request: Request) {
  try {
    const result = await prisma.budgetCategory.delete({
      where: { id: getIdFromQS(request) },
    });

    return formatResponse(
      `Successfully deleted Budget Category ${result.name}`,
      result
    );
  } catch (error) {
    return errorHandler(error);
  }
}
