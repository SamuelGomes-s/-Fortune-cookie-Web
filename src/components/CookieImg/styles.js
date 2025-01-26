import styled from "styled-components";

const Image = styled.img`
    height: 220px;
    transition: ease-in-out;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
`;

export { Image }