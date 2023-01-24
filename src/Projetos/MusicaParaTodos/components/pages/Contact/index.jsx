import { CssHome } from '../Home/styled'
import { ContactCss } from './styled'

export const Contact = () => {

  return (
    <CssHome>
      <ContactCss>


        <section id="contact" className="home main-bg section">
          <div className="main-content home-content">
            <div className="home-text-content">
              <h2>Contatos</h2>
              <p>
                Logue com seu e_mail, e deixe um comentario;
                OBS: formulario so pra testes, não funciona.
              </p>
            </div>

            <div className="home-img">
              <img src="./static/img/7piano.svg" alt="asd" />
            </div>

            <div className="contact-form">
              <fieldset className="form-grid">
                <legend>Contact me</legend>


                <div className="form-group">
                  <label htmlFor="first-name"> First name </label>
                  <input type="text" name='first-name' id='first-name' placeholder="Your name" />
                </div>




                <div className="form-group">
                  <label htmlFor="last-name">last name</label>
                  <input type="text" name='last-name' id='last-name' placeholder='Your last name' />
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input type="email" name="email" id="email" placeholder="Your e-mail" />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" cols="30" rows="10" placeholder="Your message"></textarea>
                </div>

                <div className="form-group full-width">
                  <button type="submit">Send message</button>
                </div>
              </fieldset>
            </div>

          </div>
        </section>
      </ContactCss>
    </CssHome >
  )
}