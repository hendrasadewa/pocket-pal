'use client';

import { Period } from '@prisma/client';
import { EditPencil, Trash } from 'iconoir-react';
import dayjs from 'dayjs';
import Link from 'next/link';

interface Props {
  periods?: Period[];
}

export default function PeriodList({ periods = [] }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {periods.map(({ id, name, startDate, endDate }) => (
          <tr key={`tr-period-${id}`}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{dayjs(startDate).format('DD-MMM-YYYY')}</td>
            <td>{dayjs(endDate).format('DD-MMM-YYYY')}</td>
            <td>
              <Link href={`/manage/period/edit/${id}`}>
                <EditPencil />
              </Link>
              <Link href={`/manage/period/delete/${id}`}>
                <Trash />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
