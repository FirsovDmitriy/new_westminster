import styled from './styled.module.scss'
import Card from '../Card'
import { Goods } from '@/types/Goods'

interface ShowcaseProps {
  goods: Goods[]
}

const Showcase = (props: ShowcaseProps) => {
  const { goods } = props

  return (
    <div className={styled.showcase}>
      {goods
        ?.filter(item => item.status === 'active')
        .map(item => (
          <Card
            item={item}
            key={item.id}
          />
        ))}
    </div>
  )
}

export default Showcase
