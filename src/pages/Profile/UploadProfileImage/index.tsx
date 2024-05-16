import React from 'react'
import styled from './styled.module.scss'
import useTypedSelector from '@/hooks/useTypedSelector'
import { selectCurrentUser } from '@/store/slices/auth.slice'
import cn from 'classnames'
import Preloader from '@/components/UI-Kit/Preloader'
import {
  useUploadFileMutation
} from '@/store/api/endpoints/user.endoint'
import Dialog from './dialog'

interface UploadProfileImageProps {
  className?: string
}

const UploadProfileImage = ({ className }: UploadProfileImageProps) => {
  const [show, setShow] = React.useState(true)
  const [imageUrl, setImageUrl] = React.useState<string | ''>('')
  const user = useTypedSelector(selectCurrentUser)

  const [uploadFile, { isLoading, isSuccess }] = useUploadFileMutation()

  const handlePreloadImage = async ({
    target: { files },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const file = files ? files[0] : null

    if (!file) return

    const name = `${user?.id}/${file.name}`

    try {
      const response = await uploadFile({ name, file }).unwrap()
      if (typeof response === 'string') {
        setImageUrl(response)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <React.Fragment>
      <label className={cn(className, styled.uploadAvatar)}>
        <span>
          Upload a picture
        </span>
        <input
          onChange={handlePreloadImage}
          type="file"
          className={styled.input}
          accept="image/*"
        />
      </label>
      {isSuccess && (
        <Dialog
          imageUrl={imageUrl}
          show={show}
          onClose={setShow}
        />
      )}
      {isLoading && <Preloader />}
    </React.Fragment>
  )
}

export default UploadProfileImage
