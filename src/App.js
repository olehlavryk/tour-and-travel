import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import BurgerMenu from "src/components/BurgerMenu/BurgerMenu";
import FadeIn from 'src/components/Animations/FadeIn/FadeIn';

function App() {
  return (
    <FadeIn delay={200} duration={1000}>
      <BurgerMenu />
      <Header />
      <Main />
      <Footer />
    </FadeIn>
  );
}

export default App;
