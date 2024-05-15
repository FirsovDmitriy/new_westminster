import React from 'react'
import styled from './styled.module.scss'
import Popup from '@/components/UI-Kit/Popup'
import useAppSelector from '@/hooks/useAppSelector'
import { selectCurrentUser, updateCredentials } from '@/store/slices/auth.slice'
import useAppDispatch from '@/hooks/useAppDispatch'
import cn from 'classnames'
import Button from '@/components/UI-Kit/Button'
import IconButton from '@/components/UI-Kit/IconButton'
import { X } from 'lucide-react'
import Preloader from '@/components/UI-Kit/Preloader'
import {
  useDeleteFileMutation,
  useUploadFileMutation,
  useProfileUpdateMutation,
} from '@/store/api/endpoints/user.endoint'

interface UploadProfileImageProps {
  className?: string
}

const UploadProfileImage = ({ className }: UploadProfileImageProps) => {
  const [show, setShow] = React.useState(true)
  const [imagePath, setImagePath] = React.useState<string | ''>('')

  const dispatch = useAppDispatch()

  const user = useAppSelector(selectCurrentUser)

  const [uploadFile, { isLoading, isSuccess }] = useUploadFileMutation()

  const [profileUpdate, { isLoading: isUpdating }] = useProfileUpdateMutation()

  const [deleteFile] = useDeleteFileMutation()

  const handlePreloadImage = async ({
    target: { files },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const file = files ? files[0] : null

    if (!file) return

    const name = `${user?.id}/${file.name}`

    try {
      const resp = await uploadFile({ name, file }).unwrap()
      if (typeof resp === 'string') {
        setImagePath(resp)
      }
    } catch (error) {
      console.log('Error', error)
    }
  }

  const deleteProfileImage = React.useCallback(async () => {
    const key = imagePath.split('storage/v1/object/public/avatars/')[1]
    await deleteFile(key).unwrap()
  }, [imagePath, deleteFile])

  React.useEffect(() => {
    return () => {
      // deleteProfileImage()
    }
  }, [deleteProfileImage, user])

  const handleSetProfileImage = (event: React.SyntheticEvent) => {
    event.preventDefault()
    
    profileUpdate({
      id: user?.id,
      ...{ profileImage: imagePath }
    })
    .unwrap()
    .then(resp => {
      dispatch(updateCredentials(resp))
    })
    .catch(error => {
      console.log(error)
    })
    .finally(() => {
      setShow(false)
    })
  }

  return (
    <React.Fragment>
      <label className={cn(className, styled.uploadAvatar)}>
        <span>Upload a picture</span>
        <input
          onChange={handlePreloadImage}
          type="file"
          className={styled.input}
          accept="image/*"
        />
      </label>

      {isSuccess && (
        <Popup
          onClose={() => setShow(false)}
          show={show}
          className={styled.preview}>
          <div className={styled.previewHeader}>
            <h3 className={styled.previewTitle}>Preview</h3>
            <IconButton
              className={styled.previewClose}
              onClick={() => setShow(false)}
              type="button">
              <X />
            </IconButton>
          </div>
          <form
            className={styled.previewForm}
            action="#"
            onSubmit={handleSetProfileImage}>
            <div className={styled.previewWrapperImage}>
              <img
                className={styled.previewImage}
                src={imagePath}
                width="288"
                height="288"
                alt="Preview profile image"
              />
            </div>

            <div className={styled.previewFooter}>
              <div>
                <Button
                  variant="outlined"
                  type="submit"
                  className={styled.previewButton}
                >
                  Set profile image
                </Button>
              </div>
            </div>
          </form>
        </Popup>
      )}
      {isLoading && <Preloader />}
      {isUpdating && <Preloader />}
    </React.Fragment>
  )
}

export default UploadProfileImage
