import React from 'react';
import styled from 'styled-components';

import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 94px;
    @media (max-width: 800px){
        padding-top: 40px;
    }
`;

// eslint-disable-next-line react/prop-types
function PageDefault({ children }) {
  return (
    <>
      <Menu />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
