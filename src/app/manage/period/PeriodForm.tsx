'use client';

import { createPeriod, updatePeriod } from '@/services/period';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

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
  initialValue?: {
    name?: string;
    startDate?: string;
    endDate?: string;
  };
}

export default function PeriodForm({ mode, id, initialValue }: Props) {
  console.log({ initialValue });
  const router = useRouter();
  const [isSubmitting, setSubmitting] = useState(false);
  const handleSubmit = async (event: FormEvent<PeriodFormElements>) => {
    event.preventDefault();
    setSubmitting(true);

    const { periodName, startDate, endDate } = event.currentTarget.elements;

    if (mode === 'create') {
      await createPeriod(
        periodName.value,
        new Date(startDate.value),
        new Date(endDate.value)
      );
    }

    if (id && mode === 'edit') {
      await updatePeriod(
        id,
        periodName.value,
        new Date(startDate.value),
        new Date(endDate.value)
      );
    }
    setSubmitting(false);
    router.replace('/manage/period');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-between h-full gap-2 pb-2"
    >
      <div className="flex flex-col gap-2">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            name="periodName"
            defaultValue={initialValue?.name}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Start Date</span>
          </label>
          <input
            type="date"
            name="startDate"
            defaultValue={initialValue?.startDate}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">End Date</span>
          </label>
          <input
            type="date"
            name="endDate"
            defaultValue={initialValue?.endDate}
            className="input input-bordered w-full"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <button
          type="submit"
          className={['btn btn-block', isSubmitting ? 'loading' : ''].join(' ')}
          disabled={isSubmitting}
        >
          Submit
        </button>
        <button
          type="button"
          className="btn btn-outline btn-block"
          disabled={isSubmitting}
          onClick={() => {
            router.back();
          }}
        >
          Back
        </button>
      </div>
    </form>
  );
}
