import styled from './styled.module.scss'
import { ToastProps } from './type'
import { X } from 'lucide-react'
import IconButton from '@/components/UI-Kit/IconButton'
import useAppDispatch from '@/hooks/useAppDispatch'
import { remove } from './toast.slice'
import cn from 'classnames'

const Toast = ({ toast }: ToastProps) => {
  const { id, status = 'default', isClosable = false } = toast
  const dispatch = useAppDispatch()

  const handleClose = () => {
    dispatch(remove(id))
  }

  return (
    <div className={cn(
      styled.toast,
      {
        [styled.toast_error]: status === 'error',
        [styled.toast_success]: status === 'success'
      }
    )}>
      <div className={styled.row}>
        <p className={styled.title}>{toast.title}</p>
        {isClosable && <IconButton onClick={handleClose} className={styled.icon}>
          <X />
        </IconButton>}
      </div>
    </div>
  )
}

export default Toast
