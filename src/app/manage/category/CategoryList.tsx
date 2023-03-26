import { BudgetCategory } from '@prisma/client';
import ListItem from '../../../components/ListItem';
import ListContainer from '../../../components/ListContainer';

interface Props {
  data?: BudgetCategory[];
}

export default function CategoryList({ data = [] }: Props) {
  return (
    <ListContainer>
      {data.map(({ id, name }) => (
        <ListItem
          title={
            <div className="flex items-center gap-2">
              <span className="font-bold">{name}</span>
            </div>
          }
          key={`period-${id}`}
        />
      ))}
    </ListContainer>
  );
}
