import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../../../components/UI-Kit/Container'
import Gallery from './Gallery'
import styled from './page.module.scss'
import Content from './Content'

const DetailPage: React.FC = () => {
  const { id } = useParams()
  console.log('id', id)

  return (
    <>
      <section>
        <Container className={styled.wrapper}>
          <Gallery />
          <div className={styled.col}>
            <Content />
          </div>
        </Container>
      </section>
    </>
  )
}

export default DetailPage