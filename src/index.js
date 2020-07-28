import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video/index';
import CadastroCategoria from './pages/cadastro/Categoria/index';

const Pagina404 = () => (<div>Erro 404 - Página não encontrada</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo}/>
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route component={Pagina404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


// Roteamento antigo sem react router dom
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );