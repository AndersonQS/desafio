import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    background: var(--header);
    padding: 11px 16px;

`;

export const Pesquisar = styled.form`
padding-left: 16px;
width: 100%;

input{
    background: white;
    outline: 0;
    border-radius: 6px;
    padding: 11px 12px;
    width: 100%;

    &:focus{
        width: 318px;
    }

    transition: width .2s ease-out, color .2s ease-out;
    }
`;
