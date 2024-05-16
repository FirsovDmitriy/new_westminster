import React from 'react'
import { MoveLeftIcon } from 'lucide-react'
import CartItem from '../CartItem'
import IconButton from '@/components/UI-Kit/IconButton'
import useLock from '@/hooks/useLock'
import styled from './styled.module.scss'
import useAppSelector from '@/hooks/useTypedSelector'
import { getCart } from '@/store/slices/cart.slice'

interface CartSidebarProps {
  goodsTotal: number | null
  setShow: (parametr: boolean) => void
}

export type Ref = HTMLDivElement

const CartSidebar = React.forwardRef<Ref, CartSidebarProps>(function CartSidebar(props, ref) {
  const { goodsTotal, setShow } = props

  const cart = useAppSelector(getCart)

  useLock()

  const totalSum = cart.reduce(
    (current, { price, quantity }) =>
      Number(price) * quantity + current,
    0
  )

  return (
    <div className={styled.cart} ref={ref}>
      <div className={styled.header}>
        <IconButton
          onClick={() => setShow(false)}
          className={styled.closeButton}>
          <MoveLeftIcon />
        </IconButton>
        <div className={styled.headerRow}>
          <h2>Your cart</h2>
          {goodsTotal && <span>{cart.length} products</span>}
        </div>
        <div className={styled.spaceBlock}></div>
      </div>

      <div className={styled.main}>
        {goodsTotal ? (
          <React.Fragment>
            <div>
              <div className={styled.goodsList}>
                {cart.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>

            <span className={styled.footer}>
              <h3>Total:</h3>
              <p>{totalSum} €</p>
            </span>
          </React.Fragment>
        ) : (
          <h3 className={styled.empty}>Your cart is empty</h3>
        )}
      </div>
    </div>
  )
})

export default CartSidebar
