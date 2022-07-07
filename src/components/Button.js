import styled from "styled-components";

export const ButtonContainer = styled.button
`text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.05rem solid var(--lightBlue);
border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
color: ${prop=> prop.cart ?  "var(--mainYellow)" : "var(--lightBlue)" };
border-radius: 15px;
padding: 0.4rem;
margin-left: 20px;
margin-top: 20px;

&:hover{
    background:${prop=> prop.cart ?  "var(--mainYellow)" : "var(--lightBlue)" } ;
    color: var(--mainBlue);
    transition: all 1s linear;
}
`