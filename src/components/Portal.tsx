import React, { ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

type PortalProps = {
  children: ReactNode
}

const Portal: React.FC<PortalProps> = ({ children }) => {

  const container = document.createElement('div')
  const [root] = useState(container)

  useEffect(() => {
    document.body.append(root)

    return () => {
      root.remove()
    }
  })

  return (
    <React.Fragment>
      {createPortal(children, root)}
    </React.Fragment>
  )
}

export default Portal