import React, { FormEvent, useEffect, useState } from 'react'
import { OptionProp } from '../../types/types'
import { Button } from '../Button/Button'
import { CustomSelect } from '../CustomerSelect/CustomSelect'
import { Input } from '../Input/Input'
import { StyledForm, Title, Subtitle, FormData, Total } from './styles'
import { useInput } from '../../hooks/useInput'

export const options: OptionProp[] = [
  { value: 10, label: '10%' },
  { value: 15, label: '15%' },
  { value: 20, label: '20%' }
]

export const Form = () => {
  const bill = useInput();
  const persons = useInput();
  const [tips, setTips] = useState<OptionProp>(options[0]);
  const [total, setTotal] = useState (0);
  const [isDisable, setEnable] = useState (true);

  const handleTotal = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (bill.value && persons.value) {
      setTotal((+bill.value + (+bill.value * tips.value) / 100) / +persons.value);
    }
  }

  useEffect(() => {
    const isEnable = bill && persons ? false : true;
    setEnable(isEnable)
  }, [bill.value, persons.value]);

  return (
    <StyledForm onSubmit={handleTotal}>
      <Title>Welcome to App</Title>
      <Subtitle>Let’s go calculate your tips</Subtitle>
      <FormData>
        <Input type="number" placeholder="Enter bill" {...bill}/>
        <Input type="number" placeholder="Enter persons" {...persons}/>
        <CustomSelect options={options} setTips={setTips} currentOption={tips}/>
      </FormData>
      <Total>Total: {total.toFixed(2)}$</Total>
      <Button isDisabled = {isDisable} />
    </StyledForm>
  )
}
