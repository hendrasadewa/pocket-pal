import { Period } from '@prisma/client';
import { Calendar } from 'iconoir-react';
import dayjs from 'dayjs';
import ListItem from '../../../components/ListItem';
import ListContainer from '../../../components/ListContainer';

interface Props {
  data?: Period[];
}

export default function PeriodList({ data = [] }: Props) {
  return (
    <ListContainer>
      {data.map(({ id, name, startDate, endDate }) => (
        <ListItem
          title={
            <div className="flex items-center gap-2">
              <Calendar />
              <span className="font-bold">{name}</span>
            </div>
          }
          descriptions={
            <>
              <span>from {dayjs(startDate).format('DD MMM YYYY')}</span>
              <span>to {dayjs(endDate).format('DD MMM YYYY')}</span>
            </>
          }
          key={`period-${id}`}
        />
      ))}
    </ListContainer>
  );
}
