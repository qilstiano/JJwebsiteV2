"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";


const inter = Inter({ subsets: ["latin"] });

// (A'qil) removed metadata export due to "use client" directive
// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
        <Navbar />
        {children}
        </AuthContextProvider>
        </body>
    </html>
  );
}
