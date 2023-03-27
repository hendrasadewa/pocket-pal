'use client';

import { Budget } from '@prisma/client';
import ListItem from '@/components/ListItem';
import ListContainer from '@/components/ListContainer';
import { EditPencil, Plus } from 'iconoir-react';
import Link from 'next/link';
import { Emoji, EmojiStyle } from 'emoji-picker-react';
import { ComposedBudget } from '@/types/budget';
import BudgetListItem from './BudgetListItem';

interface Props {
  data?: ComposedBudget[];
}

export default function BudgetList({ data = [] }: Props) {
  return (
    <ListContainer>
      {data.map((item) => (
        <BudgetListItem data={item} key={`budget-${item.id}`} />
      ))}
      <Link href="/manage/budget/add">
        <ListItem
          title={
            <div className="flex items-center justify-between gap-2">
              <span className="font">Add new budget</span>
              <Plus />
            </div>
          }
        />
      </Link>
    </ListContainer>
  );
}
