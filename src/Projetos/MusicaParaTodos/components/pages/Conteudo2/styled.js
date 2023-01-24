import styled from "styled-components";

export const ConteudoCss = styled.section`
color: white;

 .redesImg a img{
width: 100px;
text-align: center;
margin-left: 20px;
} 

.marginH2{
  margin-top: 9rem;
}

.grid-one-content {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  min-height: 100vh;
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

`;