import React from 'react'
import styled from './styled.module.scss'
import FormAuth from '@/components/FormAuth'

const SignInRoot = () => {
  return (
    <div className={styled.section}>
      <div className={styled.label}>
        <h1 className={styled.title}>Sign in</h1>
      </div>
      <div className={styled.main}>
        <h3 className={styled.formTitle}>Sign in</h3>
        <FormAuth />
      </div>
    </div>
  )
}

export default SignInRoot