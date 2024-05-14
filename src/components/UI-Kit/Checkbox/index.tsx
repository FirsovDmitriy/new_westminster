import { CheckboxProps } from './type'

const Checkbox = ({ label }: CheckboxProps) => {
  
  return (
    <label className='checkbox'>

      <div className='checkbox__wrapper'>
        <input type='checkbox' className='checkbox__input' />
        <div className="checkbox__icon"></div>
      </div>

      <span className='checkbox__text'>
        { label }
      </span>

    </label>
  )
}

export default Checkbox