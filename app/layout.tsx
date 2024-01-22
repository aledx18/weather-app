/* eslint-disable no-undef */
import type { Metadata } from 'next'

import { Poppins } from 'next/font/google'

import './globals.css'

import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/components/theme/theme-provider'

const pop = Poppins({
  subsets: ['latin'],
  weight: ['600', '300', '500', '700', '400']
})

export const metadata: Metadata = {
  title: 'Weather-App',
  description: 'Search for a city or your city and see its current climate'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <link rel='icon' href='/favicon.ico' sizes='any' />

      <body className={pop.className}>
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
