import prisma from '@/lib/prisma';
import { errorHandler, formatResponse, getIdFromQS } from '@/utils/api';

export async function GET(request: Request) {
  try {
    const result = await prisma.category.findMany();
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

    const result = await prisma.category.create({
      data: {
        name: body.name,
        emoji: body.emoji,
      },
    });

    return formatResponse(
      `Successfully created Category ${result.name}`,
      result
    );
  } catch (error) {
    return errorHandler(error);
  }
}
