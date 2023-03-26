import { getBudgetCategory } from '@/services/budgetCategory';
import CategoryList from './CategoryList';

export default async function ManageBudgetCategoryPage() {
  const categories = await getBudgetCategory();
  return (
    <main>
      <CategoryList data={categories.result} />
    </main>
  );
}
