import React from "react"
import Input from "../../../../components/UI-Kit/Input"
import styled from "./PriceRange.module.scss"
import Dropdown from "../../../../components/UI-Kit/Dropdown"
// import cn from 'classnames'
import Typography from "../../../../components/UI-Kit/Typography"
import { FaChevronDown } from "react-icons/fa6"
import UnderlineButton from "./UnderlineButton"
import Headline from "./Headline"

const PriceRange: React.FC = () => {
  const [show, setShow] = React.useState(false)

  return (
    <Dropdown onClose={() => setShow(false)}>
      <Dropdown.Trigger>
        <UnderlineButton onClick={() => setShow((prev) => !prev)}>
          Price
          <FaChevronDown />
        </UnderlineButton>
      </Dropdown.Trigger>
      <Dropdown.Wrapper show={show}>
        <Dropdown.Item>
          <Headline>
            <Typography tag="h4">The highest price is $615.00</Typography>
            <UnderlineButton>
              Reset
            </UnderlineButton>
          </Headline>
        </Dropdown.Item>

        <Dropdown.Item>
          <div className={styled.priceRange}>
            <span className={styled.row}>
              $
              <Input placeholder="Form" className={styled.input} />
            </span>
            <span className={styled.row}>
              $
              <Input placeholder="To" className={styled.input} />
            </span>
          </div>
        </Dropdown.Item>
      </Dropdown.Wrapper>
    </Dropdown>
  )
}

export default PriceRange
