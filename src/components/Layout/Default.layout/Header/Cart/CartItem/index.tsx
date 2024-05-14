import styled from './styled.module.scss'
import { X } from "lucide-react"
import IconButton from '@/components/UI-Kit/IconButton'
import Quantity from '@/components/QuantityInput'
import { Goods } from '@/types/Goods'
import useAppDispatch from '@/hooks/useAppDispatch'
import { removeGoods } from '@/store/slices/cart.slice'
import { priceFormation } from '@/utils'

interface CartItemProps {
  item: Goods
}

const CartItem = ({ item }: CartItemProps) => {
  const dispatch = useAppDispatch()

  const remove = () => {
    dispatch(removeGoods(item.id))
  }

  const formated = priceFormation(item.price)

  return (
    <div className={styled.item}>
      <div className={styled.wrapperImage}>
        <img
          src={item?.previewImage}
          className={styled.img}
          alt=""
          width="136"
          height="136"
        />
      </div>

      <div className={styled.wrapperContent}>
        <div className={styled.col}>
          <h3>
            { item?.name }
          </h3>

          <p>
            { formated }
          </p>
        </div>

        
        <div className={styled.actions}>
          
          <Quantity
            item={item}
          />

          <IconButton onClick={remove}>
            <X size={20}/>
          </IconButton>
        </div>
      </div>

    </div>
  )
}

export default CartItem