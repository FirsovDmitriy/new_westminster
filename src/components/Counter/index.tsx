import React from 'react'
import styled from './styled.module.scss'
import IconButton from '@/components/UI-Kit/IconButton'
import { Minus, Plus } from 'lucide-react'
import { QuantityProps } from './type'
import cn from 'classnames'
import useAppDispatch from '@/hooks/useAppDispatch'
import { decrement, increment,control } from '@/store/slices/cart.slice'

const Counter = (props: QuantityProps) => {
  const { item } = props

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value)
    dispatch(control({ id: item.id, value }))
  }

  const dispatch = useAppDispatch()

  return (
    <div className={styled.Counter}>
      <IconButton
        className={styled.Counter__Button}
        onClick={() => dispatch(decrement(item.id))}
        disabled={item.quantity === 1}
      >
        <Minus size={20} />
      </IconButton>
        <input
          className={cn(styled.Counter__TextField)}
          value={item.quantity}
          onChange={handleChange}
          type="text"
        />
      <IconButton
        onClick={() => dispatch(increment(item.id))}
        className={styled.Counter__Button}
      >
        <Plus size={20} />
      </IconButton>
    </div>
  )
}

export default Counter