import styled from 'styled-components';

const StyledForm = styled.form`
    display: grid;
    grid-gap: 45px;
    width: 100%;
    max-width: 456px;
    margin: 0px auto;
    margin-top: 203px;
    text-align: center;

    @media (max-width: 745px) {
        width: 331px;
        margin-top: 236px;
    }
`;

const Title = styled.h1`
    font-size: 40px;
    color: #000000;

    @media (max-width: 745px) {
        font-size: 24px;
    }
`

const Subtitle = styled.h3`
    font-size: 32px;
    color: rgba(117, 108, 108, 0.57);

    @media (max-width: 745px) {
        font-size: 24px;
    }
`

const FormData = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 32px;

    @media (max-width: 745px) {
        grid-gap: 17px;
    }
`

const Total = styled.p`
    font-size: 24px;
    font-weight: 500;
    text-align: left;

    @media (max-width: 414px) {
        font-size: 18px;
    }
`

export { StyledForm, Title, Subtitle, FormData, Total } ;