import styled from "styled-components"

export const Menu = styled.nav`
    ul{
        list-style-type: none;
        padding: 0;
        display: flex;
    }

    li > a{
        color: green;
    }

    li + li{
        margin-left: 15px;
    }
`