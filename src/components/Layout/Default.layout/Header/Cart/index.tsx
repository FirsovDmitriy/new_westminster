import React from 'react'
import styled from './styled.module.scss'
import cn from 'classnames'
import Portal from '@/components/Portal'
import AppCSSTransition from '@/components/AppCSSTransition'
import { ShoppingCartIcon } from 'lucide-react'
import IconButton from '@/components/UI-Kit/IconButton'
import Backdrop from '@/components/UI-Kit/Backdrop'
import useTypedSelector from '@/hooks/useTypedSelector'
import { GoodsCart, getCart } from '@/store/slices/cart.slice'
import CartPopup from './CartPopup'

type ShoppingCartProps = {
  className?: string
}

const Cart = ({ className }: ShoppingCartProps) => {
  const [show, setShow] = React.useState(false)
  const nodeRef = React.useRef(null)

  const classNames = {
    enter: styled.enter,
    enterActive: styled.enterActive,
    exit: styled.exit,
    exitActive: styled.exitActive,
  }

  const cart: GoodsCart[] = useTypedSelector(getCart)

  const cartCreate = {
    lines: cart.map(item => ({
      quantity: item.quantity,
      goods_id: item.id
    })),
    cart: {
      createdAt: Date.now(),
      updatedAt: null
    },
    cost: {
      totalAmount: {
        amount: 50
      },
      subtotalAmount: {
        amount: 700
      }
    }
  }

  // console.log('cart create', cartCreate)

  const goodsTotal = cart.length > 0 ? cart.length : null

  return (
    <div className={cn(styled.cartContainer, className)}>
      <IconButton onClick={() => setShow(true)}>
        <span
          className={cn(styled.content, {
            [styled.contentHide]: !goodsTotal,
          })}
          data-goodstotal={goodsTotal}>
          <ShoppingCartIcon />
        </span>
      </IconButton>
      <Portal>
        <Backdrop onClose={() => setShow(false)} visible={show} />
        <AppCSSTransition className={classNames} show={show} nodeRef={nodeRef}>
          <CartPopup
            goodsTotal={goodsTotal}
            ref={nodeRef}
            setShow={setShow}
          />
        </AppCSSTransition>
      </Portal>
    </div>
  )
}

export default Cart
