import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function ListContainer({ children }: Props) {
  return (
    <div className="flex flex-col bg-base-100 rounded-xl divide-y shadow">
      {children}
    </div>
  );
}
