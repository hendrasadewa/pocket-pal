import { getBudget } from '@/services/budget';
import BudgetList from './BudgetList';

export default async function ManageBudgetPage() {
  const response = await getBudget();
  return <BudgetList data={response.result} />;
}
