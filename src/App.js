import { useState } from "react";
import ContainerApp from "./components/Container";
import styled from "styled-components";
import Cookie from "../src/assets/images/biscoito.png"
import BrokenCookie from "../src/assets/images/biscoitoAberto.png"
import { Image } from "./components/CookieImg/styles";

function App() {
  const [cookieIMG, setCookieIMG] = useState(Cookie);

  return (
    <Background>
      <ContainerApp>
        <Image
          onClick={() => alert('teste')}
          src={cookieIMG}
          alt="imagem biscoito"
        />
      </ContainerApp>
    </Background>
  );
}
const Background = styled.div`
  width: 100dvw;
  height: 100dvh;
  background-color: rgba(12,12,12,0.7);
`;

export default App;
