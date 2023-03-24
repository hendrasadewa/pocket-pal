import prisma from '@/lib/prisma';
import { errorHandler, formatResponse, getIdFromQS } from '@/utils/api';

export async function GET() {
  try {
    const result = await prisma.period.findMany();
    return formatResponse(
      `Successfully fetched ${result.length} periods`,
      result
    );
  } catch (error) {
    return errorHandler(error);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = await prisma.period.create({
      data: {
        name: body.name,
        startDate: new Date(body.startDate),
        endDate: new Date(body.endDate),
      },
    });

    return formatResponse(`Successfully created Period ${result.name}`, result);
  } catch (error) {
    return errorHandler(error);
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();

    const result = await prisma.period.update({
      data: {
        name: body.name,
        startDate: new Date(body.startDate),
        endDate: new Date(body.endDate),
      },
      where: { id: getIdFromQS(request) },
    });

    return formatResponse(`Successfully updated Period ${result.name}`, result);
  } catch (error) {
    return errorHandler(error);
  }
}

export async function DELETE(request: Request) {
  try {
    const result = await prisma.period.delete({
      where: { id: getIdFromQS(request) },
    });

    return formatResponse(`Successfully deleted Period ${result.name}`, result);
  } catch (error) {
    return errorHandler(error);
  }
}
