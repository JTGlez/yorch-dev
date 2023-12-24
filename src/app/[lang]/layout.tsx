import { ReactNode } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next'
import { cn } from "@/lib/utils";
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider";
import { i18n } from '../../../i18.config';
import Navbar from '@/components/Navbar';
import { fontSans } from './fonts';

export const metadata: Metadata = {
    title: 'JTGlez',
    description: 'Personal Portfolio of JTGlez',
}

export default function RootLayout({
    children,
    params,
}: {
    children: ReactNode;
    params: { lang: string };
}) {

    return (
        <html lang={params.lang ?? i18n.defaultLocale} suppressHydrationWarning>
            <head />
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <nav>
                        <Navbar lang={params.lang} />
                    </nav>
                    <main className="container">
                        {children}
                        <div className='flex justify-between'>
                            <div className='mt-10'>
                                Hola
                            </div>
                            <div>Adios</div>
                        </div>
                    </main>
                    <footer className="w-full flex items-center justify-center py-3">
                        <Link
                            className="flex items-center gap-1 text-current"
                            href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                            title="nextui.org homepage"
                        >
                            <span className="text-default-600">Powered by</span>
                            <p className="text-primary">NextUI</p>
                        </Link>
                    </footer>
                </ThemeProvider>
            </body>
        </html>
    )
}