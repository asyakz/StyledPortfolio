import styled, { css } from 'styled-components';
import { theme } from '../styles/Theme';

type ButtonPropsType = {
  color?: string
  btnType: 'outlined' | 'primary'
  active?: boolean
}

export const Button = styled.button<ButtonPropsType>`
z-index: 777;
cursor: pointer;
min-width: 115px;
min-height: 43px;
padding: 8px 24px 8px 24px;
border-radius: 8px;
font-family: "Roboto", serif;
font-size: 18px;
font-weight: 700;
line-height: 27px;
transition: color .5s ease-in-out,
            border .5s ease-in-out,
            background-color 1s ease-in-out;

&:not(:last-child) {
  margin-right: 12px;
}

  // outlined
  ${props => props.btnType === 'outlined' && css<ButtonPropsType>`
  border: 2px solid ${props => props.color || `${theme.colors.font}`};
  color: ${props => props.color || `${theme.colors.font}`};
  background-color: transparent;

    &:hover {
      border-color:  ${theme.colors.secondary};
      color:  ${theme.colors.secondary};
    }
  `}

  // primary
  ${props => props.btnType === 'primary' && css<ButtonPropsType>`
  background-color: ${props => props.color || `${theme.colors.accent}`};
  color: ${theme.colors.font};

    &:hover {
      background-color:  ${theme.colors.secondary};
      color:  ${theme.colors.white};
    }
  `}

  ${props => props.active && css<ButtonPropsType>`
  box-shadow: 5px 5px 5px 5px #3534342e;
  `}
`