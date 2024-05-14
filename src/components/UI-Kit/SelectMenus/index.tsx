import React from 'react'
import styled from './styled.module.scss'
import cn from 'classnames'
import useClickAwayListener from '@/hooks/useClickAwayListener'
import { SelectMenusProps } from './type'
import { Check, ChevronsUpDown } from 'lucide-react'

function isEmpty(display: string) {
  return display == null || (typeof display === 'string' && !display.trim())
}

const SelectMenus: React.FC<SelectMenusProps> = props => {
  const {
    options,
    placeholder,
    multiple = false,
    value,
    onChange,
    ...restProps
  } = props

  let display: string = ''
  let displaySingle: string = ''
  const displayMultiple: string[] = []

  const ulRef = React.useRef<HTMLUListElement>(null)
  const divRef = React.useRef<HTMLDivElement>(null)
  const selectMenusRef = React.useRef(null)
  const [show, setShow] = React.useState(false)
  const [ulRectangle, setUlReactangle] = React.useState<DOMRect | null>(null)

  useClickAwayListener(selectMenusRef, () => setShow(false))

  const [transformY, setTransformY] = React.useState(0)

  React.useLayoutEffect(() => {
    if (divRef.current) {
      const { height } = divRef.current.getBoundingClientRect()
      setTransformY(height)
    }

    if (ulRef.current) {
      const rect = ulRef.current?.getBoundingClientRect()
      setUlReactangle(rect)
    }
  }, [])

  React.useEffect(() => {
    const height = document.documentElement.clientHeight
    if (ulRectangle) {
      const diff = height - ulRectangle?.bottom
      if (diff < ulRectangle.height) {
        setTransformY(-ulRectangle?.height)
      }
    }
  }, [ulRectangle])

  const handleOptionClick = (option: string) => (event: React.MouseEvent<HTMLLIElement>) => {

    let newValue: string | string[]

    if(multiple) {
      newValue = Array.isArray(value) ? value.slice() : []
      const index = value.indexOf(option)
      if(index === -1) {
        newValue.push(option)
      } else newValue.splice(index, 1)
    } else {
      newValue = option
    }

    const nativeEvent = event?.nativeEvent || event
    // const nativeEvent = Object.create(nativeEvent.prototype.constructor())

    const clonedEvent = new nativeEvent.constructor(
      nativeEvent.type,
      nativeEvent
    )

    Object.defineProperty(clonedEvent, 'target', {
      writable: true,
      value: { value: newValue },
    })
    onChange?.(clonedEvent)
    if(!multiple) setShow(false)
  }

  const items = options?.map(option => {

    let selected: boolean

    if(multiple) {
      selected = value.includes(option.value)
      if(selected) {
        displayMultiple.push(option.label)
      }
    } else {
      selected = value === option.value
      if(selected) {
        displaySingle = option.label
      }
    }

    return (
      <li
        onClick={event => handleOptionClick(option.value)(event)}
        key={option.value}
        className={styled.option}
        data-value={option.value}
      >
        {selected && <span className={styled.optionIcon}>
          <Check size="1.2rem" />
        </span>}
        { option.label }
      </li>
    )
  })

  if(multiple) {
    if(displayMultiple.length === 0) display = ''
    else {
      display = displayMultiple.join(', ')
    }
  } else {
    display = displaySingle
  }

  return (
    <div className={styled.selectMenus} ref={selectMenusRef}>
      <div ref={divRef} className={styled.selectMenusField}>
        <button
          className={cn('base-button', 'form-field', styled.field)}
          onClick={() => setShow(prev => !prev)}>
          <span>
            {isEmpty(display)
              ? placeholder
              : display}
          </span>
          <span className={styled.icon}>
            <ChevronsUpDown size={20} />
          </span>
        </button>
        <input
          className={styled.selectMenusInput}
          type="text"
          inputMode="none"
          value={display}
          readOnly
          { ...restProps }
        />
      </div>

      <ul
        className={styled.list}
        ref={ulRef}
        style={{
          transform: `translateY(${ transformY }px)`,
          opacity: show ? 1 : 0,
          visibility: show ? 'visible' : 'hidden',
        }}>
          { items }
      </ul>
    </div>
  )
}

export default SelectMenus
