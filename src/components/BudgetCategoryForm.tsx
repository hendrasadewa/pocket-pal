'use client';

import {
  createBudgetCategory,
  updateBudgetCategory,
} from '@/services/budgetCategory';
import { FormEvent } from 'react';

interface FormElements extends HTMLFormControlsCollection {
  budgetCategoryName: HTMLInputElement;
}
interface BudgetCategoryFormElements extends HTMLFormElement {
  readonly elements: FormElements;
}

interface Props {
  mode: 'create' | 'edit';
  id?: number;
}

export function BudgetCategoryForm({ mode, id }: Props) {
  const handleSubmit = (event: FormEvent<BudgetCategoryFormElements>) => {
    event.preventDefault();

    const { budgetCategoryName } = event.currentTarget.elements;

    if (mode === 'create') {
      return createBudgetCategory(budgetCategoryName.value);
    }

    if (id && mode === 'edit') {
      return updateBudgetCategory(id, budgetCategoryName.value);
    }
  };

  return (
    <div>
      <h3>{mode} budget category</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="budgetCategoryName" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
