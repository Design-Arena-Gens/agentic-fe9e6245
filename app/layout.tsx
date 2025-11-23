import type { Metadata } from 'next';
import './globals.css';
import { Poppins, Inter } from 'next/font/google';

const headings = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-headings',
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'ICEEM | Robot de désinfection UV-C certifié Tunisie',
  description:
    "ICEEM accompagne les établissements de santé tunisiens avec SteriPro, le robot de désinfection UV-C validé par le Ministère de la Santé. Éliminez 99,9999 % des germes en moins de 10 minutes.",
  alternates: {
    canonical: 'https://agentic-fe9e6245.vercel.app',
  },
  openGraph: {
    title: 'ICEEM | Robot de désinfection UV-C certifié Tunisie',
    description:
      "SteriPro d'ICEEM sécurise blocs opératoires, chambres et zones critiques grâce aux UV-C haute intensité. Démonstration gratuite partout en Tunisie.",
    url: 'https://agentic-fe9e6245.vercel.app',
    siteName: 'ICEEM',
    locale: 'fr_TN',
    type: 'website',
    images: [
      {
        url: 'https://static.wixstatic.com/media/f2d0cd_ea4a356ff333426f82ad6bb6021dec33~mv2.png',
        width: 1200,
        height: 630,
        alt: 'Robot SteriPro UV-C ICEEM',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICEEM | Robot de désinfection UV-C certifié Tunisie',
    description:
      "Protégez patients et soignants grâce à SteriPro, le robot UV-C d'ICEEM validé par le Ministère de la Santé tunisien.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${headings.variable} ${body.variable}`}>
      <body className="bg-slate-950 text-white antialiased">{children}</body>
    </html>
  );
}
