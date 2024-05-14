import React from "react";

export default function useLock() {
  React.useLayoutEffect(() => {
    document.body.style.overflow = 'hidden'
    
    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [])
}