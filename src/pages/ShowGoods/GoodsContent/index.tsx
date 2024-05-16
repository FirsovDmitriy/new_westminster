import styled from './styled.module.scss'
import Button from '@/components/UI-Kit/Button'
import { Goods } from '@/types/Goods'
import { MoveLeftIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import useAppDispatch from '@/hooks/useAppDispatch'
import { getCart, putGoods } from '@/store/slices/cart.slice'
import useAppSelector from '@/hooks/useTypedSelector'
import { inCart, priceFormation } from '@/utils'

interface GoodsContentProps {
  item: Goods
}

const GoodsContent = (props: GoodsContentProps) => {
  const { item } = props
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const cart = useAppSelector(getCart)

  const formattedPrice = priceFormation(item?.price)

  const is = inCart(cart, item?.id)

  return (
    <>
      <div className={styled.content}>
        <Button
          onClick={() => navigate(-1)}
          className={styled.back}
          variant="text"
        >
          <MoveLeftIcon />
          back
        </Button>

        <h2 className={styled.title}>
          {item?.name}
        </h2>

        <p className={styled.price}>
          { formattedPrice }
        </p>

        <div className={styled.row}>
          <Button
            onClick={() => dispatch(putGoods(item))}
            className={styled.button}
            disabled={is}
          >

            {is ? (
              'in cart'
            ) : 'add to cart'}
          </Button>
        </div>

        <div className={styled.meta}>
          <p className={styled.metaText}>
            Categories:
            <span className={styled.metaColor}>{item?.category}</span>
          </p>
          <p>Tags: </p>
        </div>
      </div>
    </>
  )
}

export default GoodsContent
