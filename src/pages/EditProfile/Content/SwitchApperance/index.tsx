import React from 'react'
import SelectMenus from '@/components/UI-Kit/SelectMenus'
import { SelectMenusEvent } from '@/components/UI-Kit/SelectMenus/type'
import options from './options'
import useAppSelector from '@/hooks/useAppSelector'
import { selectmMode, switchMode } from '@/store/slices/colorScheme.slice'
import useAppDispatch from '@/hooks/useAppDispatch'
import styled from './styled.module.scss'

type Mode = 'light' | 'dark' | 'default'

const SwitchApperance: React.FC = () => {
  const mode = useAppSelector(selectmMode)
  const dispatch = useAppDispatch()

  function handleChange(event: SelectMenusEvent) {
    const value = event.target.value as Mode
    dispatch(switchMode(value))
  }

  return (
    <div className={styled.wrapper}>
      <div className={styled.title}>
        <h3>Interface theme</h3>
      </div>
      <div className={styled.themeSelection}>
        <SelectMenus
          placeholder='Theme color'
          value={mode}
          onChange={handleChange}
          options={options}
        />
        <p className={styled.text}>Choose a theme preference</p>
      </div>
    </div>
  )
}

export default SwitchApperance
