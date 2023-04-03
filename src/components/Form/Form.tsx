import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { SingleValue } from 'react-select'
import { OptionProp } from '../../types/types'
import { Button } from '../Button/Button'
import { CustomSelect } from '../CustomerSelect/CustomSelect'
import { Input } from '../Input/Input'
import { StyledForm, Title, Subtitle, FormData, Total } from './styles'

export const options: OptionProp[] = [
  { value: '1.1', label: '10%' },
  { value: '1.15', label: '15%' },
  { value: '1.2', label: '20%' }
]

export const Form = () => {
  const [bill, setBill] = useState(0);
  const [persons, setPersons] = useState(0);
  const [tips, setTips] = useState(1.1);
  const [total, setTotal] = useState ("0.00");
  const [isDisable, setEnable] = useState (true);

  const handleBill = (event: ChangeEvent<HTMLInputElement>) => {
    setBill(Number(event.target.value));
  }

  const handlePersons = (event: ChangeEvent<HTMLInputElement>) => {
    setPersons(Number(event.target.value));
  }

  const handleTipsSelect = (event: SingleValue<OptionProp>) => {
    if (event) {
      setTips(Number(event.value))
    }
  }

  const handleTotal = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTotal(String((bill * tips / persons).toFixed(2)))
  }

  useEffect(() => {
    const isEnable = bill && persons ? false : true;
    setEnable(isEnable)
  });

  return (
    <StyledForm onSubmit={handleTotal}>
      <Title>Welcome to App</Title>
      <Subtitle>Let’s go calculate your tips</Subtitle>
      <FormData>
        <Input type = "number" change = {handleBill} $placeholder = "Enter bill"/>
        <Input type = "number" change = {handlePersons} $placeholder = "Enter persons"/>
        <CustomSelect options = {options} tips = {options[0]} handleTipsSelect = {handleTipsSelect}/>
      </FormData>
      <Total>Total: {total}$</Total>
      <Button isDisabled = {isDisable} />
    </StyledForm>
  )
}
