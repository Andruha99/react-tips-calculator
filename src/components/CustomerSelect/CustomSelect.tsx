import React from 'react'
import Select, { SingleValue } from 'react-select';
import { OptionProp } from '../../types/types'
import { StyledSelect } from './styles';

interface CustomSelectProp {
  currentOption: OptionProp;
  options: OptionProp[];
  setTips: (value: OptionProp) => void;
}

export const CustomSelect = ({currentOption, options, setTips}: CustomSelectProp) => {
  const handleChange = (option: SingleValue<typeof currentOption>) => {
    if (option) setTips(option);
  };

  return (
    <Select 
      options={options} 
      isMulti={false}
      styles={StyledSelect}
      isSearchable={false}
      value={currentOption}
      onChange={handleChange}
      />
  )
}
