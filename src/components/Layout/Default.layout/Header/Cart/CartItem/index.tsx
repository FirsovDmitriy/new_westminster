import styled from './styled.module.scss'
import { Trash2Icon } from 'lucide-react'
import IconButton from '@/components/UI-Kit/IconButton'
import Counter from '@/components/Counter'
import { Goods } from '@/types/Goods'
import useAppDispatch from '@/hooks/useAppDispatch'
import { GoodsCart, removeGoods } from '@/store/slices/cart.slice'
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
    <div className={styled.Card}>
      <div className={styled.Card__ImgWrapper}>
        <img src={item?.previewImage} alt="" width="136" height="136" />
      </div>

      <div className={styled.Card__ContentWrapper}>
        <div className={styled.Card__Row}>
          <span>
            <h3>{item?.name}</h3>

            <p>{formated}</p>
          </span>
          <Counter item={item as GoodsCart} />
        </div>

        <div className={styled.Card__Icon}>
          <IconButton onClick={remove}>
            <Trash2Icon size={20} />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default CartItem
