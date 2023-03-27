import { getCategory } from '@/services/category';
import { getPeriod } from '@/services/period';
import { getBudgetById } from '@/services/budget';

import BudgetForm from '../../BudgetForm';

interface Props {
  params: { id: number };
}

export default async function EditBudget({ params }: Props) {
  const [initialData, categoryOptions, periodOptions] = await Promise.all([
    await getBudgetById(params.id),
    await getCategory(),
    await getPeriod(),
  ]);

  return (
    <BudgetForm
      mode="edit"
      categoryOptions={categoryOptions.result}
      periodOptions={periodOptions.result}
      initialValue={initialData.result}
    />
  );
}
