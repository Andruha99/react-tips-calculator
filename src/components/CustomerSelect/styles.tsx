import { StylesConfig } from 'react-select';
import { OptionProp } from '../../types/types';

export const StyledSelect: StylesConfig<OptionProp, false> = {
    control: (baseStyles) => ({
        ...baseStyles,
        width: "100%",
        padding: "21px 0px",
        fontSize: '18px',
        border: "none",
        borderRadius: "34px",
    }) 
}