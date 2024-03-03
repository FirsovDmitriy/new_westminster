import React from 'react'
import styled from './Quantity.module.scss'
import IconButton from '../UI-Kit/IconButton'
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { QuantityProps } from './type'
import cn from 'classnames'

const QuantityInput: React.FC<QuantityProps> = ({ quantity, onCount }) => {

  return (
    <div className={styled.quantityInput}>
      <IconButton
        className={styled.button}
        onClick={() => onCount(prev => prev - 1)}
        disabled={quantity === 1}
      >
        <FaMinus />
      </IconButton>
        <input
          type="text"
          className={cn(styled.input, 'form-field')}
          value={quantity}
        />
      <IconButton onClick={() => onCount(prev => prev + 1)} className={styled.button}>
        <FaPlus />
      </IconButton>
    </div>
  )
}

export default QuantityInput