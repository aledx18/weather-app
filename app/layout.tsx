import './globals.css'
import { ReactNode } from 'react'
import localFont from 'next/font/local'
import type { Metadata } from 'next'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/components/theme/theme-provider'

const satoshiFont = localFont({
  src: '../public/fonts/Satoshi-Variable.woff2',
  display: 'swap',
  variable: '--font-satoshi'
})

export const metadata: Metadata = {
  title: 'Weather-App',
  description: 'Search for a city or your city and see its current climate',
  metadataBase: new URL('https://weather-app-two-alpha-40.vercel.app/')
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className={satoshiFont.className}>
      <link rel='icon' href='/favicon.ico' sizes='any' />
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
