import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'lovelyVector - Portfolio',
    description: 'Portfolio showcasing projects and work by Alex Guerra',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className="bg-gray-50 text-gray-900 antialiased">
                {children}
            </body>
        </html>
    )
}
