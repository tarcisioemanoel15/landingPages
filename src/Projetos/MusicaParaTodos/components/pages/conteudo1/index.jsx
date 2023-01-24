import { ConteudoCss } from "./styled";

export default function Conteudo1() {

  return (

    <ConteudoCss>


      <section id="grid-one" className="grid-one main-bg section">
        <div className="main-content grid-one-content">
          <h2 className="grid-main-heading">Importante</h2>
          <p className="grid-description">Uma breve descrição.</p>

          <div className="grid">
            <article>
              <h3>Cordas soltas</h3>
              <p>
                OBS: As cordas se contam de baixo pra cima a mais fininha é a primeira,
                e vei contando segunda ate a sexta;<br />
                <span>MI, SI, SOL, RE, LA, MI</span>

              </p>
            </article>
            <article>
              <h3>Cifras</h3>
              <p>
                As cifras são representadas pelas seguinte letras;<br />

                <span>cifras : A... B... C... D... E... F..... G</span><br />
                <span>notas: LÁ, SÍ, DÓ, RÉ, MÍ, FÁ, SOL</span>
              </p>
            </article>
            <article>
              <h3>Escala Cromatica</h3>
              <p>
                A escala cromática é formada dor todas as notas, igual o nome ja fala
                cromática; um exemplo a baixo:<br />
                c, c#, d, d#, e, f, f#, g, g#, a, a#, b, c
              </p>
            </article>
          </div>
        </div>
      </section>

    </ConteudoCss>
  );
} 