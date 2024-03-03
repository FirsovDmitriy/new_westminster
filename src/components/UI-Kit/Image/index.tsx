import React from 'react'
import { ImageProps } from './type'
import styled from './styled.module.scss'

const Image: React.FC<ImageProps> = props => {
  const {
    src,
    ...restProps
  } = props
  return (
    <img
      className={styled.image}
      src={src}
      { ...restProps }
    />
  )
}

export default Image