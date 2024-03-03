import React from 'react'
import Typography from '../../../components/UI-Kit/Typography'
import AppLink from '../../../components/UI-Kit/AppLink'
import routesPath from '../../../router/routesPath'
import Card from '../../../components/Card'
import Container from '../../../components/UI-Kit/Container'
import styled from './Showcase.module.scss'

const Showcase: React.FC = () => {
  return (
    <section>
      <Container>
        <div className={styled.row}>
          <Typography tag='h2'>
            Shop The Latest
          </Typography>
          <AppLink href={routesPath.CATALOG}>View All</AppLink>
        </div>

        <div className={styled.showcase}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Container>

    </section>
  )
}

export default Showcase