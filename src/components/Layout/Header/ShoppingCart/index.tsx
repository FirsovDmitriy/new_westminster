import { FC, useRef, useState } from 'react'
import { FiShoppingCart } from "react-icons/fi";
import styled from './ShoppingCart.module.scss'
import cn from 'classnames'
import Portal from '../../../Portal'
import AppCSSTransition from '../../../AppCSSTransition'
import Typography from '../../../UI-Kit/Typography'
import { IoCloseOutline } from "react-icons/io5";
import ShoppingCartItem from './ShoppingCartItem'
import IconButton from '../../../UI-Kit/IconButton'
import Backdrop from '../../../UI-Kit/Backdrop'

type ShoppingCartProps = {
  className?: string
}

const Cart: FC<ShoppingCartProps> = (props) => {
  const {
    className
  } = props

  const [show, setShow] = useState(false)
  const nodeRef = useRef(null)

  const classNames = {
    enter: styled.enter,
    enterActive: styled.enterActive,
    exit: styled.exit,
    exitActive: styled.exitActive,
  }

  return (
    <div className={cn(styled.cartWrapper, className)}>
      <IconButton
        onClick={() => setShow(true)}
      >
        <FiShoppingCart size={'1.5rem'} />
      </IconButton>

      <Portal>

        <Backdrop
          onClose={() => setShow(false)}
          visible={show}
        />

        <AppCSSTransition
          className={classNames}
          show={show}
          nodeRef={nodeRef}
        >
          <div
            className={styled.cart}
            ref={nodeRef}
          >
            <IconButton onClick={() => setShow(false)} className={styled.closeButton}>
              <IoCloseOutline />
            </IconButton>
            <div className={styled.container}>
              <div className={styled.header}>
                <Typography tag='h2'>Shopping bag</Typography>
                <Typography tag='span'>2 products</Typography>
              </div>
              <div className={styled.main}>

                <ShoppingCartItem />

              </div>
              <div className={styled.priceLine}>
                <Typography tag='h3'>Total:</Typography>
                <Typography>108 €</Typography>
              </div>
            </div>
          </div>
        </AppCSSTransition>
      </Portal>
    </div>
  )
}

export default Cart