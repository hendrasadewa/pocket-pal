'use client';

import { BudgetCategory } from '@prisma/client';
import { EditPencil } from 'iconoir-react';

interface Props {
  data?: BudgetCategory[];
}

export default function BudgetCategoryList({ data = [] }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, name }) => (
          <tr key={`tr-category-${id}`}>
            <td>{id}</td>
            <td>{name}</td>
            <td>
              <EditPencil />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
