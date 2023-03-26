import '@fontsource/open-sans';
import './global.css';

import Screen from '@/components/Screen';
import BottomNavigation from '@/components/BottomNavigation';
import HeaderNav from '@/components/HeaderNav';

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
      <Screen
        headerComponent={<HeaderNav />}
        footerComponent={<BottomNavigation />}
      >
        {children}
      </Screen>
    </html>
  );
}
