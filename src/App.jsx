import styled, { StyleSheetManager } from "styled-components";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Review from "./components/Review";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

export default function App() {
  return (
    <StyleSheetManager disableVendorPrefixes>
      <Container data-component="app">
        <Header />
        <Home />
        <About />
        <Menu />
        <Review />
        <Booking />
        <Footer />
      </Container>
    </StyleSheetManager>
  )
}

const Container = styled.div`

`;