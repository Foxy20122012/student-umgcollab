import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'componentslibrary/styles/generated/output.css'
import 'componentslibrary/styles/generated/bgColors.min.css'
import 'vComponents/styles/generated/output.css'
import 'vComponents/styles/generated/bgColors.min.css'
import "../styles/globals.css";
import I18nProvider from '../plugins/i18nContext'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VISITANTE",
  description: "Sección de los visitantes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <I18nProvider locale="es">
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
