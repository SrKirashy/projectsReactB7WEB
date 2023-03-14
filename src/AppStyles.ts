import styled from "styled-components";

export const Container = styled.div`
    background-color: blue;
    color: white;
    padding: 20px;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.5s;
    &:hover{
        color:blue;
        background-color: black;
        box-shadow: 0px 0px 15px blue;
        padding: 20px 20px 20px 1100px;
    }
`