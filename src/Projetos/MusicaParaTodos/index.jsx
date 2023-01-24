import Footer from './components/Footer';
import Menu from './components/Menu'
import { Contact } from './components/pages/Contact';
import Conteudo1 from './components/pages/conteudo1';
import Conteudo2 from './components/pages/Conteudo2';
import { Galeria } from './components/pages/Galeria';
import Home from './components/pages/Home'
import { Intro } from './components/pages/Intro';
import Pricin from './components/pages/Pricing';
import { GlobalStyles } from "./styles/GlobalStyles";
export const MusicaParaTodos = () => {

  return (
    <div className="musica-para-todos">
      <GlobalStyles>

        <Menu />
        <Home />
        <Intro />
        <Conteudo1 />
        <Galeria />
        <Conteudo2 />
        <Pricin />
        <Contact />
        <Footer />



      </GlobalStyles>


    </div>
  )
}