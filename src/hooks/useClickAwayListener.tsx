import { RefObject, useCallback, useEffect } from "react";

type func = () => void

export default function useClickAwayListener(nodeRef: RefObject<HTMLElement>, handler: func) {

  const handleClickAway = useCallback((event: MouseEvent | TouchEvent) => {

    if(!nodeRef.current) {
      return
    }

    const insideDOM = event.composedPath().includes(nodeRef.current)

    if(!insideDOM) {
      handler()
    }
  }, [nodeRef, handler])

  useEffect(() => {
    document.addEventListener('click', handleClickAway)
    return () => {
      document.removeEventListener('click', handleClickAway)
    }
  }, [handleClickAway])

  // useEffect(() => {
  //   document.addEventListener('touchend', handleClickAway)

  //   return () => {
  //     document.removeEventListener('touchend', handleClickAway)
  //   }
  // }, [handleClickAway])
}