import styled from "styled-components";

export const Tabelacss = styled.div`

.pricingH2{
  margin-top: 9rem;
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
  border: 0.1rem solid #EEEEEE;
}

tfoot td,
table th {
  background: #EEEEEE;
}

div.introo-content {
  max-width: 64rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  margin-bottom: 15px;
}

`;