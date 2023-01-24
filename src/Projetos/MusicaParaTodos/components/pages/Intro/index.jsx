import { CssIntro } from "./styled";
export const Intro = () => {

  return (
    <CssIntro>

      <section id="intro" className="white-bg section">
        <div className="main-content intro-content">
          <h2 className='h2Intro'>Como escolher um violão</h2>
          <p>
            Aparentemente, todo violão é igual, exceto por pequenos detalhes irrelevantes, como a cor e
            tamanho, por exemplo. De fato, há alguns aspectos que devem ser considerados para a aquisição de
            um modelo dele.
          </p>
          <p>
            Um deles é a resistência. Existem diversos tipos de madeira com os quais se confecciona o
            instrumento. Isto implica na durabilidade e no timbre sonoro também. O tamanho da caixa acústica
            está diretamente ligado ao volume do som. Quanto maior, mais som. Os trastes devem ser feitos de
            bom material e bem instalados, do contrário, implicará na afinação. A mesma atenção se dá ao
            verificar se o braço do violão está bem aprumado, se o cavalete está bem colado e se as tarraxas se
            movimentam bem.
          </p>
          <p>
            Os violões elétricos têm o formato de uma guitarra. Portanto, sua caixa acústica é mais rasa,
            seu braço mais alongado e já vem com um mecanismo de captura de som – comumente chamado
            cristal -- embutido dentro dele e um plug para conexão com uma mesa de som.
            Para fins práticos, o que se deve ter por princípio para avaliar um violão é se ele afina
            precisamente
          </p>
        </div>
      </section>

    </CssIntro>
  );
}