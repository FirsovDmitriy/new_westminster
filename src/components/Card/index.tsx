import styled from './styled.module.scss'
import AppLink from '@/components/UI-Kit/AppLink'
import Image from '@/components/UI-Kit/Image'
import { Goods } from '@/types/Goods'
import useAppDispatch from '@/hooks/useAppDispatch'
import {
  getCart,
  putGoods,
} from '@/store/slices/cart.slice'
import useTypedSelector from '@/hooks/useTypedSelector'
import { priceFormation } from '@/utils'
import { Plus, ShoppingBag } from 'lucide-react'
import IconButton from '@/components/UI-Kit/IconButton'

interface CardProps {
  item: Goods
}

const Card = ({ item }: CardProps) => {
  const dispatch = useAppDispatch()
  const cart = useTypedSelector(getCart)

  const handlePutGoods = (event: React.SyntheticEvent) => {
    event.stopPropagation()
    dispatch(putGoods(item))
  }

  const inCart = cart.some(goods => goods.id === item.id)
  const formattedPrice = priceFormation(item?.price)

  return (
    <article className={styled.Card}>
      <AppLink to={`/goods/${item.id}`}>
        <div className={styled.Card__ImgWrapper}>
          <Image src={item?.previewImage} alt="" className={styled.Card__Image} />
          {item.discount && <span className={styled.Card__Marker}>Sale</span>}
        </div>
      </AppLink>
      <div className={styled.Card__ContentWrapper}>
        <AppLink to={`/goods/${item.id}`}>
          <h3 className={styled.Card__Title}>{item?.name}</h3>
        </AppLink>
        <div className={styled.Card__Row}>
          <p className={styled.Card__Price}>{formattedPrice}</p>
          <IconButton
              onClick={handlePutGoods}
              className={styled.Card__Button}
              type="button"
              disabled={inCart}
            >
              {inCart ? (
                <ShoppingBag />
              ) : <Plus />}
            </IconButton>
        </div>
      </div>
    </article>
  )
}

export default Card
