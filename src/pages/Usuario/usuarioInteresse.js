import React, { Component } from 'react';
import '../../assets/CSS/ADM/PerfilUsuario.css';
import MenuAdm from '../../Componentes/MenuADM';
import { Link } from 'react-router-dom';

class usuarioInteresse extends Component {
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
                        <li><Link to = "/perfilusuario">Perfil</Link></li>
                        <li><Link to = "/perfilusuariointeresse">Interesses</Link></li>
                        <li><Link to = "/perfilusuarionotificacoes">Notificações</Link></li>

                    </ul>
                </section>

                <section id="lateral_direita">
                    <div class="topo_direito">
                        <h1>Interesses</h1>
                    </div>
                    <div class="canto_direito">
                        <ul>
                            <li><a href="#">> Product name  -  productcode:#12121212 </a></li>
                            <li><a href="#">> Product name  -  productcode:#12121212 </a></li>
                            <li><a href="#">> Product name  -  productcode:#12121212 </a></li>
                            <li><a href="#">> Product name  -  productcode:#12121212 </a></li>
                            <li><a href="#">> Product name  -  productcode:#12121212 </a></li>
                            <li><a href="#">> Product name  -  productcode:#12121212 </a></li>
                            <li><a href="#">> Product name  -  productcode:#12121212 </a></li>
                            <li><a href="#">> Product name  -  productcode:#12121212 </a></li>
                            <li><a href="#">> Product name  -  productcode:#12121212 </a></li>
                            <li><a href="#">> Product name  -  productcode:#12121212 </a></li>
                        </ul>
                    </div>
                </section>
            </main>
        </>
        )
    }
}

export default usuarioInteresse;