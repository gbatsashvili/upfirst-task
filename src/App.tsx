import CardsBlock from "./components/cardsBlock/cardsBlock";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import MenuBlock from "./components/menuBlock/menuBlock";
import { AppLayoutStyled, RightContainer } from "./styled/layout.styled";

function App() {
  return (
    <AppLayoutStyled>
      <MenuBlock />
      <RightContainer>
        <Header />
        <CardsBlock />
        <Footer />
      </RightContainer>
    </AppLayoutStyled>
  );
}

export default App;
