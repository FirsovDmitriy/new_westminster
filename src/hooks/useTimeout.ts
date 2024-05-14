import React from 'react'

type Callback = (...parametr: unknown[]) => void

export default function useTimeout(callback: Callback, delay: number | null | undefined) {

  React.useEffect(() => {
    if(delay === null) return undefined
    let id: number | null = null

    id = window.setTimeout(() => {
      callback()
    }, delay)
    
    return () => {
      if(id) window.clearTimeout(id)
    }
  }, [delay, callback])
}