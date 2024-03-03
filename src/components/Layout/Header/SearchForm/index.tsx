import { FC, FormEvent, SyntheticEvent, useRef, useState } from 'react'
import cn from "classnames";
import styled from './Input.module.scss'
// import Container from '../../../UI-Kit/Container';
import useClickAwayListener from '../../../../hooks/useClickAwayListener';
import Input from '../../../UI-Kit/Input';
import IconButton from '../../../UI-Kit/IconButton';
import { IoSearch } from "react-icons/io5";

type TypeProps = {
  className?: string
}

const SearchForm: FC<TypeProps> = (props) => {
  const {
    className
  } = props

  const [show, setShow] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)
  const [searchQuery, setSearchQuery] = useState<string>('')

  const handleClickAway = () => setShow(false)
  useClickAwayListener(ref, handleClickAway)

  const handleSearch = (event: FormEvent<HTMLInputElement>): void => {
    setSearchQuery(event.currentTarget.value)
  }

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    console.log(searchQuery)
  }

  return (
    <div className={cn(styled.searchForm, className)}  ref={ref}>
      <IconButton
        className={styled.button}
        onClick={() => setShow(!show)}
      >
        <IoSearch />
      </IconButton>

      <div className={cn(styled.form, show ? styled.show : styled.hidden)}>
        <div className={styled.wrapper}>

          <form action="#" onSubmit={handleSubmit}>
            <div className={styled.row}>
              <Input
                placeholder='Search...'
                className={styled.formControl}
                value={searchQuery}
                onChange={handleSearch}
              />
              <IconButton
                className={styled.submitButton}
                // type='submit'
              >
                <IoSearch />
              </IconButton>
            </div>
          </form>

          <div className={styled.content}></div>

        </div>
      </div>
    </div>
  )
}

export default SearchForm