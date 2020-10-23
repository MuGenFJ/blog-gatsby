import styled from "styled-components"

export const CardWrapper = styled.div`
    margin-top: 2rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: ${props => props.theme.colors.dark3} 1px solid;
`