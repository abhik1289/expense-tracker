"use client"

import React from 'react'
import { signIn } from 'next-auth/react'
function page() {
  return (
    <div>
      <button onClick={() => signIn('google')}>Sign in</button>
    </div>
  )
}

export default page
