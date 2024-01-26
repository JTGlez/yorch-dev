import { ReactNode } from 'react';
import type { Metadata } from 'next'
import { i18n } from '../../../i18.config';
import { fontSans } from './fonts';
import GoogleCaptchaWrapper from './GoogleCaptchaWrapper';
import { cn } from "@/lib/utils";
import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster"
import AnimatedWave from '@/components/AnimatedWave';

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
                        <nav className=''>
                            <Navbar lang={params.lang} />
                        </nav>

                            <main className="container min-h-[85vh]">
                                <GoogleCaptchaWrapper>
                                    {children}
                                </GoogleCaptchaWrapper>
                                <Toaster />
                            </main>

                        <div className='hidden xl:block' style={{ position: "relative", marginTop: '0rem' }}>
                            <AnimatedWave
                                color={"#0072F5"}
                                animationDuration="10s"
                                opacity={"0.8"}
                            />
                            <AnimatedWave
                                color={"#0072F5"}
                                animationDuration="15s"
                                opacity={"0.5"}
                            />
                            <AnimatedWave
                                color={"#0072F5"}
                                animationDirection="reverse"
                                animationDuration="20s"
                                opacity={"0.2"}
                            />
                            <div className='mt-4 block sticky top-[100vh]'>
                                <Footer lang={params.lang} />
                            </div>

                        </div>
                        <div className='block xl:hidden sticky top-[100vh]'>
                            <Footer lang={params.lang} />
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}