import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import BurgerMenu from "src/components/BurgerMenu/BurgerMenu";

function App() {
  return (
    <>
      <BurgerMenu />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
