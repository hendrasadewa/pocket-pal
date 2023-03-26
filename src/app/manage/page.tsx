import { Box, Calendar, DataTransferBoth } from 'iconoir-react';
import Link from 'next/link';

import ListContainer from '@/components/ListContainer';
import ListItem from '@/components/ListItem';

export default function ManagePage() {
  return (
    <ListContainer>
      <Link href="/manage/category">
        <ListItem
          title={
            <div className="flex items-center gap-2">
              <Box />
              <span>Category</span>
            </div>
          }
          descriptions=""
        />
      </Link>
      <Link href="/manage/period">
        <ListItem
          title={
            <div className="flex items-center gap-2">
              <Calendar />
              <span>Period</span>
            </div>
          }
          descriptions=""
        />
      </Link>
    </ListContainer>
  );
}
