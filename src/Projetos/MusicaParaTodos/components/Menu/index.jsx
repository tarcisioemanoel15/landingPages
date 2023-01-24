
import { CssMenu } from "./styled";
export default function Menu() {

  const mobile = () => {
    return document.getElementById('close-menu').checked = false;
  }

  return (
    <CssMenu >


      <input id='close-menu' className='close-menu' type={'checkbox'} />
      <label htmlFor="close-menu" title='close-menu' className='close-menu-label'></label>



      <aside className="menu white-bg">
        <div className="main-content menu-content" >
          <h1 onClick={mobile}>
            <a href="#home">
              <img src="./static/img/favicon/32x32.png" alt="as" />
            </a>
          </h1>

          <nav>
            <ul onClick={mobile}>
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

    </CssMenu >

  );

}