import Portal from '@/components/Portal'
import useAppSelector from '@/hooks/useTypedSelector'
import { selectToasts } from '../toast.slice'
import Toast from '..'

const Toaster = () => {
  const toasts = useAppSelector(selectToasts)
  
  return (
    <Portal>
      <div role='region' aria-live="polite">
        {toasts.map(toast => (
          <Toast
            toast={toast}
            key={toast.id}
          />
        ))}
      </div>
    </Portal>
  )
}

export default Toaster
