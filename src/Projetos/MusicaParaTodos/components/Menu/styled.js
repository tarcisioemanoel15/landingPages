import styled from "styled-components";

export const CssMenu = styled.aside`
font-family: 'OpenSans', Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
 .menu {
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   width: 100%;
   z-index: 1;
   border-bottom: 0.1rem solid #EEEEEE;
  }

.menu-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0;
  padding-bottom: 0;
}

.menu h1 img{
  font-size: 2.3rem;
  color: #0A1128;
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
  color: #0A1128;
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




`;