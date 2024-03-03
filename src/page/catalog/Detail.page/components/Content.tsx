import React from 'react'
import Typography from '../../../../components/UI-Kit/Typography'
import styled from './Content.module.scss'
import Button from '../../../../components/UI-Kit/Button'
import Radio from './Radio'
import Quantity from '../../../../components/QuantityInput'

const Content: React.FC = () => {

  const [value, setValue] = React.useState('')
  const [size, setSize] = React.useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const getSelectedSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSize(event.target.value)
  }

  console.log(value)
  console.log('size', size)

  return (
    <>
      <div className={styled.content}>
        <Typography className={styled.title} tag='h2'>Pleated Heel Mule</Typography>
        <Typography>$ 20,00</Typography>

        <form action="#">

          <fieldset className={styled.controlGroup}>
            <legend className={styled.controlLegend}>
              <Typography>Color</Typography>
            </legend>
            <Radio
              checked={value === 'Off white'}
              name='color'
              value='Off white'
              onChange={handleChange}
              label='Off white'
            />

            <Radio
              checked={value === 'Beige'}
              name='color'
              value='Beige'
              onChange={handleChange}
              label='Beige'
            />

            <Radio
              checked={value === 'Denim'}
              name='color'
              value='Denim'
              onChange={handleChange}
              label='Denim'
            />

          </fieldset>

          <fieldset className={styled.controlGroup}>
            <legend className={styled.controlLegend}>Size</legend>
            <Radio
              checked={size === '40'}
              name='size'
              value='40'
              onChange={getSelectedSize}
              label='40'
            />
            <Radio
              checked={size === '41'}
              name='size'
              value='41'
              onChange={getSelectedSize}
              label='41'
            />
          </fieldset>

        </form>

        <Quantity quantity={4} />

        <Button className={styled.button} variant='outlined'>
          add to cart
        </Button>

      </div>

      {/* <Typography></Typography> */}
    </>
  )
}

export default Content