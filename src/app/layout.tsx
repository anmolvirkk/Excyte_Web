import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Excyte',
  description: 'Blockchain Betting',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/icon.png" />

        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icon.png" />

        <link rel="icon" type="image/ico" sizes="32x32" href="./favicon.ico" />
        <link rel="icon" type="image/ico" sizes="16x16" href="./favicon.ico" />
        <link rel="mask-icon" href="/icon.png" color="#000000" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://excyte-web.vercel.app/" />
        <meta name="twitter:title" content="Excyte - Blockchain Betting" />
        <meta name="twitter:description" content="Play a wide variety of entertaining games and place bets on the winner" />
        <meta name="twitter:image" content="https://excyte-web.vercel.app/card.png" />
        <meta name="twitter:creator" content="@Excyte" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Excyte - Blockchain Betting" />
        <meta property="og:description" content="Play a wide variety of entertaining games and place bets on the winner" />
        <meta property="og:site_name" content="Excyte - Blockchain Betting" />
        <meta property="og:url" content="https://excyte-web.vercel.app/" />
        <meta property="og:image" content="https://excyte-web.vercel.app/card.png" />
        
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
