import React from 'react'
import styled from './Toast.module.scss'
import { ToastProps } from './type'
import Typography from '../Typography'
import Portal from '../../Portal'

const Toast: React.FC<ToastProps> = props => {
  const {
    title,
    text
  } = props

  const [show, setShow] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, 10000)
  }, [])

  if(!show) return null
 
  return (
    <Portal>
      <div className={styled.toast}>
        <div>
          <Typography tag='h4'>
            { title }
          </Typography>
          <p>
            { text }
          </p>
        </div>
      </div>
    </Portal>
  )
}

export default Toast