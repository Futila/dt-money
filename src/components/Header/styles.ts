import styled from "styled-components";


export const HeaderContainer = styled.header`
background: ${props => props.theme["gray-900"]};
padding: 2.5rem 0 7.5rem;
`
export const HeaderContent = styled.header`
  width: 100%;

  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`


export const NewTransactionButton = styled.button`
  background: ${props => props.theme["green-500"]};
  color: ${props => props.theme.white};
  height: 50px;
  border-radius: 6px;
  border: none;
  padding: 0 1.25rem;
  font-weight: bold;

  cursor: pointer;


  &:hover {
    background: ${props => props.theme["green-700"]};
    transition: background-color 0.2s;
  }

`