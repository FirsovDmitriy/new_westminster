import styled from './styled.module.scss'
import Card from '../Card'
import Container from '../UI-Kit/Container'
import { Goods } from '@/types/Goods'

interface ShowcaseProps {
  goods: Goods[]
}

const Showcase = (props: ShowcaseProps) => {
  const { goods } = props

  return (
    <Container className={styled.showcase}>
      {goods
        ?.filter(item => item.status === 'active')
        .map(item => (
          <Card
            item={item}
            key={item.id}
          />
        ))}
    </Container>
  )
}

export default Showcase
