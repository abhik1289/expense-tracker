"use client"

import { signOut } from 'next-auth/react'
import React from 'react'

function page() {
  return (
    <div>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  )
}

export default page
