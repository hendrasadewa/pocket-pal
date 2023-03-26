import { CategoryForm } from '../CategoryForm';

export default function AddNewCategory() {
  return (
    <main className="bg-base-100 p-2 rounded">
      <CategoryForm mode="create" />
    </main>
  );
}
