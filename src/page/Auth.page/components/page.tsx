import React from 'react'
import styled from './Page.module.scss'
import Typography from '../../../components/UI-Kit/Typography'
import Input from '../../../components/UI-Kit/Input'
import Button from '../../../components/UI-Kit/Button'
import cn from 'classnames'
import { useLocation, useNavigate } from 'react-router-dom'
import { useLoginMutation, useRegisterMutation } from '../../../store/api'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../../../store/slice/auth.slice'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import IconButton from '../../../components/UI-Kit/IconButton'
import useAppSelector from '../../../hooks/useAppSelector'

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = React.useState(false)
  
  const [name, setName]  = React.useState('')
  const [email, setEmail]  = React.useState('')
  const [password, setPassword]  = React.useState('')


  const [fieldType, setFieldType] = React.useState<'password' | 'text'>('password')
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  const fromPage = location.state?.from?.pathname

  const [register] = useRegisterMutation()
  const [login] = useLoginMutation()

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()

    isLogin
      ? handleSignIn()
      : handleSignUp()
  }

  const handleSignUp = async () => {
    try {
      const data = await register({
        name,
        lastName: null,
        email,
        password,
        avatar: null
      }).unwrap()
      dispatch(setCredentials(data))
      navigate(fromPage, { replace: true })
    } catch (error) {
      console.log('Error register', error)
    }
  }

  const handleSignIn = async () => {
    try {
      const data = await login({
        email,
        password
      }).unwrap()
      dispatch(setCredentials(data))
      navigate(fromPage, { replace: true })
    } catch (error) {
      console.log('Error sign in', error)
    }
  }

  const token = useAppSelector(state => state.auth.token)
  console.log('Token', token)

  return (
    <div className={styled.container}>
      <form
        onSubmit={handleSubmit}
        action="#"
        className={styled.form}
      >
        <Typography className={styled.title} tag='h2'>
          {isLogin ? 'Sign in' : 'Create Account'}
        </Typography>

        <div className={styled.groupButton}>
          <button
            className={cn(styled.button, 'base-button')}
            onClick={() => setIsLogin(true)}
            type='button'
          >
            Sign in
          </button>
          <button
            type='button'
            onClick={() => setIsLogin(false)}
            className={cn(styled.button, 'base-button')}
          >
            Register
          </button>
        </div>

        <div className={styled.formWrapper}>

          {!isLogin && (
            <div className={styled.formRow}>
              <label className={styled.label} htmlFor="firstName">Name</label>
              <Input
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setName(event.target.value)
                }}
                name='name'
                placeholder='Your first name'
                type='text'
                autoComplete='given-name'
                id='firstName'
              />
            </div>
          )}

          <div className={styled.formRow}>
            <label htmlFor="email" className={styled.label}>
              Email
            </label>
            <Input
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(event.target.value)
              }}
              name='email'
              placeholder='xxxxx@gmail.com'
              type='email'
              autoComplete='username'
              id='email'
              aria-required='true'
            />
          </div>
          <div className={styled.formRow}>
            <label className={styled.label} htmlFor="password">
              Password
            </label>
            <div className={styled.inputWrapper}>
              <Input
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setPassword(event.target.value)
                }}
                name='password'
                placeholder='xxxxxxxx'
                type={fieldType}
                autoComplete={isLogin ? 'current-password' : 'new-password'}
                aria-required='true'
                id='password'
              />
              <IconButton
                className={styled.switchButton}
                onClick={() => setFieldType(prev => prev === 'password' ? 'text' : 'password')}
                type='button'
              >
                {fieldType === 'password'
                  ? <FaRegEyeSlash />
                  : <FaRegEye />}
              </IconButton>
            </div>
          </div>
          <Button
            className={styled.submitButton}
            type='submit'
          >
            {isLogin ? 'sign in' : 'create account'}
          </Button>
        </div>

      </form>
    </div>
  )
}

export default Auth