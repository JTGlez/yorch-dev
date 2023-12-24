import type { Metadata } from 'next'
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider";
import { i18n } from '../../i18.config';

export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const metadata: Metadata = {
    title: 'JTGlez',
    description: 'Personal Portfolio of JTGlez',
}

export default function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: string }
}) {
    return (
        <html lang={params.lang ?? i18n.defaultLocale } suppressHydrationWarning>
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
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}