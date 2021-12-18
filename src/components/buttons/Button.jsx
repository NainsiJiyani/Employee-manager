import React from "react";
import styled, { css } from "styled-components";

const ButtonStyles = styled.button`
  width: 100%;
  border: inherit;
  font-size: 1rem;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
  padding: 0.65rem 1rem;
  margin-bottom: 0.5rem;
  background: #a5a1a1;
  color: white;
  ${(props) =>
    props.uiStyle === "login" &&
    css`
      background: #f15b29;
      color: white;
    `}
  ${(props) =>
      props.disabled &&
      css`
        cursor: not-allowed;
    `}
  ${(props) =>
      !props.disabled &&
      css`
        cursor: pointer;
    `}
  
`;

const Button = (props) => {
  return (
    <ButtonStyles {...props}>
      {props.label}
      {props.children}
    </ButtonStyles>
  );
};

 
export default Button


 
 
