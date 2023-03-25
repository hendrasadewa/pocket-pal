'use client';

import { Period } from '@prisma/client';
import dayjs from 'dayjs';
import { EditPencil } from 'iconoir-react';

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
              <EditPencil />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
