import { Inter } from 'next/font/google'
import Head from 'next/head';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MovFlix',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head> <link rel="icon" href="/favicon.ico"/></Head>
 
      <body className={inter.className + 'w-screen overflow-x-hidden'}>{children}</body>
    </html>
  )
}
