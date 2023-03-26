import { getCategory } from '@/services/category';
import CategoryList from './CategoryList';

export default async function ManageCategoryPage() {
  const categories = await getCategory();
  return <CategoryList data={categories.result} />;
}
