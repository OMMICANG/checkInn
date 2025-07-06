import type { Metadata } from "next";
import '../styles/globals.css';
import '../styles/layout.css';
import { Gravitas_One, Playfair_Display, Lobster, Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import IsMobile from '@/components/IsMobile';


export const metadata: Metadata = {
  title: "Check-Inn Hotels, Restaurant & Bar",
  description: "Your perfect getaway in Ojodu, Berger. Hotel, Restaurant, Bar. We Make You Feel At Home",
    icons: {
    icon: "/logo/Logo_-_Copy-removebg-preview.png", // ✅ this is the correct placement for Site Icon
  },
};

const gravitas = Gravitas_One({
  subsets: ['latin'],
  variable: '--font-title',
  weight: ['400'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-title',
  weight: ['700'],
});

const lobster = Lobster({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-lobster',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});


export default function RootLayout({ children }: { 
  children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lobster.variable} ${inter.variable}`}>

      <IsMobile>

        <div className="contentBox">
          <Header />
            <main>{children}</main>
          <Footer />
        </div>
      </IsMobile>
      </body>
    </html>
  );
}








// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">

//       <body>
//         {children}
//       </body>
//     </html>
//   );
// }
