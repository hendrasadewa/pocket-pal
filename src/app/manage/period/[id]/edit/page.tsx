import { getCategoryById } from '@/services/category';
import PeriodForm from '../../PeriodForm';
import { getPeriodById } from '@/services/period';
import dayjs from 'dayjs';

interface Props {
  params: { id: number };
}

export default async function EditPeriod({ params }: Props) {
  const { id } = params;
  const initialValue = await getPeriodById(id);
  return (
    <PeriodForm
      mode="edit"
      id={id}
      initialValue={{
        endDate: dayjs(initialValue.result?.endDate).format('YYYY-MM-DD'),
        name: initialValue.result?.name,
        startDate: dayjs(initialValue.result?.startDate).format('YYYY-MM-DD'),
      }}
    />
  );
}
