import React from 'react'
import cn from 'classnames'
import styled from './styled.module.scss'
import IconButton from '@/components/UI-Kit/IconButton'
import { SearchIcon } from 'lucide-react'
import AppCSSTransition from '@/components/AppCSSTransition'
import SearchForm from './SearchForm'
import Portal from '@/components/Portal'
import Backdrop from '@/components/UI-Kit/Backdrop'

type SearchProps = {
  className?: string
}

const Search = ({ className }: SearchProps) => {
  const [show, setShow] = React.useState<boolean>(false)
  const ref = React.useRef<HTMLDivElement>(null)

  const nodeRef = React.useRef<HTMLDivElement | null>(null)

  const classNames = {
    enter: styled.enter,
    enterActive: styled.enterActive,
    exit: styled.exit,
    exitActive: styled.exitActive,
  }

  return (
    <div className={cn(styled.searchForm, className)} ref={ref}>
      <IconButton className={styled.button} onClick={() => setShow(!show)}>
        <SearchIcon />
      </IconButton>

      <Portal>
        <Backdrop visible={show} onClose={() => setShow(false)} />

        <AppCSSTransition className={classNames} show={show} nodeRef={nodeRef}>
          <SearchForm show={show} onClose={setShow} ref={nodeRef} />
        </AppCSSTransition>
      </Portal>
    </div>
  )
}

export default Search
