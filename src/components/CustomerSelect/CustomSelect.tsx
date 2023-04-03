import React from 'react'
import Select, { SingleValue } from 'react-select';
import { OptionProp } from '../../types/types'
import { StyledSelect } from './styles';

interface CustomSelectProp {
  options: OptionProp[];
  tips: OptionProp;
  handleTipsSelect: (option: SingleValue<OptionProp>) => void;
}

export const CustomSelect = ({options, tips, handleTipsSelect}: CustomSelectProp) => {
  return (
    <Select options = {options} defaultValue = {tips} onChange = {handleTipsSelect} styles = {StyledSelect}/>
  )
}
