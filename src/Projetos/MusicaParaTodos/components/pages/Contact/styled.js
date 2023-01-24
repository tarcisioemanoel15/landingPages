import styled from "styled-components";

export const ContactCss = styled.section`

.contact-form {
  grid-column: span 2;
}

.home-img img{
  width: 500px;
}

.home-text-content{
  margin: 9rem;
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
  background:#FFFFFF;
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
  margin: 15px;
  font-size: 3rem;
  cursor: pointer;
  transition: all 300ms ease-in-out;
}

.form-group button:hover {
  background: #FFFFFF;
  color: #0A1128;
}

.form-group ::placeholder {
  color:  #EEEEEE;
}

div .full-width {
  width: 100%;
  flex: 1 1 100%;
}

 @media screen and (max-width: 500px) {
  /* .form-group input,
  .form-group textarea {
    width: 88%;
}  */
}


@media screen and (max-width: 720px) {
  .contact-form {
  grid-column: span 1;
}

.home-content {
  display: block;
}

.home-text-content p{
  margin-bottom: -3rem;
}
}

`;