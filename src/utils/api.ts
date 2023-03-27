import { CursorPagination, OffsetPagination } from '@/types/api';
import { NextResponse } from 'next/server';

export function formatResponse<T>(
  message: string = 'unhandled request',
  result?: T | T[],
  pagination?: OffsetPagination | CursorPagination
) {
  return NextResponse.json(
    {
      message,
      result,
      pagination,
    },
    {
      status: 200,
    }
  );
}

export function errorHandler(error: unknown) {
  if (error instanceof Error) {
    return NextResponse.json({ message: error.message });
  }
  return NextResponse.json({ message: 'Unhandled Error' });
}

export function getIdFromQS(request: Request) {
  const { searchParams } = new URL(request.url);
  const idFromParams = searchParams.get('id');

  if (!idFromParams) {
    throw new Error('Id should be provided');
  }

  const id = parseInt(idFromParams, 10);

  if (isNaN(id)) {
    throw new Error('Id should be a number');
  }

  return id;
}

export function getPaginationFromURL(url: string) {
  try {
    const { searchParams } = new URL(url);
    const perPage = parseInt(searchParams.get('perPage') as string, 10);
    const cursor = parseInt(searchParams.get('cursor') as string, 10);

    if (isNaN(perPage)) {
      throw new Error('perPage query is not a number');
    }

    if (isNaN(cursor)) {
      return { perPage };
    }

    return { perPage, cursor };
  } catch {
    return null;
  }
}
