import { getCategoryById } from '@/services/category';
import { CategoryForm } from '../../CategoryForm';

interface Props {
  params: { id: number };
}

export default async function EditCategory({ params }: Props) {
  const { id } = params;
  const initialValue = await getCategoryById(id);
  return (
    <main className="bg-base-100 p-2 rounded">
      <CategoryForm mode="edit" id={id} initialValue={initialValue.result} />
    </main>
  );
}
