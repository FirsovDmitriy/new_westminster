import React from 'react'
import styled from './styled.module.scss'
import Card from '../Card'
import Container from '../UI-Kit/Container'

const Showcase: React.FC = () => {
  return (
    <Container className={styled.showcase}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  )
}

export default Showcase