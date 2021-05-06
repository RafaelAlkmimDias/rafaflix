import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import Home from './pages/Home';

const Pagina404 = () =>(<h1>Error 404</h1>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route component={Pagina404} /> 
    </Switch>
  </BrowserRouter>,
  /*<React.StrictMode>
    <App />
  </React.StrictMode>,*/
  document.getElementById('root')
);

