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

export default function App() {

  const [cookieIMG, setCookieIMG] = useState(Cookie);
  const [msg, setMsg] = useState('')

  function handleBrokenCookie() {
    if (cookieIMG === BrokenCookie) {
      return alert("Pegue um novo biscoito...")
    }
    setCookieIMG(BrokenCookie)
    handleRandomMsg()
  }
  function handleReloadCookie() {
    if (cookieIMG === Cookie) {
      return
    }
    setMsg('')
    setCookieIMG(Cookie)
  }

  function handleRandomMsg() {
    let index = Math.floor(Math.random() * mensages.length)
    setMsg(mensages[index])
  }

  return (
    <Background>
      <ContainerApp>
        {msg && (<Text>{msg}</Text>)}
        <Image
          onClick={handleBrokenCookie}
          src={cookieIMG}
          alt="imagem biscoito"
        />
        <Button color={'rgb(246, 247, 246)'} onClick={handleReloadCookie}>
          <MdOutlineWifiProtectedSetup size={50} />
        </Button>
        <Button color={'rgba(255, 221, 41, 0.8)'} onClick={handleBrokenCookie}>
          <GiBrokenBone size={50} color="#fff" />
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

const Text = styled.h1`
  color: #fff;
`;
