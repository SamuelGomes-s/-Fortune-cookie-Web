import { useState } from "react";
import ContainerApp from "./components/Container";
import styled from "styled-components";
import Cookie from "../src/assets/images/biscoito.png"
import BrokenCookie from "../src/assets/images/biscoitoAberto.png"
import { Image } from "./components/CookieImg/styles";
import Button from "./components/Buttons";
import { MdOutlineWifiProtectedSetup } from "react-icons/md";
import { GiBrokenBone } from "react-icons/gi";
import { mensages } from "../src/assets/LuckyText/index"

function App() {
  const [cookieIMG, setCookieIMG] = useState(Cookie);
  function handleBrokenCookie() {
    setCookieIMG(BrokenCookie)
  }
  function handleReloadCookie() {
    setCookieIMG(Cookie)
  }
  return (
    <Background>
      <ContainerApp>
        <Image
          onClick={handleBrokenCookie}
          src={cookieIMG}
          alt="imagem biscoito"
        />
        <Button color={'rgb(246, 247, 246)'} onClick={handleReloadCookie}>
          <MdOutlineWifiProtectedSetup size={50} />
        </Button>
        <Button color={'rgba(255, 221, 41, 0.8)'} onClick={handleBrokenCookie}>
          <GiBrokenBone size={50} />
        </Button>
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
