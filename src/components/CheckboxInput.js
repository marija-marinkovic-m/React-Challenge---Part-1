import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  font-size: 13px; text-transform: uppercase; line-height: 25px;
  cursor: pointer;
  user-select: none;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;

    &:checked ~ span:after {
      display: block;
    }
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: rgba(255,255,255,0.6);
    border-radius: 4px;
    &:after {
      content: "";
      position: absolute;
      display: none;
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid #009688;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }
  }

  &:hover {
    input ~ span {
      background-color: white;
    }
  }
`;

const CheckboxInput = ({label, ...inputProps}) => (
  <Label>
    {label}
    <input type="checkbox" {...inputProps} />
    <span />
  </Label>
);

export default CheckboxInput;