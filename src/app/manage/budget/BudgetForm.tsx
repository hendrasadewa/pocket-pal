'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { createBudget, updateBudget } from '@/services/budget';
import CategorySelect from '@/components/CategorySelect';
import PeriodSelect from '@/components/PeriodSelect';
import { Category, Period } from '@prisma/client';

interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  amount: HTMLInputElement;
  periodId: HTMLInputElement;
  categoryId: HTMLInputElement;
}
interface CategoryFormElements extends HTMLFormElement {
  readonly elements: FormElements;
}

interface Props {
  mode: 'create' | 'edit';
  id?: number;
  periodOptions?: Period[];
  categoryOptions?: Category[];
  initialValue?: {
    name?: string;
    amount?: number;
    periodId?: number;
    categoryId?: number;
  };
}

export default function BudgetForm({
  mode,
  id,
  initialValue,
  periodOptions = [],
  categoryOptions = [],
}: Props) {
  const router = useRouter();
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<CategoryFormElements>) => {
    event.preventDefault();
    setSubmitting(true);

    const { name, amount, periodId, categoryId } = event.currentTarget.elements;

    if (mode === 'create') {
      await createBudget(
        name.value,
        parseInt(amount.value, 10),
        parseInt(periodId.value, 10),
        parseInt(categoryId.value, 10)
      );
    } else if (id && mode === 'edit') {
      await updateBudget(
        id,
        name.value,
        parseInt(amount.value, 10),
        parseInt(periodId.value, 10),
        parseInt(categoryId.value, 10)
      );
    }

    setSubmitting(false);
    router.replace('/manage/budget');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-between h-full gap-2 pb-2"
    >
      <div className="flex flex-col gap-2 pb-2">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            name="name"
            disabled={isSubmitting}
            defaultValue={initialValue?.name}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Amount</span>
          </label>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full"
            name="amount"
            disabled={isSubmitting}
            defaultValue={initialValue?.amount}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <CategorySelect
            options={categoryOptions}
            defaultValue={initialValue?.categoryId}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Period</span>
          </label>
          <PeriodSelect
            options={periodOptions}
            defaultValue={initialValue?.periodId}
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
          className="btn btn-outline"
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
