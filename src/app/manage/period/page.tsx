import PeriodList from '@/app/manage/period/PeriodList';
import { getPeriod } from '@/services/period';

export default async function ManagePeriodPage() {
  const periods = await getPeriod();
  return <PeriodList data={periods.result} />;
}
