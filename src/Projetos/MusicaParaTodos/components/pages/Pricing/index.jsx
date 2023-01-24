import { Tabelacss } from './styled';

export default function Pricin() {

  return (


    <Tabelacss>

      <section id="pricing" className="white-bg section">
        <div className="main-content introo-content">
          <h2 className='pricingH2'>Campos harmônicos</h2>
          <p>
            Os campos harmônicos são sequencias ou progressoes de acordes que de acordo
            com uma determinada escala, forma uma progreção de oitavas de oito sons.
          </p>
          <p>
            Os campos harmônicos são compostos por três acordes menores e um acorde em diminuto.
          </p>
          <p>
            Cada acorde é determinado em grau harmônicos.
          </p>

          <div className="responsive-table">
            <table>
              <caption>Tonicas</caption>

              <thead>
                <tr>
                  <th>1º</th>
                  <th>2º</th>
                  <th>3º</th>
                  <th>4º</th>
                  <th>5º</th>
                  <th>6º</th>
                  <th>7º</th>
                  <th>8º</th>

                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>C</td>
                  <td>Dm</td>
                  <td>Em</td>
                  <td>F</td>
                  <td>G7</td>
                  <td>Am</td>
                  <td>B°</td>
                  <td>C</td>

                </tr>
                <tr>
                  <td>D</td>
                  <td>Em</td>
                  <td>F#m</td>
                  <td>G7</td>
                  <td>D</td>
                  <td>Bm</td>
                  <td>C#°</td>
                  <td>D</td>

                </tr>
                <tr>
                  <td>E</td>
                  <td>F#m</td>
                  <td>G#m</td>
                  <td>A</td>
                  <td>B7</td>
                  <td>C#m</td>
                  <td>D#°</td>
                  <td>E</td>
                </tr>


                <tr>
                  <td>F</td>
                  <td>Gm</td>
                  <td>Am</td>
                  <td>Bb</td>
                  <td>C7</td>
                  <td>Dm</td>
                  <td>E°</td>
                  <td>F</td>
                </tr>

                <tr>
                  <td>G</td>
                  <td>Am</td>
                  <td>Bm</td>
                  <td>C</td>
                  <td>D7</td>
                  <td>Em</td>
                  <td>F#°</td>
                  <td>G</td>
                </tr>

                <tr>
                  <td>A</td>
                  <td>Bm</td>
                  <td>C#m</td>
                  <td>D</td>
                  <td>E7</td>
                  <td>Fm</td>
                  <td>G#°</td>
                  <td>A</td>
                </tr>

                <tr>
                  <td>B</td>
                  <td>C#m</td>
                  <td>D#m</td>
                  <td>E</td>
                  <td>F#7</td>
                  <td>G#m</td>
                  <td>A°</td>
                  <td>B</td>
                </tr>


              </tbody>

              <tfoot>
                <tr>
                  <td></td>
                  <td>sustenidos e</td>
                  <td>bemois no</td>
                  <td>linck no</td>
                  <td>fim da</td>
                  <td>pajina</td>
                  <td> </td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>

    </Tabelacss>
  )
}