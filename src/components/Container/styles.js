import styled from "styled-components";

const Container = styled.div`
    width: 700px;
    position: relative;
    top: 15%;
    right: 0;
    left: 0;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;

    /* Quando a tela for menor ou igual a 700px */
    @media screen and (max-width: 700px) {
        width: 80%;
    }
`;

export { Container };
