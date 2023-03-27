import { getCategory } from '@/services/category';
import { getPeriod } from '@/services/period';
import BudgetForm from '../BudgetForm';

export default async function AddBudget() {
  const categoryOptions = await getCategory();
  const periodOptions = await getPeriod();
  return (
    <BudgetForm
      mode="create"
      categoryOptions={categoryOptions.result}
      periodOptions={periodOptions.result}
    />
  );
}
