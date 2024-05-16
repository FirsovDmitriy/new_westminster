import styled from './styled.module.scss'
import AppLink from '@/components/UI-Kit/AppLink'
import Image from '@/components/UI-Kit/Image'
import { ShoppingBagIcon } from 'lucide-react'
import IconButton from '../UI-Kit/IconButton'
import { Goods } from '@/types/Goods'
import useAppDispatch from '@/hooks/useAppDispatch'
import { getCart, putGoods } from '@/store/slices/cart.slice'
import useTypedSelector from '@/hooks/useTypedSelector'
import { inCart } from '@/utils'
import { priceFormation } from '@/utils'

interface CardProps { item: Goods }

const Card = (props: CardProps) => {
  const { item } = props
  const dispatch = useAppDispatch()
  const cart = useTypedSelector(getCart)

  const handlePutGoods = (event: React.SyntheticEvent) => {
    event.stopPropagation()
    dispatch(putGoods(item))
  }

  const is = inCart(cart, item.id)
  const formattedPrice = priceFormation(item?.price)

  return (
    <article className={styled.card}>
      <AppLink to={`/goods/${item.id}`}>
        <div className={styled.imageWrapper}>
          <Image
            src={item?.previewImage}
            alt=""
            className={styled.img}
          />
          {item.discount && <span className={styled.marker}>Sale</span>}
        </div>
        <div className={styled.contentWrapper}>
          <h3 className={styled.cardTitle}>
            { item?.name }
          </h3>
          <p className={styled.price}>
            { formattedPrice } 
          </p>

          {is
            ? <span className={styled.inCart}>
               <ShoppingBagIcon /> In Cart
              </span>
            : <IconButton onClick={handlePutGoods}>
                <ShoppingBagIcon />
              </IconButton>}
        </div>
      </AppLink>
    </article>
  )
}

export default Card
