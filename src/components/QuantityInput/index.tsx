import React from 'react'
import styled from './styled.module.scss'
import IconButton from '../UI-Kit/IconButton'
import { Minus, Plus } from 'lucide-react'
import { QuantityProps } from './type'
import cn from 'classnames'
import useAppDispatch from '@/hooks/useAppDispatch'
import { decrement, increment } from '@/store/slices/cart.slice'

const QuantityInput = (props: QuantityProps) => {
  const { item } = props

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value)
  }

  const dispatch = useAppDispatch()

  return (
    <div className={styled.quantityInput}>
      <IconButton
        className={styled.button}
        onClick={() => dispatch(decrement(item.id))}
        disabled={item.quantity === 1}
      >
        <Minus size={20} />
      </IconButton>
        <input
          type="text"
          className={cn(styled.input)}
          value={item.quantity}
          onChange={handleChange}
        />
      <IconButton
        onClick={() => dispatch(increment(item.id))}
        className={styled.button}
      >
        <Plus size={20} />
      </IconButton>
    </div>
  )
}

export default QuantityInput