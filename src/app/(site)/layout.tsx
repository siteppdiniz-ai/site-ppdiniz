import type { Metadata } from "next";
import { Inter, Bona_Nova_SC, Spectral, Mate_SC, Marcellus_SC } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bonaNovaSC = Bona_Nova_SC({
  variable: "--font-bona-nova-sc",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const spectral = Spectral({
  variable: "--font-tess", // Mapping Spectral as Tess
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const mateSC = Mate_SC({
  variable: "--font-mate-sc",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const marcellusSC = Marcellus_SC({
  variable: "--font-marcellus-sc",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PP Diniz Consultoria | Gestão Empresarial e Tributária",
    template: "%s | PP Diniz Consultoria"
  },
  description: "Consultoria especializada em gestão financeira, planejamento tributário e redução de custos para médias e grandes empresas. Crescimento sustentável com segurança jurídica.",
  keywords: ["Consultoria Empresarial", "Gestão Tributária", "Planejamento Financeiro", "Auditoria", "Holdings", "Recuperação de Créditos", "PP Diniz"],
  authors: [{ name: "Pedro Paulo A. Diniz" }],
  creator: "PP Diniz Consultoria",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://ppdiniz.com.br",
    title: "PP Diniz Consultoria | Gestão Empresarial e Tributária",
    description: "Transforme a gestão do seu negócio com estratégias de elisão fiscal e governança corporativa.",
    siteName: "PP Diniz Consultoria"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${bonaNovaSC.variable} ${spectral.variable} ${mateSC.variable} ${marcellusSC.variable} antialiased bg-background text-foreground flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
