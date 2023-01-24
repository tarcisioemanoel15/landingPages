import { CssHome } from "./styled";

export default function Home() {

  return (


    <CssHome id="home" className="home main-bg section">
      <div className="main-content home-content">
        <div className="home-text-content">
          <h2>Música</h2>
          <p>
            É a arte universal de combinar os sons. É a maneira de se expressar através de melodias.
            Aliás, a Música é a primeira das sete artes universais. Desde seus primeiros passos, ela se valeu do
            desejo íntimo dos músicos para exportar as suas faces interiores, como se nela, o homem se
            revelasse por dentro.
          </p>
        </div>
        <div className="home-img">
          <img src="static/img/8homentogitar.svg" alt="desenho de um homem comum violão" />
        </div>
      </div>
    </CssHome>

  );
} 
