import React from 'react'
import Typography from '../../../../components/UI-Kit/Typography'
import useAppSelector from '../../../../hooks/useAppSelector'
import { selectCurrentUser } from '../../../../store/slice/auth.slice'
import styled from './Dashboard.module.scss'
import mockPicture from '../../../../../public/avatar.webp'
import { useGetPictureQuery } from '../../../../store/api'
import Dropdown from '../../../../components/UI-Kit/Dropdown'
import cn from 'classnames'
import { MdEdit } from "react-icons/md"
import EditPicture from './EditPicture'
import Button from '../../../../components/UI-Kit/Button'
import { MdLogout } from "react-icons/md"

const Dashboard: React.FC = () => {
  const [show, setShow] = React.useState(false)
  const user = useAppSelector(selectCurrentUser)
  const { data, isLoading } = useGetPictureQuery(user?.avatar)

  if(isLoading) return
  const avatar = user?.avatar ? data?.url : mockPicture

  return (
    <div className={styled.col}>

      <div className={styled.profilePicture}>
        <div className={styled.imageWrapper}>
          <img src={avatar} alt="" />
        </div>

        <div className={styled.menu}>
          <Dropdown onClose={() => setShow(false)}>
            <Dropdown.Trigger>
              <button
                onClick={() => setShow(prev => !prev)}
                className={cn('base-button', styled.editButton)}
              >
                <MdEdit />
              </button>
            </Dropdown.Trigger>
            <Dropdown.Wrapper show={show}>
              <Dropdown.Item>
                <EditPicture />
              </Dropdown.Item>
              <Dropdown.Item>
                <button className={cn('base-button', styled.button)}>Delete</button>
              </Dropdown.Item>
            </Dropdown.Wrapper>
          </Dropdown>
        </div>

      </div>

      <Typography tag='h3'>
        { `Hi ${ user?.name ?? 'Unknown Raccoon' }` }
      </Typography>
      <p>
        { user.email }
      </p>
      <Button variant='outlined'>
        edit profile
      </Button>
      <button className={cn('base-button', styled.logoutButton)}>
        <MdLogout />
        Logout
      </button>
    </div>
  )
}

export default Dashboard