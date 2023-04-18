/* eslint-disable @next/next/no-img-element */
'use client';
import Input from '@/components/Input';
import React, { useState } from 'react'

const Auth = () => {
  const [value, setValue] = useState({ email: '', username: '', password: '' })

  const onChange = (e: any) => {
    console.log('Quy', e.target.name)
    setValue({ ...value, [e.target.name]: e.target.value })
  }

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className='bg-black w-full h-full lg:bg-opacity-50 '>
        <nav className='pz-12 py-5'> <img src="/images/logo.png" alt="" className='h-12' /></nav>
        <div className='flex justify-center'>
          <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md w-full'>
            <h2 className='text-white text-4xl mb-8 font-semibold'>
              Sign in
            </h2>
            <div className='flex flex-col gap-4'>
              <Input id='username' label='Username' onChange={onChange} value={value.username} />
              <Input id='email' label='Email' onChange={onChange} value={value.email} />
              <Input id='password' label='Password' onChange={onChange} value={value.password} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth