import './global.css';

export const metadata = {
  title: 'Pocket Pal',
  description: 'Your budget manager in a pocket',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="winter">
      <body>{children}</body>
    </html>
  );
}
