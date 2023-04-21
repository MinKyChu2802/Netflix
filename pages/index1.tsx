import { NextPageContext } from 'next'
import { signOut, getSession } from 'next-auth/react'

export async function getServerSideProps(context: NextPageContext) {
  console.log(context)
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home() {
  return (
    <><h1 className='bg-red-100'>Basdsad</h1>
      <button className='h-10 w-full bg-white' onClick={() => signOut()}>Logout</button>
    </>
  )
}
