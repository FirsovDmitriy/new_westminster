import React from 'react'
import cn from 'classnames'
import styled from './styled.module.scss'
import Input from '@/components/UI-Kit/Input'
import IconButton from '@/components/UI-Kit/IconButton'
import { SearchIcon, X } from 'lucide-react'
import { useSearchGoodsByNameQuery } from '@/store/api/endpoints/goods.endpoint'
import Preloader from '@/components/UI-Kit/Preloader'
import { Goods } from '@/types/Goods'
import useDebounce from '@/hooks/useDebounce'
import SearchCard from '../SearchCard'
import useLock from '@/hooks/useLock'

interface SearchFormProps {
  show: boolean
  onClose: (arg: boolean) => void
}

export type Ref = HTMLDivElement

const SearchForm = React.forwardRef<Ref, SearchFormProps>(function SearchForm({ onClose }, ref) {
  const [searchQuery, setSearchQuery] = React.useState<string>('')
  const value = useDebounce(searchQuery, 800)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  const { data, isLoading } = useSearchGoodsByNameQuery(searchQuery !== '' ? value : null)
  console.log('result search', data)

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
  }

  useLock()

  return (
    <div className={cn(styled.form)} ref={ref}>
      <div className={styled.wrapper}>
        <form className={styled.searchField} action="#" onSubmit={handleSubmit}>
          <div className={styled.row}>
            <Input
              placeholder="Search..."
              className={styled.formControl}
              value={searchQuery}
              onChange={handleSearch}
            />
            {searchQuery.length > 0 && (
              <IconButton
                onClick={() => setSearchQuery('')}
                className={styled.formReset}>
                <X />
              </IconButton>
            )}
            <IconButton
              className={styled.submitButton}
              // type='submit'
            >
              <SearchIcon />
            </IconButton>
          </div>
          <IconButton onClick={() => onClose(false)}>
            <X size={32} />
          </IconButton>
        </form>

        <div className={styled.content}>
          {((): React.ReactNode => {
            if (isLoading) {
              return <Preloader />
            }

            if (data?.length === 0) {
              return <h3 className={styled.noResults}>Nothing found</h3>
            } else {
              return data?.map((card: Goods) => (
                <SearchCard
                  onClose={onClose}
                  item={card}
                  key={card.id}
                />
              ))
            }
          })()}
        </div>
      </div>
    </div>
  )
})

export default SearchForm
