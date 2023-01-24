import { TestesCss } from './styled';

export default function Testes() {

  const clika = () => {
    return document.getElementById('close-menu').checked = false;
  }

  return (
    <TestesCss>

      <div className="aaaaaaaaaaaa">

        <input id="close-menu" className="close-menu" type="checkbox" role="button" aria-label="Close menu" />
        {/* <input id="close-menu" className="close-menu" type="checkbox" aria-label="Close menu" role="button"> */}
        <label className="close-menu-label" htmlFor="close-menu" title="close menu"></label>

        <aside className="menu white-bg">

          <div className="main-content menu-content">

            <h1 onClick={clika}>
              <a href="#home">LOGO</a>
            </h1>

            <nav>
              <ul onClick={clika}>
                <li><a href="#intro">intro</a></li>
                <li><a href="#grid-one">grid-one</a></li>
                <li><a href="#gallery">gallery</a></li>
                <li><a href="#grid-two">grid-two</a></li>
                <li><a href="#pricing">pricing</a></li>
                <li><a href="#contact">contact</a></li>
              </ul>
            </nav>
          </div>
        </aside>

        {/* /////////////////////////////// */}
        <section id="home" className="intro main-bg section">
          <div className="main-content intro-content">
            <div className="intro-text-content">
              <h2>January brings us Firefox 85</h2>
              <p>To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you
                support for the :focus-visible pseudo-className in CSS and associated devtools, and the complete removal of Flash
                support from Firefox.</p>
            </div>
            <div className="intro-img">
              <img src="./static/img/8homentogitar.svg" alt="Logo" />
            </div>
          </div>
        </section>

        <section id="intro" className="white-bg section">
          <div className="main-content top3-content">
            <h2>news coverage and some
              surprises</h2>
            <p>The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some
              surprises at the post details some background information on the experience of
              porting Firefox to run natively on these CPUs.</p>
            <p>art with some background on the Mac transition and give an overview of Firefox internals that needed to
              know about the new architecture, before moving on to the concept of Universal Binaries.</p>
            <p> then explain how DRM/EME works on the new platform, talk about our experience with macOS Big Sur, and
              discuss various updater problems we had to deal with. conclude with the release and an overview of various
              other improvements that are in the pipeline.</p>
          </div>
        </section>


        <section id="grid-one" className="grid-one main-bg section">
          <div className="main-content grid-one-content">
            <h2 className="grid-main-heading">My Grid</h2>
            <p className="grid-description">Uma breve descrição.</p>

            <div className="grid">
              <article>
                <h3>Teste 1</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus
                  nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores
                  provident maiores.</p>
              </article>
              <article>
                <h3>Teste 2</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus
                  nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores
                  provident maiores.</p>
              </article>
              <article>
                <h3>Teste 2</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus
                  nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores
                  provident maiores.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="gallery" className="grid-one white-bg section">
          <div className="main-content grid-one-content">
            <h2 className="grid-main-heading">Gallery</h2>
            <p className="grid-description">Uma breve descrição.</p>

            <div className="grid">

              <div className="gallery-img">
                <img src="http://source.unsplash.com/random/360x360?r=1" alt="aaaaaaaaa" />
              </div>

              <div className="gallery-img">
                <img src="http://source.unsplash.com/random/360x360?r=2" alt=" from unsplash" />
              </div>
              <div className="gallery-img">
                <img src="http://source.unsplash.com/random/360x360?r=3" alt="r unsplash" />
              </div>
              <div className="gallery-img">
                <img src="http://source.unsplash.com/random/360x360?r=4" alt="random plash" />
              </div>
              <div className="gallery-img">
                <img src="http://source.unsplash.com/random/360x360?r=5" alt="random lash" />
              </div>
              <div className="gallery-img">
                <img src="http://source.unsplash.com/random/360x360?r=6" alt="random  unsplash" />
              </div>
            </div>
          </div>
        </section>



        <section id="grid-two" className="grid-one main-bg section">
          <div className="main-content grid-one-content">
            <h2 className="grid-main-heading">My Grid</h2>
            <p className="grid-description">Uma breve descrição.</p>

            <div className="grid">
              <article>
                <h3>Teste 1</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus
                  nobis laudantium esse ut, non commodi maxime distinctio veritatis unde,minus ad dolores
                  provident maiores.</p>
              </article>
              <article>
                <h3>Teste 2</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus
                  nobis laudantium esse ut, non commodi maxime distinctio veritatis ut minus ad dolores
                  provident maiores.</p>
              </article>
              <article>
                <h3>Teste 2</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus
                  nobis laudantium esse ut, non commodi maxime distinctio veritatis undt minus ad dolores
                  provident maiores.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="pricing" className="white-bg section">
          <div className="main-content top3-content">
            <h2>Pricing</h2>
            <p>The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some
              surprises at the machins performance. This post details some backgroundon the experience of
              porting Firefox to run natively on these CPUs.</p>
            <p>Well start with some background on the Mac transition and give an overvials that needed to
              know about the new architecture, before moving on to the concept of Universal Binaries.</p>

            <div className="responsive-table">
              <table>
                <caption>Pricing table</caption>

                <thead>
                  <tr>
                    <th>Title 1</th>
                    <th>Title 2</th>
                    <th>Title 3</th>
                    <th>Title 4</th>
                    <th>Title 5</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Content 1</td>
                    <td>Content 2</td>
                    <td>Content 3</td>
                    <td>Content 3</td>
                    <td>Content 3</td>
                  </tr>
                  <tr>
                    <td>Content 1</td>
                    <td>Content 2</td>
                    <td>Content 3</td>
                    <td>Content 3</td>
                    <td>Content 3</td>
                  </tr>
                  <tr>
                    <td>Content 1</td>
                    <td>Content 2</td>
                    <td>Content 3</td>
                    <td>Content 3</td>
                    <td>Content 3</td>
                  </tr>
                </tbody>

                <tfoot>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Testando</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </section>

        <section id="contact" className="intro main-bg section">
          <div className="main-content intro-content">
            <div className="intro-text-content">
              <h2>January brings us Firefox 85</h2>
              <p>To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you
                support for the :focus-visible pseudo-className in CSS and associated devtools, and the complete removal of Flash
                support from Firefox.</p>
            </div>

            <div className="intro-img">
              <img src="./static/img/8homentogitar.svg" alt="Loguuuuh" />
            </div>

            <div className="contact-form">
              <fieldset className="form-grid">
                <legend>Contact me</legend>

                <div className="form-group">

                  <label htmlFor="first-name">First name</label>
                  <input type="text" name="first-name" id="first-name" placeholder="Your name" />
                </div>

                <div className="form-group">
                  <label htmlFor="last-name">last name</label>
                  <input type="text" name="last-name" id="last-name" placeholder="Your last name" />
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


        <footer id="footer" className="footer white-bg">
          <h1>as</h1>
          <p><a rel="nofollow" target={'_blank'} href="/">Feito com <span className="heart">❤</span> por Tarcisio Emanoel</a></p>
        </footer>

        <a className="back-to-top" href="/">➤</a>

      </div>

    </TestesCss>
  );
}