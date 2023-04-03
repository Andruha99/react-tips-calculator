import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 13px 0px;
    font-size: 24px;
    color: #ffffff;
    background-color: #2ED2C9;
    border: 0px;

    :disabled {
        opacity: 0.5;
    }
`;

export {StyledButton} ;