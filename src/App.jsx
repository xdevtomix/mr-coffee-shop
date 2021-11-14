import styled, { StyleSheetManager } from "styled-components";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";

export default function App() {
  return (
    <StyleSheetManager disableVendorPrefixes>
      <Container data-component="app">
        <Header />
        <Home />
        <About />
        <Menu />
      </Container>
    </StyleSheetManager>
  )
}

const Container = styled.div`

`;