import styled from "styled-components";


const ActionBtn = styled.button`
    width: 150px;
    margin-top: 2em;
    padding: 1.2em;
    border-radius: 8px;
    border: 0;
    cursor: pointer;
    background-color: ${$props => $props.bgColor};
    transition: ease-in-out 0.5s;
    &:hover{
        transform: scale(1.1);
        box-shadow: 6px 6px  4px #000
    }
    &:active{
        background-color: #e7e7e7;
        transform: scale(0.95);
        opacity: 0.5;
    }
`;

export {
    ActionBtn,
}