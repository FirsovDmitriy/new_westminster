import React from 'react'
import IconButton from '@/components/UI-Kit/IconButton'
import Button from '@/components/UI-Kit/Button'
import Popup from '@/components/UI-Kit/Popup'
import styled from './styled.module.scss'
import useAppDispatch from '@/hooks/useAppDispatch'
import { getUser, updateCredentials } from '@/store/slices/auth.slice'
import {
  useDeleteFileMutation,
  useProfileUpdateMutation,
} from '@/store/api/endpoints/user.endoint'
import Preloader from '@/components/UI-Kit/Preloader'
import { X } from 'lucide-react'
import useTypedSelector from '@/hooks/useTypedSelector'
import useLock from '@/hooks/useLock'

interface DialogProps {
  show: boolean
  onClose: (arg: boolean) => void
  imageUrl: string
}

const Dialog = ({ show, onClose, imageUrl }: DialogProps) => {
  const dispatch = useAppDispatch()
  const [isDelete, setIsDelete] = React.useState(true)
  const [profileUpdate, { isLoading }] = useProfileUpdateMutation()
  const user = useTypedSelector(getUser)
  const [deleteFile] = useDeleteFileMutation()

  const deleteProfileImage = React.useCallback(async () => {
    const key = imageUrl.split('storage/v1/object/public/avatars/')[1]
    await deleteFile(key).unwrap()
  }, [imageUrl, deleteFile])

  React.useEffect(() => {
    return () => {
      if (isDelete) {
        deleteProfileImage()
      }
    }
  }, [])

  const handleSetProfileImage = (event: React.SyntheticEvent) => {
    event.preventDefault()

    profileUpdate({
      id: user?.id,
      ...{ profileImage: imageUrl },
    })
      .unwrap()
      .then(response => {
        dispatch(updateCredentials(response))
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setIsDelete(false)
        onClose(false)
      })
  }

  useLock()

  return (
    <React.Fragment>
      <Popup
        onClose={() => onClose(false)}
        show={show}
        className={styled.preview}>
        <div className={styled.previewHeader}>
          <h3 className={styled.previewTitle}>Preview</h3>
          <IconButton
            className={styled.previewClose}
            onClick={() => onClose(false)}
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
              src={imageUrl}
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
                className={styled.previewButton}>
                Set profile image
              </Button>
            </div>
          </div>
        </form>
      </Popup>
      {isLoading && <Preloader />}
    </React.Fragment>
  )
}

export default Dialog
