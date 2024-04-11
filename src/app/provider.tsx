"use client"

import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
import React, { ReactNode } from 'react'

export function Providers({ children } : { children: ReactNode}) {
  return (
    <SessionProvider>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
    </SessionProvider>
  )
}

