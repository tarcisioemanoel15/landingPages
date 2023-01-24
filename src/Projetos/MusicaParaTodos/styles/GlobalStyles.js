import styled from "styled-components";

export const GlobalStyles = styled.section`

@font-face {
  font-family: OpenSans;
  src: url('./static/fonts/Open_Sans/OpenSans-Italic-VariableFont_wdth,wght.ttf');
}

@font-face {
  font-family: Dancing;
  src: url('./static/fonts/Dancing_Script/DancingScript-VariableFont_wght.ttf');
}



* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  /* font-size: 55.5%; */
  font-size: 62.5%;   

  scroll-behavior: smooth;
}

body {
  font-family: 'Open Sans', sans-serif;
  font-size: 2rem;
  color: black;
  line-height: 1.5;
}





h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Montserrat', sans-serif;
}

h1 {
  font-size: 6rem;
  text-transform: uppercase;
}


h2 {
  font-size: 6rem;
  margin-bottom: 5rem;
  text-transform: uppercase;
  line-height: 1.2;
}

h3 {
  font-size: 5rem;
}

h4 {
  font-size: 4.5rem;
}

h5 {
  font-size: 4rem;
}

h6 {
  font-size: 3.5rem;
}

a {
  text-decoration: none;
}

p {
  margin-bottom: 3rem;
}


.main-bg {
  background-image: url('./static/img/wintery-sunburst.svg');
  background-size: cover;
  background-position: center center;
  color: white;
}

.white-bg {
  background: white;
  color: black;
}

.main-content {
  max-width: 120rem;
  margin: 0 auto;
/* 10 */
  padding: 1rem 3rem;
}

.section {
  min-height: 100vh;
}

.menu-spacing {
  height: 65px;
}



.grid-main-heading {
  margin-bottom: 1rem;
}

.grid-description {
  padding-bottom: 5rem;
}




.close-menu {
  display: none;
}







@media screen and (max-width: 800px) {
  .intro-content, .grid {
    grid-template-columns: 1fr;
  }

  .main-content{
    text-align: center;
  }

  .gallery-img {
    width: 100%;
    max-width: 100%;
    max-height: 100%; 
  }

  .gallery-img img {
    width: 100%;
  }

  .grid-one-content {
    display: block;
  }

  .menu {
    bottom: 0;
    text-align: center;
  }

  .menu-content, .menu-content ul {
    flex-direction: column;
    justify-content: center;
  }

  .menu-content {
    height: 100vh;
  }

  .menu {
    display: none;
  }

  .close-menu-label::after {
    content: '☰';
    position: fixed;
    z-index: 2;
    top: 2rem;
    right: 2rem;
    background: #0A1128;
    color: white;
    font-size: 3rem;
    line-height: 3rem;
    width: 3rem;
    height: 3rem;
    text-align: center;
    padding: 0.5rem;
    cursor: pointer;
  }

  .close-menu:checked~.menu {
    display: block;
  }

  .close-menu:checked~.close-menu-label::after {
    content: '×';
  }

  .menu-spacing {
    display: none;
  }

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 3.6rem;
  }

  h3 {
    font-size: 3.4rem;
  }

  h4 {
    font-size: 3.2rem;
  }

  h5 {
    font-size: 3rem;
  }

  h6 {
    font-size: 2.8rem;
  }
} 


@media screen and (max-width: 380px) {

  .home-content{
    display: block;
  }

.grid article p img{
  width: 100px;
  display: block;
  margin: auto;
}

}


`;
