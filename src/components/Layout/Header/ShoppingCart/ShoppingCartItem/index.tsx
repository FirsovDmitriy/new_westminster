import React from 'react'
import Typography from '../../../../UI-Kit/Typography'
import styled from './ShoppingCartItem.module.scss'
import { IoCloseOutline } from "react-icons/io5"
import img from '../../../../../assets/img.webp'
import { FaRegHeart } from "react-icons/fa6"
import IconButton from '../../../../UI-Kit/IconButton'
import Quantity from '../../../../QuantityInput'

const ShoppingCartItem: React.FC = () => {
  return (
    <div className={styled.item}>
      <div className={styled.wrapperImage}>
        <img src={img} className={styled.img} alt="" width="136" height="136" />
      </div>

      <div className={styled.wrapperContent}>
        <div className={styled.col}>
          <Typography tag='h3'>Perfect brows</Typography>

          <IconButton className={styled.favorite}>
            <FaRegHeart />
            <Typography>Add to favorites</Typography>
          </IconButton>

          <Typography tag='p'>54 €</Typography>
        </div>

        
        <div className={styled.row}>
          
          <Quantity quantity={1} />

          <IconButton>
            <IoCloseOutline />
          </IconButton>
        </div>
      </div>

    </div>
  )
}

export default ShoppingCartItem