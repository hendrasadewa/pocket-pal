import prisma from '@/lib/prisma';
import { errorHandler, formatResponse, getIdFromQS } from '@/utils/api';
import { NextRequest } from 'next/server';

interface IdParams {
  params: { id: string };
}

export async function GET(_: NextRequest, { params: { id } }: IdParams) {
  try {
    const result = await prisma.period.findFirst({
      where: { id: parseInt(id, 10) },
    });
    return formatResponse(`Successfully fetched period`, result);
  } catch (error) {
    return errorHandler(error);
  }
}

export async function PATCH(request: Request, { params: { id } }: IdParams) {
  try {
    const body = await request.json();

    const result = await prisma.period.update({
      data: {
        name: body.name,
        startDate: new Date(body.startDate),
        endDate: new Date(body.endDate),
      },
      where: { id: parseInt(id, 10) },
    });

    return formatResponse(`Successfully updated Period ${result.name}`, result);
  } catch (error) {
    return errorHandler(error);
  }
}

export async function DELETE(request: Request, { params: { id } }: IdParams) {
  try {
    const result = await prisma.period.delete({
      where: { id: parseInt(id, 10) },
    });

    return formatResponse(`Successfully deleted Period ${result.name}`, result);
  } catch (error) {
    return errorHandler(error);
  }
}
