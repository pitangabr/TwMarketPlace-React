import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

//importando tela login
import Login from './pages/Login/Login';

//importando tela cadastro
// import Cadastro from './pages/Cadastro/Cadastro';

//importando tela home
import Home from './pages/Home/home';
import NaoEncontrado from './pages/naoencontrado/NaoEncontrado';



//Importando telas perfil de usuario
import PerfilUsuario from './pages/Usuario/perfilUsuario';
import usuarioInteresse from './pages/Usuario/usuarioInteresse';
import usuarioNotificacao from './pages/Usuario/usuarioNotificacao';

//importando telas perfil ADM
import perfilAdm from './pages/ADM/perfilAdm';
import admInteresse from './pages/ADM/admInteresse'
import Notificacao from './pages/ADM/admNotificacao';
import admProdutos from './pages/ADM/admproduto';
import admNovosCadastros from './pages/ADM/admNovosCadastros';
import admListaUsuarios from './pages/ADM/admListaUsuarios';

//importando telas de produtos
import Notebooks from './pages/Produtos/Notebooks';
import Smartphone from './pages/Produtos/Smartphone';
import Monitor from './pages/Produtos/Monitor';
import Acessorio from './pages/Produtos/Acessórios';

//importando tela da descrição de produto
import DescricaoProduto from './pages/Produtos/DescricaoProduto';


const Ways = (
    <Router>
        <div>
            <Switch>
                {/* criando rota tela login */}
                <Route exact path = "/" component = {Login}/>

                {/* Criando rota tela cadastro */}
                {/* <Route path = "/cadastro" component = {Cadastro}/> */}

                {/* Criando rota tela home */}
                <Route path = "/home" component = {Home}/>

                {/* Criando rota telas de produtos */}
                <Route path = "/notebooks" component = {Notebooks}/>
                <Route path = "/smartphones" component = {Smartphone}/>
                <Route path = "/monitores" component = {Monitor}/>
                <Route path = "/acessorios" component = {Acessorio}/>

                {/* Criando rota telas ADM */}
                <Route path = "/perfiladm" component = {perfilAdm}/>
                <Route path = "/perfiladminteresse" component = {admInteresse}/>
                <Route path = "/perfiladmnotificacoes" component = {Notificacao}/>
                <Route path = "/perfiladmprodutos" component = {admProdutos}/>
                <Route path = "/perfiladmnovoscadastros" component = {admNovosCadastros}/>
                <Route path = "/perfiladmlistadeusuarios" component = {admListaUsuarios}/>

                {/* Criando rota telas perfil de usuario */}
                <Route path = "/perfilusuario" component = {PerfilUsuario}/>
                <Route path = "/perfilusuariointeresse" component = {usuarioInteresse}/>
                <Route path = "/perfilusuarionotificacoes" component = {usuarioNotificacao}/>
                <Route path = "/descricaoproduto" component = {DescricaoProduto}/>

                {/* Criando rota tela nao encontrado */}
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
