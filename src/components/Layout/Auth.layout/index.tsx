import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout: React.FC = () => {
  return (
    <main className='page__content'>
      <Outlet />
    </main>
  )
}

export default AuthLayout