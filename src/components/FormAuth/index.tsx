import React from 'react'
import styled from './styled.module.scss'
import Input from '../../components/UI-Kit/Input'
import Button from '../../components/UI-Kit/Button'
// import cn from 'classnames'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../../store/slices/auth.slice'
import IconButton from '../../components/UI-Kit/IconButton'
import Preloader from '@/components/UI-Kit/Preloader'
import routesPath from '@/router/routesPath'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import AppLink from '../UI-Kit/AppLink'
import { useToast } from '../UI-Kit/Toast/useToast'
import { useRegistrationMutation, useLoginMutation } from '@/store/api/endpoints/user.endoint'
// import useValidation from './hooks/useValidation'

const FormAuth = () => {
  const location = useLocation()
  const isLogin = location.pathname === routesPath.SIGN_IN

  const [email, setEmail]  = React.useState('')
  const [password, setPassword]  = React.useState('')

  // ***
  // let test = useValidation()

  const toast = useToast()


  const [fieldType, setFieldType] = React.useState<'password' | 'text'>('password')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const fromPage = location.state?.from?.pathname

  const [registration] = useRegistrationMutation()
  
  const [login, { isLoading }] = useLoginMutation()
  
  async function onRegistration() {
    try {
      const data = await registration({
        fullName: '',
        email,
        password,
        profileImage: null,
      }).unwrap()

      dispatch(setCredentials(data))
      navigate(fromPage, { replace: true })

    } catch (error) {
      console.log('Error register', error)
      toast?.show({
        title: 'User already exists',
        status: 'error'
      })
    }
  }

  async function  onLogin() {
    try {
      const data = await login({
        email,
        password
      }).unwrap()

      dispatch(setCredentials(data))
      navigate(fromPage, { replace: true })
      navigate('/')

    } catch (error) {
      console.log('Error sign in', error)
      toast.show({
        title: 'Invalid login or password.',
        status: 'error'
      })
    }
  }

  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault()

    isLogin
      ? onLogin()
      : onRegistration()
  }

  return (
    <React.Fragment>
      { isLoading && <Preloader /> }
      <React.Fragment>
        <form
          onSubmit={handleSubmit}
          action="#"
          className={styled.form}
        >
          <div className={styled.formWrapper}>

            <div className={styled.formRow}>
              <label htmlFor="email" className={styled.label}>
                Email
              </label>
              <Input
                value={email}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setEmail(event.target.value)
                }}
                name='email'
                placeholder='Example, you@example.com'
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
                  value={password}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setPassword(event.target.value)
                  }}
                  name='password'
                  placeholder='Choose a password'
                  type={fieldType}
                  autoComplete={isLogin ? 'current-password' : 'new-password'}
                  aria-required='true'
                  id='password'
                />
                <IconButton
                  className={styled.toggleButton}
                  aria-label="Show password"
                  onClick={() => setFieldType(prev => (
                    prev === 'password' ? 'text' : 'password'
                  ))}
                  type='button'
                >
                  {fieldType === 'password' ? (
                    <EyeOffIcon />
                  ) : (
                    <EyeIcon />
                  )}
                </IconButton>
              </div>
            </div>


            <div className={styled.footer}>
              <Button
                className={styled.submitButton}
                type='submit'
              >
                {isLogin ? 'sign in' : 'registration'}
              </Button>
              {isLogin
                ? <span className={styled.footerText}>
                    <p>Don't have an account yet?</p>
                    <AppLink href={routesPath.REGISTRATION}>
                      Register now
                    </AppLink>
                  </span>
                : <span className={styled.footerText}>
                    <p>Already have an account?</p>
                    <AppLink href={routesPath.SIGN_IN}>
                      Sign in
                    </AppLink>
                  </span>}
              

              
            </div>


          </div>
        </form>
      </React.Fragment>
    </React.Fragment>
  )
}

export default FormAuth