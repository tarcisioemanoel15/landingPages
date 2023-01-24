import styled from "styled-components";

export const GaleriaCss = styled.section`

.grid5 h3{
  margin-top: 8rem;
}

.gallery-img {
  width: 100%;
  max-width: 36rem;
  max-height: 36rem;
  overflow: hidden;
  padding: 10px;
}

.gallery-img img {
  transition: all 300ms ease-in-out;
}

.gallery-img img:hover {
  transform: translate(-3%, 3%) scale(1.2) rotate(5deg);
}

`;