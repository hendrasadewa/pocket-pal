import { Category } from '@prisma/client';
import ListItem from '@/components/ListItem';
import ListContainer from '@/components/ListContainer';
import { Plus } from 'iconoir-react';
import Link from 'next/link';

interface Props {
  data?: Category[];
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
      <Link href="/manage/category/add">
        <ListItem
          title={
            <div className="flex items-center justify-between gap-2">
              <span className="font">Add new Entry</span>
              <Plus />
            </div>
          }
        />
      </Link>
    </ListContainer>
  );
}
