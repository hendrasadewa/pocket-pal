import { getCategory } from '@/services/category';
import CategoryList from './CategoryList';

export default async function ManageCategoryPage() {
  const categories = await getCategory();
  return (
    <main>
      <CategoryList data={categories.result} />
    </main>
  );
}
