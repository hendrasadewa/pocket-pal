'use client';

import { NavArrowLeft } from 'iconoir-react';
import { usePathname, useRouter } from 'next/navigation';

interface Props {
  withBack?: boolean;
  customTitle?: string;
}

export default function HeaderNav({ withBack = false, customTitle }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const backDestination = pathname === '/manage' ? 'home' : 'manage';

  const [_, managePath, leafPath] = pathname.split('/');

  let title = customTitle || leafPath;

  if (backDestination === 'home') {
    title = managePath;
  }

  const handleBackClick = () => {
    if (backDestination === 'home') {
      return router.push('/');
    }
    router.back();
  };

  return (
    <header className="mb-8 h-10 grid grid-cols-header">
      <button className="flex items-center text-sm" onClick={handleBackClick}>
        {withBack ? (
          <>
            <NavArrowLeft />{' '}
            <span className="capitalize">{backDestination}</span>
          </>
        ) : null}
      </button>
      <h1 className="text-center font-bold col-start-2 col-end-3 self-center capitalize">
        {title}
      </h1>
    </header>
  );
}
