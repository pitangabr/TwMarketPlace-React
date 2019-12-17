import React, { Component } from 'react';
import '../../assets/CSS/ADM/PerfilUsuario.css';
import MenuAdm from '../../Componentes/MenuADM';

class admInteresse extends Component {
    render() {
        return(
        <>
            <MenuAdm></MenuAdm>
            <main id="perfilmain">
                <section id="menu_lateral_esquerdo">
                    <div class="perfil">
                        <div class="nome_usuario">
                            <p>Cássio Vincent</p>
                        </div>
                    </div>
                    <ul>
                        <li><a href="../TWmarketplace - Perfil usuário/PerfilUsuário.html">Perfil</a></li>
                        <li><a href="#">Interesses</a></li>
                        <li><a href="../TWmarketplace - Perfil usuário/PerfilUsuarioConfig.html">Notificações</a></li>
                        <li><a href="#">Produtos</a></li>
                        <li className= "tabulatura">Usuarios</li>
                        <li><a href="#">Novos Cadastros</a></li>
                        <li><a href="#">Lista de usuários</a></li>
                    </ul>
                </section>

                <section id="lateral_direita">
                    <div class="topo_direito">
                        <h1>Interesses</h1>
                    </div>
                    <div class="canto_direito">
                        <ul>
                            <li><a href="#">> Product name  -  productcode:#12121212 - Tem um novo interesse</a></li>
                            <li><a href="#">> Product name  -  productcode:#12121212 - Tem um novo interesse</a></li>
                            <li><a href="#">> Product name  -  productcode:#12121212 - Tem um novo interesse</a></li>
                            <li><a href="#">> Product name  -  productcode:#12121212 - Tem um novo interesse</a></li>
                            <li><a href="#">> Product name  -  productcode:#12121212 - Tem um novo interesse</a></li>
                            <li><a href="#">> Product name  -  productcode:#12121212 - Tem um novo interesse</a></li>
                            <li><a href="#">> Product name  -  productcode:#12121212 - Tem um novo interesse</a></li>
                            <li><a href="#">> Product name  -  productcode:#12121212 - Tem um novo interesse</a></li>
                            <li><a href="#">> Product name  -  productcode:#12121212 - Tem um novo interesse</a></li>
                            <li><a href="#">> Product name  -  productcode:#12121212 - Tem um novo interesse</a></li>
                        </ul>
                    </div>
                </section>
            </main>
        </>
        )
    }
}

export default admInteresse;