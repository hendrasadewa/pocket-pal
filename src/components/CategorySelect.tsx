import { Category } from '@prisma/client';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLSelectElement> {
  options: Category[];
  isLoading?: boolean;
}

export default function CategorySelect({
  options,
  isLoading = false,
  ...rest
}: Props) {
  return (
    <select
      name="categoryId"
      className="select w-full"
      disabled={isLoading}
      {...rest}
    >
      {options.map((option) => (
        <option key={`category-option-${option.id}`} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
