import React, { Component } from 'react';
import '../../assets/PagesHtml/perfil_Usuario/CSS/PerfilUsuario.css';
import MenuAdm from '../../Componentes/MenuADM';
import { Link } from 'react-router-dom';


class admListaUsuarios extends Component {
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
                        <li><Link href="../TWmarketplace - Perfil usuário/PerfilUsuário.html">Perfil</Link></li>
                        <li><Link href="">Interesses</Link></li>
                        <li><Link href="../TWmarketplace - Perfil usuário/PerfilUsuarioConfig.html">Notificações</Link></li>
                        <li><Link href="#">Produtos</Link></li>
                        <li className= "tabulatura">Usuarios</li>
                        <li><Link href="#">Novos Cadastros</Link></li>
                        <li><Link href="#">Lista de usuários</Link></li>
                    </ul>
                </section>

                <section id="lateral_direita">
                    <div class="topo_direito">
                        <h1>Lista de Usuarios Cadastrados</h1>
                    </div>
                    <div class="canto_direito">
                        <ul>
                            <li><a href="#">> Carlos Vieira Santos - ID: 23387432784732</a></li>
                            <li><a href="#">> Carlos Vieira Santos - ID: 23387432784732</a></li>
                            <li><a href="#">> Carlos Vieira Santos - ID: 23387432784732</a></li>
                            <li><a href="#">> Carlos Vieira Santos - ID: 23387432784732</a></li>
                            <li><a href="#">> Carlos Vieira Santos - ID: 23387432784732</a></li>
                            <li><a href="#">> Carlos Vieira Santos - ID: 23387432784732</a></li>
                            <li><a href="#">> Carlos Vieira Santos - ID: 23387432784732</a></li>
                            <li><a href="#">> Carlos Vieira Santos - ID: 23387432784732</a></li>
                            <li><a href="#">> Carlos Vieira Santos - ID: 23387432784732</a></li>
                            <li><a href="#">> Carlos Vieira Santos - ID: 23387432784732</a></li>
                        </ul>
                    </div>
                </section>
            </main>
        </>
        )
    }
}

export default admListaUsuarios;