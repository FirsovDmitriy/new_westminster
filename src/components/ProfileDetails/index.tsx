import React from 'react'
import styled from './styled.module.scss'
import Dropdowns from '../UI-Kit/Dropdowns'
import useAppSelector from '../../hooks/useAppSelector'
import { selectCurrentUser } from '../../store/slice/auth.slice'
import Image from '../UI-Kit/Image'
import { useGetPictureQuery } from '../../store/api'
import mock from '../../../public/avatar.webp'
import { MdEdit } from "react-icons/md"
import Button from '../UI-Kit/Button'
import IconButton from '../UI-Kit/IconButton'
import { MdLogout } from "react-icons/md"
import Preloader from '../UI-Kit/Preloader'
import EditPicture from './EditPicture'

const ProfileDetails: React.FC = () => {
  const [show, setShow] = React.useState(false)

  const user = useAppSelector(selectCurrentUser)
  const { data, isLoading } = useGetPictureQuery(user?.avatar)

  if(isLoading) return
  const avatar = data.url ? data.url : mock

  return (
    <div className={styled.profileDetails}>

     {isLoading
      ? <Preloader />
      : <React.Fragment>
          <div className={styled.avatar}>
            <div className={styled.imageWrapper}>
              <Image src={avatar} />
            </div>

            <div>
              <Dropdowns onClose={() => setShow(false)}>
                <Dropdowns.Trigger>
                  <button
                    onClick={() => setShow(prev => !prev)}
                    className={styled.button}
                  >
                    <MdEdit />
                  </button>
                </Dropdowns.Trigger>
                <Dropdowns.Container show={show}>

                  <Dropdowns.Item>
                    <EditPicture />
                  </Dropdowns.Item>

                  <Dropdowns.Item>
                    Delete
                  </Dropdowns.Item>

                </Dropdowns.Container>
              </Dropdowns>
            </div>

          </div>

          <h3>
            { `Hi ${ user?.name ?? 'Unknown Raccoon' }` }
          </h3>

          <p>
            { user?.email }
          </p>

          <Button>
            edit yout profile
          </Button>
          <IconButton className={styled.logoutButton}>
            <MdLogout />
            Logout
          </IconButton>
        </React.Fragment>}

    </div>
  )
}

export default ProfileDetails