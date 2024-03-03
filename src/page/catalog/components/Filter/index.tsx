import React from 'react'
import Container from '../../../../components/UI-Kit/Container'
import styled from './Filter.module.scss'
import Typography from '../../../../components/UI-Kit/Typography'
import PriceRange from './PriceRange'
import cn from 'classnames'
import SelectColor from './SelectColor'
import Checkbox from '../../../../components/UI-Kit/Checkbox'

const Filter: React.FC = () => {

  return (
    <section className={styled.filter}>
      <Container>
        <div className={styled.row}>
          <Typography>Filter:</Typography>

          <PriceRange />

          <SelectColor />

          <Checkbox label='On sale' />

        </div>
        <div className={styled.row}></div>
      </Container>
    </section>
  )
}

export default Filter