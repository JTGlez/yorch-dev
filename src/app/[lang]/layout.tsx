import { ReactNode } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next'
import { cn } from "@/lib/utils";
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider";
import { i18n } from '../../../i18.config';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { fontSans } from './fonts';
import GoogleCaptchaWrapper from './GoogleCaptchaWrapper';

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
                    <div className='min-h-screen'>
                        <Navbar lang={params.lang} />
                        <main className="container">
                            <GoogleCaptchaWrapper>
                                {children}
                            </GoogleCaptchaWrapper>
                            <div className='flex justify-between'>
                                <div className='mt-10'>
                                    Hola
                                </div>
                                <div>Adios</div>
                            </div>
                        </main>
                        <div className='sticky top-[100vh]'>
                            <Footer lang={params.lang} />
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}