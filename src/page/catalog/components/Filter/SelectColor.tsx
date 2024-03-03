import React from "react";
import Dropdown from "../../../../components/UI-Kit/Dropdown"
import Typography from "../../../../components/UI-Kit/Typography"
import styled from './SelectColor.module.scss'
import { FaChevronDown } from "react-icons/fa6"
import Headline from "./Headline"
import UnderlineButton from "./UnderlineButton"
import Checkbox from "../../../../components/UI-Kit/Checkbox";

const SelectColor: React.FC = () => {
  const [show, setShow] = React.useState(false)

  return (
    <Dropdown onClose={() => setShow(false)}>
      <Dropdown.Trigger>
        <UnderlineButton
          onClick={() => setShow((prev) => !prev)}
        >
          Color
          <FaChevronDown />
        </UnderlineButton>
      </Dropdown.Trigger>
      <Dropdown.Wrapper show={show}>
        <Dropdown.Item>
          <Headline>
            <Typography tag="h4">0 selected</Typography>
            <UnderlineButton>Reset</UnderlineButton>
          </Headline>
        </Dropdown.Item>

        <Dropdown.Item className={styled.wrapper}>
          <Checkbox label="Off White (5)" />
          <Checkbox label="Denim (1)" />
          <Checkbox label="Dry Rose (4)" />
          <Checkbox label="White (6)" />
        </Dropdown.Item>

      </Dropdown.Wrapper>
    </Dropdown>
  );
};

export default SelectColor;
