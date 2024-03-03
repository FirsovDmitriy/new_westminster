import { FC } from 'react'
import { TypographyProps } from './type'
import cn from 'classnames'

const Typography: FC<TypographyProps> = props => {
  const {
    children,
    tag = 'p',
    className,
  } = props

  const Tag = tag

  return (
    <Tag className={cn(className)}>
      { children }
    </Tag>
  )
}

export default Typography