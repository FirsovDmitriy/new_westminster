import React from 'react'
import { MoveLeftIcon } from 'lucide-react'
import CartItem from '../CartItem'
import IconButton from '@/components/UI-Kit/IconButton'
import useLock from '@/hooks/useLock'
import styled from './styled.module.scss'
import useTypedSelector from '@/hooks/useTypedSelector'
import { getCart, getTotalSum } from '@/store/slices/cart.slice'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'
import routesPath from '@/router/routesPath'
import { priceFormation } from '@/utils'

interface CartPopupProps {
  goodsTotal: number | null
  setShow: (arg: boolean) => void
}

export type Ref = HTMLDivElement

const CartPopup = React.forwardRef<Ref, CartPopupProps>(
  function CartPopup(props, ref) {
    const { goodsTotal, setShow } = props
    const cart = useTypedSelector(getCart)
    const totalSum = useTypedSelector(getTotalSum)

    const formattedValue = priceFormation(totalSum)

    useLock()

    // const totalSum = cart.reduce(
    //   (current, { price, quantity }) => Number(price) * quantity + current,
    //   0
    // )

    return (
      <div className={styled.Cart} ref={ref}>
        <div className={styled.Header}>
          <IconButton
            onClick={() => setShow(false)}
            className={styled.Header__ArrowBack}>
            <MoveLeftIcon />
          </IconButton>
          <div className={styled.Header__Row}>
            <h2>Your cart</h2>
            {goodsTotal && <span>{cart.length} products</span>}
          </div>
          <div className={styled.Header__SpaceBlock}></div>
        </div>
        <div className={styled.Cart__Main}>
          {goodsTotal ? (
            <React.Fragment>
              <div>
                <div className={styled.Cart__List}>
                  {cart.map(item => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
              </div>
              <div className={styled.Footer}>
                <span className={styled.Footer__Row}>
                  <h3>Total:</h3>
                  <p>{formattedValue}</p>
                </span>
                <NavLink
                  className={cn(styled.Footer__Button, 'base-button button button_ghost')}
                  onClick={() => setShow(false)}
                  to={routesPath.CHECKOUT}
                >
                  Proceed to Checkout
                </NavLink>
              </div>
            </React.Fragment>
          ) : (
            <h3 className={styled.Cart__Empty}>
              Your cart is empty
            </h3>
          )}
        </div>
      </div>
    )
  }
)

export default CartPopup
