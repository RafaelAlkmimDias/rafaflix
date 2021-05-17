import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid var(--white);
  border-radius: 5px;
  color: var(--white);
  font-size: 16px;
  font-weight: bold;
  padding: 16px 24px;
  text-decoration: none;
  transition: opacity .3s;
  background-color: var(--black);

  box-sizing: border-box;
  cursor: pointer;
  font-style: normal;
  outline: none;
  display: inline-block;

  &:hover,
  &:focus {
    opacity: .5;
  }

  @media (max-width: 800px) {
    background-color: var(--primary);
    border: 0;
    border-radius: 0;
    bottom: 0;
    color: var(--white);
    left: 0;
    position: fixed;
    outline: 0;
    right: 0;
    text-align: center;
  }
`;

export default Button;
