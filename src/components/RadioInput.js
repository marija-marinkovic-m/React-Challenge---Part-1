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
    border-radius: 50%;
    &:after {
      content: "";
      position: absolute;
      display: none;
      top: 9px;
      left: 9px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #009688;
    }
  }

  &:hover {
    input ~ span {
      background-color: white;
    }
  }
`;

const RadioInput = ({label, ...inputProps}) => (
  <Label>
    {label}
    <input type="radio" {...inputProps} />
    <span />
  </Label>
);

export default RadioInput;