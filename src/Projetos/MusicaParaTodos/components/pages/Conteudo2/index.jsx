import { ConteudoCss } from "./styled";

export default function Conteudo2() {

  return (

    <ConteudoCss>


      <section id="grid-two" className="grid-one main-bg section">
        <div className="main-content grid-one-content">
          <h2 className="grid-main-heading marginH2">Sobre</h2>
          <p className="grid-description">Desenvolvido por Tarcisio Emanoel.</p>

          <div className="grid">
            <article>
              <h2>Motivos</h2>
              <p>
                Desenvolvi este saite apenas para praticar meus conhecimentos em desenvolvimento web,
                Aproveitando para falar sobre um asunto que gosto muito musica;
              </p>
            </article>

            <article>
              <p>
                <img src="./static/img/300/0logo.png" alt="homem com um chapeu grande e um violão" />
              </p>
            </article>

            <article>
              <h2>Redes sociais</h2>
              <p className='redesImg'>
                <a href="https://github.com/tarcisioemanoel15" target={'_blank'} rel="noreferrer">
                  <img src="./static/img/btnGithubpeq.png" alt="um gatinho com tentaculos" />
                </a>
                <a href="https://www.linkedin.com/feed/" target={'_blank'} rel="noreferrer">
                  <img src="./static/img/linkeddinBTNpeq.png" alt="duas letras in" />
                </a>
              </p>




            </article>
          </div>
        </div>
      </section>

    </ConteudoCss>
  );
} 