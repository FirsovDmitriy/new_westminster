import React from 'react'
import styled from './styled.module.scss'
import Dropdowns from '@/components/UI-Kit/Dropdowns'
import useTypedSelector from '@/hooks/useTypedSelector'
import {
  loggedOut,
  selectCurrentUser,
  updateCredentials
} from '@/store/slices/auth.slice'
import Image from '@/components/UI-Kit/Image'
import mock from '../../../../public/avatar.webp'
import IconButton from '@/components/UI-Kit/IconButton'
import { LogOut, Pencil, MoveRightIcon } from 'lucide-react'
import UploadProfileImage from '../UploadProfileImage'
import cn from 'classnames'
import useAppDispatch from '@/hooks/useAppDispatch'
import AppLink from '@/components/UI-Kit/AppLink'
import routesPath from '@/router/routesPath'
import { useDeleteFileMutation, useProfileUpdateMutation } from '@/store/api/endpoints/user.endoint'

const ProfileCard = () => {
  const [show, setShow] = React.useState(false)

  const dispatch = useAppDispatch()

  const user = useTypedSelector(selectCurrentUser)

  function handleLoggedOut() {
    dispatch(loggedOut())
  }

  const [deleteFile] = useDeleteFileMutation()
  const [profileUpdate] = useProfileUpdateMutation()

  const deleteProfileImage = async () => {
    const key = user?.profileImage.split('storage/v1/object/public/avatars/')[1]

    if(typeof(key) !== 'string') return
    
    try {
      await deleteFile(key).unwrap()
      const resp = await profileUpdate({ id: user?.id, avatar: null }).unwrap()

      dispatch(updateCredentials(resp))
    } catch (error) {
      console.log('Error', error)
    }

  }

  return (
    <div className={styled.profileCard}>
 
        <React.Fragment>
          <div className={styled.avatar}>
            <div className={styled.imageWrapper}>
              <Image
                src={user?.profileImage ? user.profileImage : mock}
              />
            </div>

            <div className={styled.menu}>
              <Dropdowns onClose={() => setShow(false)}>
                <Dropdowns.Trigger>
                  <button
                    onClick={() => setShow(prev => !prev)}
                    className={cn('base-button', styled.editButton)}
                  >
                    <Pencil size={20} />
                  </button>
                </Dropdowns.Trigger>
                <Dropdowns.Menu show={show}>
                  <Dropdowns.Item>
                    <UploadProfileImage className={styled.item} />
                  </Dropdowns.Item>

                 {user?.profileImage && (
                   <Dropdowns.Item>
                    <button
                      className={cn(styled.item, 'base-button')}
                      onClick={deleteProfileImage}
                    >
                      Delete
                    </button>
                  </Dropdowns.Item>
                 )}
                </Dropdowns.Menu>
              </Dropdowns>
            </div>
          </div>

          <h3>
            {`Hi ${user?.fullName ?? 'Unknown Raccoon'}`}
          </h3>

          <p>{ user?.email }</p>

          <AppLink
            to={routesPath.EDIT_PROFILE}
            className={cn(styled.link)}
          >
            Edit your profile
            <MoveRightIcon />
          </AppLink>

          <IconButton
            className={styled.logoutButton}
            onClick={handleLoggedOut}
          >
            <LogOut />
            Logout
          </IconButton>
        </React.Fragment>
    </div>
  )
}

export default ProfileCard
