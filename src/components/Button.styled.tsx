import styled from "styled-components"
import { MyAnimation } from "../styles/animations/Animations"

export const StyledBtn = styled.button`
    border: none;
    background-color: ${props => props.color || 'pink'};
    color: #111;
    padding: 10px 20px;
    &:hover{
        background-color: green;
}
`