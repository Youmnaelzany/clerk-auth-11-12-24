"use client"
import { useUser } from '@clerk/nextjs'
const ClientPage = () => {
  const { isLoaded, isSignedIn, user } = useUser()

  if (!isLoaded || !isSignedIn) {
    return null
  }
  return (
    <div className="flex flex-col items-center justify-center h-full ">
      <h1 className="text-2xl">Hello {user.firstName}, Welcome to Clerk</h1>
    </div>
  )
}

export default ClientPage

