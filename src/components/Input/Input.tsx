import React, { ChangeEvent } from 'react'
import { StyledInput } from './styles';

interface InputProps {
  type: string;
  change: (event: ChangeEvent<HTMLInputElement>) => void;
  $placeholder: string;
}

export const Input = ({type, change, $placeholder}: InputProps) => {
  return (
    <StyledInput type = {type} onChange={change} placeholder = {$placeholder}/>
  )
}
