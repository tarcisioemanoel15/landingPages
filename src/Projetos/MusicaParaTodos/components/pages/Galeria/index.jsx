import { ConteudoCss as Conteudocss } from '../conteudo1/styled';
import { GaleriaCss } from "./styled";

export const Galeria = () => {
  return (

    <Conteudocss>
      <GaleriaCss>


        <section id="gallery" className="grid-one white-bg section">
          <div className="main-content grid-one-content grid5">
            <h3 className="grid-main-heading">Galeria</h3>
            <p className="grid-description">Guitarras e Guitarritas</p>

            <div className="grid">
              <div className="gallery-img">
                <img src="./static/img/300/5rock.jpg" alt="ASD aaa" />
              </div>
              <div className="gallery-img">
                <img src="./static/img/300/6musician.jpg " alt="ASD aaa" />

              </div>
              <div className="gallery-img">
                <img src="./static/img/300/4guitar.jpg" alt="ASD aaa" />

              </div>
              <div className="gallery-img">

                <img src="./static/img/300/3acda.png " alt="dois homens sombra preta" />

              </div>
              <div className="gallery-img">
                <img src="./static/img/300/2rockk.png " alt="guitarista todo preto" />

              </div>
              <div className="gallery-img">

                <img src="./static/img/300/1rock.png" alt="guitarista todo verde" />
              </div>
            </div>
          </div>
        </section>

      </GaleriaCss>
    </Conteudocss>
  );
}