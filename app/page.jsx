'use client'
import { redirect, useRouter } from 'next/navigation'
import React from 'react'

function page() {
    const router=useRouter();
    router.push("/skill_test")
  return (
    <div></div>
  )
}

export default page