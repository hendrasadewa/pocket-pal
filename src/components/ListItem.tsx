import { ReactNode } from 'react';

interface Props {
  title?: ReactNode;
  descriptions?: ReactNode;
}

export default function ListItem({ title, descriptions }: Props) {
  return (
    <div className="p-2">
      <h2 className="font">{title}</h2>
      <div className="flex items-center gap-2 text-sm">{descriptions}</div>
    </div>
  );
}
