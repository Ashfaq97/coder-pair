"use client"

import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'
import { Button } from './ui/button'

export const Header = () => {

    const session = useSession()

  return (
    <div>
        {session.data ? (
            <Button onClick={() => signOut()}>Sign Out</Button>
        ) : (
            <Button onClick={() => signIn('google')}>Sign In</Button>
        )}

        {session.data?.user?.name}
    </div>
  )
}
