import React from 'react'
import styled from './styled.module.scss'
import Input from '@/components/UI-Kit/Input'
import Button from '@/components/UI-Kit/Button'
import useAppSelector from '@/hooks/useAppSelector'
import { selectCurrentUser, updateCredentials } from '@/store/slices/auth.slice'
import useAppDispatch from '@/hooks/useAppDispatch'
import Preloader from '@/components/UI-Kit/Preloader'
import { useProfileUpdateMutation } from '@/store/api/endpoints/user.endoint'

const General = () => {
  const { id, name, email } = useAppSelector(selectCurrentUser)
  const dispatch = useAppDispatch()
  const initialValues = { name: name ?? '', email: email ?? '' }
  const [values, setValues] = React.useState(initialValues)

  const [profileUpdate, { isLoading }] = useProfileUpdateMutation()

  async function onProfileUpdate(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()

    const resp = await profileUpdate({ id, ...values }).unwrap()
    console.log('Resp', resp)
    dispatch(updateCredentials(resp))
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }

  const hasChanges = JSON.stringify(values) !== JSON.stringify(initialValues)
  const isDisabled = isLoading || !hasChanges
  const resetForm = () => setValues(initialValues)

  return (
    <React.Fragment>
      {isLoading && <Preloader />}
      <div>
        <form onSubmit={onProfileUpdate} className={styled.form} action="#">
          <div className={styled.title}>
            <h3>General settings</h3>
          </div>
          <div className={styled.col}>
            <div className={styled.formRow}>
              <label className={styled.label} htmlFor="">
                Full name
              </label>
              <Input
                value={values.name}
                placeholder="Full Name"
                className={styled.textField}
                onChange={handleChange}
                name="name"
                type="text"
              />
            </div>
            <div className={styled.formRow}>
              <label className={styled.label} htmlFor="">
                Email
              </label>
              <Input
                className={styled.textField}
                value={values.email}
                onChange={handleChange}
                type="email"
                name="email"
              />
            </div>
            <div className={styled.actions}>
              <Button
                onClick={resetForm}
                variant="ghost"
                disabled={isDisabled}
                type='button'
              >
                Cancel
              </Button>
              <Button variant='outlined' type="submit">Save</Button>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

export default General
