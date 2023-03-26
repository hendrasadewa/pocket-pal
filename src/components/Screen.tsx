import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  headerComponent?: ReactNode;
  footerComponent?: ReactNode;
}

export default function Screen({
  children,
  headerComponent,
  footerComponent,
}: Props) {
  return (
    <body className="bg-slate-50 grid grid-cols-screen grid-rows-screen min-h-screen">
      <header className="col-start-1 col-end-7 row-start-1 row-end-2">
        {headerComponent}
      </header>
      <main className="col-start-1 col-end-7 px-4">{children}</main>
      <footer className="col-start-1 col-end-7 row-start-3 row-end-4 h-full bg-slate-100">
        {footerComponent}
      </footer>
    </body>
  );
}
