import prisma from '@/lib/prisma';
import { errorHandler, formatResponse, getIdFromQS } from '@/utils/api';

export async function GET() {
  try {
    const result = await prisma.transactionType.findMany();
    return formatResponse(
      `Successfully fetched ${result.length} transaction types`,
      result
    );
  } catch (error) {
    return errorHandler(error);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = await prisma.transactionType.create({
      data: {
        name: body.name,
      },
    });

    return formatResponse(
      `Successfully transaction type ${result.name}`,
      result
    );
  } catch (error) {
    return errorHandler(error);
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();

    const result = await prisma.transactionType.update({
      data: {
        name: body.name,
      },
      where: { id: getIdFromQS(request) },
    });

    return formatResponse(
      `Successfully transaction type ${result.name}`,
      result
    );
  } catch (error) {
    return errorHandler(error);
  }
}

export async function DELETE(request: Request) {
  try {
    const result = await prisma.transactionType.delete({
      where: { id: getIdFromQS(request) },
    });

    return formatResponse(
      `Successfully deleted transaction type ${result.name}`,
      result
    );
  } catch (error) {
    return errorHandler(error);
  }
}
