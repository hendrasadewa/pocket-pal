import { BudgetCategoryForm } from '@/components/BudgetCategoryForm';
import BudgetCategoryList from '@/components/BudgetCategoryList';
import { getBudgetCategory } from '@/services/budgetCategory';

export default async function ManageBudgetCategoryPage() {
  const periods = await getBudgetCategory();
  return (
    <main>
      <BudgetCategoryList data={periods.result} />
      <BudgetCategoryForm mode="create" />
    </main>
  );
}
