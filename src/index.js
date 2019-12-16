import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

// import Login from './pages/login';
// import Cadastro from './pages/cadastro';
// import Desh from './pages/desh';
// import PerfilUsuario from './pages/perfilusuario';
// import DescricaoProduto from './pages/descricaoprodu';
import Home from './pages/Home/home';
import NaoEncontrado from './pages/naoencontrado/NaoEncontrado';
import admListaUsuarios from './pages/ADM/admListaUsuarios';
import admInteresse from './pages/ADM/admInteresse'
import admNovosCadastros from './pages/ADM/admNovosCadastros';
import Notebooks from './pages/Home/Notebooks';
import Smartphone from './pages/Home/Smartphone';
import Monitor from './pages/Home/Monitor';
import Acessorio from './pages/Home/Acessórios';

const Ways = (
    <Router>
        <div>
            <Switch>
                {/* <Route exact path = "/" component = {login}/> */}
                {/* <Route path = "/cadastro" component = {Cadastro}/> */}
                <Route path = "/home" component = {Home}/>
                <Route path = "/perfiladminteresse" component = {admInteresse}/>
                <Route path = "/notebooks" component = {Notebooks}/>
                <Route path = "/smartphones" component = {Smartphone}/>
                <Route path = "/monitores" component = {Monitor}/>
                <Route path = "/acessorios" component = {Acessorio}/>
                {/* <Route path = "/perfiladmprodutos" component = {admProdutos}/> */}
                {/* <Route path = "/perfiladm" component = {DescricaoProduto}/> */}
                <Route path = "/perfiladmlistadeusuarios" component = {admListaUsuarios}/>
                <Route path = "/perfiladmnovoscadastros" component = {admNovosCadastros}/>
                {/* <Route path = "/perfiladmnotificacoes" component = {DescricaoNotificacoes}/> */}
                {/* <Route path = "/perfilusuario" component = {PerfilUsuario}/> */}
                {/* <Route path = "/descricaoproduto" component = {DescricaoProduto}/> */}
                <Route component = {NaoEncontrado}/>
            </Switch>
        </div>
    </Router>
);


ReactDOM.render(Ways, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
