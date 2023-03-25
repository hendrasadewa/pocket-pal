'use client';

import { createPeriod, updatePeriod } from '@/services/period';
import { FormEvent } from 'react';

interface FormElements extends HTMLFormControlsCollection {
  periodName: HTMLInputElement;
  startDate: HTMLInputElement;
  endDate: HTMLInputElement;
}
interface PeriodFormElements extends HTMLFormElement {
  readonly elements: FormElements;
}

interface Props {
  mode: 'create' | 'edit';
  id?: number;
}

export function PeriodForm({ mode, id }: Props) {
  const handleSubmit = (event: FormEvent<PeriodFormElements>) => {
    event.preventDefault();

    const { periodName, startDate, endDate } = event.currentTarget.elements;

    if (mode === 'create') {
      return createPeriod(
        periodName.value,
        new Date(startDate.value),
        new Date(endDate.value)
      );
    }

    if (id && mode === 'edit') {
      return updatePeriod(
        id,
        periodName.value,
        new Date(startDate.value),
        new Date(endDate.value)
      );
    }
  };

  return (
    <div>
      <h3>{mode} period</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="periodName" />
        </div>
        <div>
          <label>Start Date</label>
          <input type="date" name="startDate" />
        </div>
        <div>
          <label>End Date</label>
          <input type="date" name="endDate" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
