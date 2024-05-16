import React from 'react'
import { selectmMode } from '@/store/slices/colorScheme.slice'
import useAppSelector from '@/hooks/useTypedSelector'

type ThemeColorProps = {
  children: React.ReactNode
}

const ThemeColor = (props: ThemeColorProps) => {
  const mode = useAppSelector(selectmMode)

  React.useEffect(() => {
    const htmlNode = document.documentElement

    switch (mode) {
      case 'light':
      case 'dark':
        localStorage.setItem('color-mode', JSON.stringify(mode))
        htmlNode.setAttribute('data-theme', mode)
        break
      default:
        localStorage.removeItem('color-mode')
        htmlNode.removeAttribute('data-theme')
        break
    }
  }, [mode])
  return <> { props.children } </>
}

export default ThemeColor