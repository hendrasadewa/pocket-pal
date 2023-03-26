import {
  CandlestickChart,
  DataTransferBoth,
  Settings,
  Wallet,
} from 'iconoir-react';
import Link from 'next/link';

export default function BottomNavigation() {
  return (
    <div className="grid grid-cols-bottom-nav h-full px-4">
      <Link href="/" className="flex items-center justify-center" replace>
        <Wallet />
      </Link>
      <Link href="/" className="flex items-center justify-center" replace>
        <DataTransferBoth />
      </Link>
      <Link href="/" className="flex items-center justify-center" replace>
        <CandlestickChart />
      </Link>
      <Link href="/manage" className="flex items-center justify-center" replace>
        <Settings />
      </Link>
    </div>
  );
}
