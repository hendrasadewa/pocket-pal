'use client';

import { createCategory, updateCategory } from '@/services/category';
import { FormEvent, useState } from 'react';

interface FormElements extends HTMLFormControlsCollection {
  categoryName: HTMLInputElement;
}
interface CategoryFormElements extends HTMLFormElement {
  readonly elements: FormElements;
}

interface Props {
  mode: 'create' | 'edit';
  id?: number;
}

export function CategoryForm({ mode, id }: Props) {
  const handleSubmit = (event: FormEvent<CategoryFormElements>) => {
    event.preventDefault();

    const { categoryName } = event.currentTarget.elements;

    if (mode === 'create') {
      return createCategory(categoryName.value);
    }

    if (id && mode === 'edit') {
      return updateCategory(id, categoryName.value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Category Name</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
          name="categoryName"
        />
      </div>
      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </form>
  );
}
