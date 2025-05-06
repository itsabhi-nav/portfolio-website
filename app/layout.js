import './globals.css';
import { ThemeProvider } from 'next-themes';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';

import AIChatBot from '../components/AIChatBot';
import FloatingIcons from '../components/FloatingIcons';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Abhinav | Portfolio',
  description: 'Full Stack Developer | Mobile App Developer | Creative Technologist',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body suppressHydrationWarning={true}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />

          <FloatingIcons />
          <AIChatBot />
        </ThemeProvider>
      </body>
    </html>
  );
}
