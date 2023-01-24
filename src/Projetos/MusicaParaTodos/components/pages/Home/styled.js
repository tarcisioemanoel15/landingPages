import styled from "styled-components";

export const CssHome = styled.section`
.home-content {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  min-height: 100vh;
  color: white;
}

.home-text-content, .home-img {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
}

.home-img img,
.home-img svg {
  max-width: 100%;
  height: auto;
}

`;


