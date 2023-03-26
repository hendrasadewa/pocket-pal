import prisma from '@/lib/prisma';
import { errorHandler, formatResponse } from '@/utils/api';

interface IdParams {
  params: { id: string };
}

export async function GET(request: Request, { params: { id } }: IdParams) {
  try {
    const result = await prisma.category.findFirst({
      where: { id: parseInt(id, 10) },
    });
    return formatResponse(`Successfully fetched Category`, result);
  } catch (error) {
    return errorHandler(error);
  }
}

export async function PATCH(request: Request, { params: { id } }: IdParams) {
  try {
    const body = await request.json();

    const result = await prisma.category.update({
      data: {
        name: body.name,
        emoji: body.emoji,
      },
      where: { id: parseInt(id, 10) },
    });

    return formatResponse(`Successfully update Category ${body.name}`, result);
  } catch (error) {
    return errorHandler(error);
  }
}

export async function DELETE(request: Request, { params: { id } }: IdParams) {
  try {
    const result = await prisma.category.delete({
      where: { id: parseInt(id, 10) },
    });

    return formatResponse(
      `Successfully deleted Category ${result.name}`,
      result
    );
  } catch (error) {
    return errorHandler(error);
  }
}
