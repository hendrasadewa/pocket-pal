import { ComposedBudget } from '@/types/budget';
import { Emoji, EmojiStyle } from 'emoji-picker-react';
import { EditPencil } from 'iconoir-react';
import Link from 'next/link';
import numeral from 'numeral';

interface Props {
  data: ComposedBudget;
}

export default function BudgetListItem({ data }: Props) {
  const { category, name, amount, id, period } = data;
  return (
    <div className="flex items-center justify-between p-2">
      <div className="flex items-center gap-2">
        <div className="bg-primary-content p-1 rounded w-8 h-8">
          <Emoji
            unified={category.emoji}
            emojiStyle={EmojiStyle.APPLE}
            size={24}
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <p className="font-bold truncate w-32">{name}</p>
          <p>{period.name}</p>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 ">
        <p className="min-w-[100px]">Rp. {numeral(amount).format('0,0')}</p>
        <Link href={`/manage/budget/${id}/edit`}>
          <EditPencil />
        </Link>
      </div>
    </div>
  );
}
