import styled from "styled-components";

const Image = styled.img`
    height: 220px;
    width: 220px;
    transition: ease-in-out 1s;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
`;

export { Image }