import styled from './styled.module.scss'
import { Goods } from '@/types/Goods'
import AppLink from '@/components/UI-Kit/AppLink'
import { priceFormation } from '@/utils'

interface SearchFormCardProps {
  item: Goods
  onClose: (arg: boolean) => void
}

const SearchFormCard = ({ item, onClose }: SearchFormCardProps) => {

  const formattedPrice = priceFormation(item?.price)

  return (
    <article className={styled.card} onClick={() => onClose(false)}>
      <AppLink to={`/goods/${ item.id }`} className={styled.link}>
        <div className={styled.imageWrapper}>
          <img src={item.previewImage} width={100} height={100} alt="" />
        </div>
        <div className={styled.contentWrapper}>
          <p>
            { item?.name }
          </p>
          <p>
            { formattedPrice }
          </p>
        </div>
      </AppLink>
    </article>
  )
}

export default SearchFormCard