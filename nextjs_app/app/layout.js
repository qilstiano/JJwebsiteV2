'use client';
import { Inter } from 'next/font/google';
import './globals.css';
// import { AuthContextProvider } from './context/AuthContext';
import Navbar from './components/general/Navbar';
import CTA from './components/general/CTA';
import Footer from './components/general/Footer';
import { Toaster } from 'react-hot-toast';
import { useRouter, usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const SpecialPages = [
    "/login", "/signup", "/forget-password", "/store", "/programmes", "/mypurchases", "/loading"
  ]

  return (
    <html lang="en">
      <body className={inter.className}>
        {SpecialPages.indexOf(pathname) < 0 &&
          <Navbar/>
        }
        <Toaster position="bottom-right" />
        {children}

        {/* Display only Footer on homepage
        {pathname === "/" && (
          <>
            <Footer isHome={true} />
          </>
        )} */}

        {/* Only display CTA and Footer on specific routes
        {SpecialPages.indexOf(pathname) < 0 && (
          <>
            <CTA />
            <Footer />
          </>
        )} */}
        <Footer />
      </body>
    </html>
  );
}
