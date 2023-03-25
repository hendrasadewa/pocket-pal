import { PeriodForm } from '@/components/PeriodForm';
import PeriodList from '@/components/PeriodList';
import { getPeriod } from '@/services/period';

export default async function ManagePeriodPage() {
  const periods = await getPeriod();
  return (
    <main>
      <PeriodList periods={periods.result} />
      <PeriodForm mode="create" />
    </main>
  );
}
