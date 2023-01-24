import styled from "styled-components";

export const TestesCss = styled.main`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  font-family: 'Open Sans', sans-serif;
  font-size: 2rem;
  color: #0A1128);
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

.responsive-table {
  overflow: hidden;
  overflow-x: auto;
}

table {
  min-width: 360px;
  width: 100%;
  border-collapse: collapse;
}

table caption {
  font-style: italic;
  font-size: 1.6rem;
  text-align: left;
  margin-bottom: 1rem;
}

table td,
table th {
  white-space: nowrap;
  padding: 1rem;
  text-align: left;
  border: 0.1rem solid  #EEEEEE
}

tfoot td,
table th {
  background:  #EEEEEE;
}



/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
.main-bg {
  background-image: url('./static/img/rose-petals.svg');
  background-size: cover;
  background-position: center center;
  color: #FFFFFF;
}

.white-bg {
  background: #FFFFFF;
  color: #0A1128);
}

.main-content {
  max-width: 120rem;
  margin: 0 auto;
  padding: 10rem 3rem;
}

.section {
  min-height: 100vh;
}

.menu-spacing {
  height: 65px;
}

div .full-width {
  width: 100%;
  flex: 1 1 100%;
}
/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
.menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1;
  border-bottom: 0.1rem solid  #EEEEEE;
}

.menu-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0;
  padding-bottom: 0;
}

.menu h1 {
  font-size: 2.3rem;
  color: #0A1128);
}

.menu h1 a {
  color: inherit;
}

.menu ul {
  list-style: none;
  display: flex;
}

.menu ul li a {
  display: block;
  padding: 2rem;
  font-size: 1.8rem;
  color: #0A1128);
  position: relative;
}

.menu ul li a::after {
  content: '';
  position: absolute;
  bottom: 1rem;
  left: 50%;
  width: 0;
  height: 0.2rem;
  background: crimson; 
  transition: all 300ms ease-in-out;
}

.menu ul li a:hover::after {
  width: 50%;
  left: 25%;
}



/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */






.intro-content {
  position: relative;
  /* top: -8rem; */
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  min-height: 100vh;
}

.intro-text-content, .intro-img {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
}

.intro-img img,
.intro-img svg {
  max-width: 100%;
  height: auto;
}

.top3-content {
  max-width: 64rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
}

.grid-one-content {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  min-height: 100vh;
}

.grid-main-heading {
  margin-bottom: 1rem;
}

.grid-description {
  padding-bottom: 5rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  counter-reset: grid-counter;
}

.grid h3 {
  font-size: 3rem;
  position: relative;
  padding-left: 5rem;
  padding-bottom: 2rem;
}

.grid h3::before {
  counter-increment: grid-counter;
  content: counter(grid-counter);
  position: absolute;
  font-size: 8rem;
  font-style: italic;
  top: -4rem;
  left: -2rem;
  transform: rotate(5deg);
}

.gallery-img {
  width: 100%;
  max-width: 36rem;
  max-height: 36rem;
  overflow: hidden;
}

.gallery-img img {
  transition: all 300ms ease-in-out;
}

.gallery-img img:hover {
  transform: translate(-3%, 3%) scale(1.2) rotate(5deg);
}

.contact-form {
  grid-column: span 2;
}

.contact-form .form-grid {
  border: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3rem;
}

.form-grid legend {
  font-style: italic;
  font-size: 1.6rem; 
  margin-bottom: 3rem;
}

.form-group {
  flex: 1 1 320px;
}

.form-group label {
  display: block;
  margin-bottom: 1rem;
}

.form-group input,
.form-group textarea {
  border: none;
  background: #FFFFFF;
  padding: 1.5rem 2rem;
  width: 100%;
  font-size: 3rem;
  outline: none;
}

.form-group input:focus,
.form-group textarea:focus {
  box-shadow: 0 0 10px 2px crimson;
}

.form-group button {
  border: 0.5rem solid #FFFFFF;
  background: none;
  color: #FFFFFF;
  padding: 1.5rem 2rem;
  font-size: 3rem;
  cursor: pointer;
  transition: all 300ms ease-in-out;
}

.form-group button:hover {
  background: #FFFFFF;
  color: #0A1128);
}

.form-group ::placeholder {
  color:  #EEEEEE;
}

.footer {
  text-align: center;
  font-size: 1.6rem;
}

.footer a {
  color: #0A1128);
}

.heart {
  color: crimson;
}

.footer p {
  margin: 0;
  padding: 3rem;
}

.close-menu {
  display: none;
}

.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: #FFFFFF;
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #0A1128);
  transform: rotate(-90deg);
  border: 0.1rem solid #0A1128);
}

@media (max-width: 800px) {
  .intro-content, .grid {
    grid-template-columns: 1fr;
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
    background: #0A1128);
    color: #FFFFFF;
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





`;