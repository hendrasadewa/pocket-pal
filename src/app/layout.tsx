import './global.css';
import '@fontsource/open-sans';

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
