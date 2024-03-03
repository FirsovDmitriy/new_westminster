import React from "react";
import styled from './Radio.module.scss'
import { RadioProps } from "./type";

const Radio: React.FC<RadioProps> = props => {
  const {
    onChange,
    value,
    name,
    label,
    checked
  } = props

  // let checked = checkedProp
  // checked = equalValues()

  return (
    <label className={styled.formControl}>
      <input
        type="radio"
        className={styled.input}
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <span className={styled.text}>
        { label }
      </span>
    </label>
  );
};

export default Radio;
