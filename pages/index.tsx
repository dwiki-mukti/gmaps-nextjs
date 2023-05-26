import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function Index() {
  const router = useRouter()
  useEffect(() => {
    router.push('/map-component')
  }, [])

  return (
    <div>Index</div>
  )
}
