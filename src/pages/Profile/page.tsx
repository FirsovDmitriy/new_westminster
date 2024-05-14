import React from 'react'
import ProfileCard from './ProfileCard'
import styled from './styled.module.scss'

const ProfilePage: React.FC = () => {

  return (
    <section className={styled.profile}>
      <div className={styled.col}>
        <ProfileCard />
      </div>
    </section>
  )
}

export default ProfilePage