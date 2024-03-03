import React from 'react'
import Typography from '../../../components/UI-Kit/Typography'
import Input from '../../../components/UI-Kit/Input'
import styled from './AccountDetails.module.scss'
import Button from '../../../components/UI-Kit/Button'
import useAppSelector from '../../../hooks/useAppSelector'
import { selectCurrentUser, updateCredentials } from '../../../store/slice/auth.slice'
import { useUpdateUserMutation, useUploadFileMutation } from '../../../store/api'
import useAppDispatch from '../../../hooks/useAppDispatch'
import cn from 'classnames'
import { MdDeleteOutline } from "react-icons/md"
import IconButton from '../../../components/UI-Kit/IconButton'
import Preloader from '../../../components/UI-Kit/Preloader'
import Toast from '../../../components/UI-Kit/Toast'

interface IUpdateData {
  name?: string
  lastName?: string
  email?: string
  avatar?: number
}

const AccountDetails: React.FC = () => {
  const user = useAppSelector(selectCurrentUser)
  const dispatch = useAppDispatch()

  const [name, setName] = React.useState(user?.name)
  const [lastName, setLastName] = React.useState(user?.lastName ?? '')
  const [email, setEmail] = React.useState(user?.email)
  const [picture, setPicture] = React.useState<File | null>(null)

  const [updateData, setUpdateData] = React.useState<IUpdateData>({})

  const [updateUser, { isLoading, isSuccess }] = useUpdateUserMutation()
  const [uploadFile] = useUploadFileMutation()

  const addPicture = () => {
    if(!picture) return

    const formData = new FormData()
    formData.append('file', picture)

    uploadFile(formData).then(resp => {

      setUpdateData({
        ...updateData,
        avatar: resp?.id
      })

      console.log('Responce', resp)
    })
  }



  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    setUpdateData({
      name,
      lastName,
      email
    })
    addPicture()

    const resp = await updateUser({ ...updateData, id: user.id }).unwrap()
    dispatch(updateCredentials(resp))
  }

  const handleUploadPicture = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedPicture = event.target.files ? event.target.files[0] : null

    setPicture(uploadedPicture)
  }

  return (
    <>
      { isLoading && <Preloader /> }
      <div className={styled.accountDetails}>
        <form
          className={styled.form}
          action="#"
          onSubmit={handleSubmit}
        >
          <Typography className={styled.title} tag='h3'>Account details</Typography>
          <div className={styled.row}>
            <Input
              placeholder='First name'
              value={name}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setName(event.target.value)
              }}
            />
          </div>
          <div className={styled.row}>
            <Input
              placeholder='Last name'
              value={lastName}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setLastName(event.target.value)
              }}
            />
          </div>
          <div className={styled.row}>
            <Input
              placeholder='Email address'
              value={email}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(event.target.value)
              }}
            />
          </div>

          <div className={styled.row}>
            <div className={styled.inputFile}>
              <label
                htmlFor="picture"
                className={cn('form-field', styled.label)}
              >
                <span className={styled.inputFileRow}>
                  <p>Choose File</p>
                  {picture
                    ? <p>
                        { picture?.name }
                      </p>
                    : <p>No file chosen</p>}
                </span>

                <IconButton
                  onClick={() => setPicture(null)}
                  className={styled.iconDelete}
                >
                  <MdDeleteOutline />
                </IconButton>
              </label>
              <input
                onChange={handleUploadPicture}
                type="file"
                name=""
                id="picture"
                className={styled.input}
                accept="image/*"
              />
            </div>
          </div>

          <Button type='submit' variant='outlined'>
            save changes
          </Button>

        </form>
      </div>

      {isSuccess && <Toast title='Data success update' />}
    </>
  )
}

export default AccountDetails