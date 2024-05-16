import React from 'react'
import styled from './styled.module.scss'
import cn from 'classnames'
import Portal from '@/components/Portal'
import AppCSSTransition from '../../../../AppCSSTransition'
import { ShoppingCartIcon } from 'lucide-react'
import IconButton from '@/components/UI-Kit/IconButton'
import Backdrop from '@/components/UI-Kit/Backdrop'
import useAppSelector from '@/hooks/useTypedSelector'
import { getCart } from '@/store/slices/cart.slice'
import CartSidebar from './CartSidebar'

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

  const cart = useAppSelector(getCart)
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

          <CartSidebar
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
