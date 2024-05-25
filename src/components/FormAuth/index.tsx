import React from 'react'
import styled from './styled.module.scss'
import Input from '@/components/UI-Kit/Input'
import Button from '@/components/UI-Kit/Button'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../../store/slices/auth.slice'
import IconButton from '../../components/UI-Kit/IconButton'
import Preloader from '@/components/UI-Kit/Preloader'
import routesPath from '@/router/routesPath'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import AppLink from '../UI-Kit/AppLink'
import { useToast } from '@/components/UI-Kit/Toast/useToast'
import {
  useRegistrationMutation,
  useLoginMutation,
} from '@/store/api/endpoints/user.endoint'
import useValidation from './hooks/useValidation'
import required from './validators/withText/required'
import email from './validators/withText/email'
import minLength from './validators/withText/minLength'

const FormAuth = () => {
  const location = useLocation()
  const isLogin = location.pathname === routesPath.SIGN_IN
  const [formValues, setFormValues] = React.useState({
    email: '',
    password: '',
  })

  const { $touch, $invalid, $errors } = useValidation(formValues.email, {
    required,
    email,
  })

  const valid = useValidation(formValues.password, {
    required,
    minLength: minLength(4),
  })

  const toast = useToast()

  const [fieldType, setFieldType] = React.useState<'password' | 'text'>(
    'password'
  )
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const fromPage = location.state?.from?.pathname

  const handleChange = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues(prev => ({ ...prev, [name]: value }))
  }

  const [registration] = useRegistrationMutation()

  const [login, { isLoading }] = useLoginMutation()

  async function onRegistration() {
    try {
      const data = await registration({
        fullName: '',
        email: formValues.email,
        password: formValues.password,
        profileImage: null,
      }).unwrap()

      dispatch(setCredentials(data))
      navigate(fromPage, { replace: true })
    } catch (error) {
      toast?.show({
        title: 'User already exists',
        status: 'error',
      })
    }
  }

  async function onLogin() {
    try {
      const data = await login({
        email: formValues.email,
        password: formValues.password,
      }).unwrap()

      dispatch(setCredentials(data))
      navigate(fromPage, { replace: true })
      navigate('/')
    } catch (error) {
      toast.show({
        title: 'Invalid login or password.',
        status: 'error',
      })
    }
  }

  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    isLogin ? onLogin() : onRegistration()
  }

  return (
    <React.Fragment>
      {isLoading && <Preloader />}
      <React.Fragment>
        <form onSubmit={handleSubmit} action="#" className={styled.Form}>
          <div className={styled.Form__wrapper}>
            <div className={styled.FormRow}>
              <label htmlFor="email" className={styled.FormRow__label}>
                Email
              </label>
              <Input
                value={formValues.email}
                onChange={handleChange}
                name="email"
                placeholder="Example, you@example.com"
                type="email"
                autoComplete="username"
                id="email"
                aria-required="true"
                onBlur={$touch}
                aria-invalid={$invalid}
              />
              <ul className={styled.FormRow__invalidFeedback}>
                {$errors.map(error => (
                  <li key={error.$id}>
                    { error.$message }
                  </li>
                ))}
              </ul>
            </div>

            <div className={styled.FormRow}>
              <label className={styled.FormRow__label} htmlFor="password">
                Password
              </label>
              <div className={styled.FormRow__fieldWrapper}>
                <Input
                  value={formValues.password}
                  onChange={handleChange}
                  name="password"
                  placeholder="Choose a password"
                  type={fieldType}
                  autoComplete={isLogin ? 'current-password' : 'new-password'}
                  aria-required="true"
                  id="password"
                  aria-invalid={valid.$invalid}
                  onBlur={valid.$touch}
                />
                <IconButton
                  className={styled.FormRow__switch}
                  aria-label="Show password"
                  onClick={() =>
                    setFieldType(prev =>
                      prev === 'password' ? 'text' : 'password'
                    )
                  }
                  type="button">
                  {fieldType === 'password' ? <EyeOffIcon /> : <EyeIcon />}
                </IconButton>
              </div>
              <ul className={styled.FormRow__invalidFeedback}>
                {valid.$errors.map(error => (
                  <li key={error.$id}>
                    { error.$message }
                  </li>
                ))}
              </ul>
            </div>

            <div className={styled.FormFooter}>
              <Button className={styled.FormFooter__Button} type="submit">
                {isLogin ? 'sign in' : 'registration'}
              </Button>
              {isLogin ? (
                <span className={styled.FormFooter__Text}>
                  <p>Don't have an account yet?</p>
                  <AppLink
                    className={styled.FormFooter__Link}
                    to={routesPath.REGISTRATION}>
                    Register now
                  </AppLink>
                </span>
              ) : (
                <span className={styled.FormFooter__Text}>
                  <p>Already have an account?</p>
                  <AppLink
                    className={styled.FormFooter__Link}
                    to={routesPath.SIGN_IN}>
                    Sign in
                  </AppLink>
                </span>
              )}
            </div>
          </div>
        </form>
      </React.Fragment>
    </React.Fragment>
  )
}

export default FormAuth
