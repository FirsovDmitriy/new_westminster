import React from 'react'
import OrderList from '../../../components/OrderList'
import ProfileDetails from '../../../components/ProfileDetails'
import styled from './Page.module.scss'

const ProfilePage: React.FC = () => {

  return (
    <section className={styled.profile}>
      <OrderList />
      <ProfileDetails />
    </section>
  )
}

export default ProfilePage