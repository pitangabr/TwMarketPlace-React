import React, {Component} from 'react';
import '../../assets/PagesHtml/Cadastro/cadastro.css';
import Axios from 'axios';


//importando logo
import logo from '../../assets/imagens/logor.png';
import { Checkbox } from '@material-ui/core';

const emailValido = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);



class Cadastro extends Component {

    constructor() {
        super();

        this.state = {
            nome: "",
            email: "",
            senha: "",
            cSenha: "",
            cTermo: false,
        };
    }

    //função para pegar as informações do input e salvar no state
    atualizaEstado(event){
        event.preventDefault();

        if((this.state.nome !== "") && (this.state.nome.length >=3)){
            this.cadastroNome()
        }else {
            alert("Insira seu nome Completo")
        }if ((this.state.email !== "")  && (this.state.email === emailValido)) {
            this.cadastroEmail()
        }else {
            alert("Insira um email válido")
        }if ((this.state.senha !== "") && (this.state.senha.length >=8)) {
            this.cadastroSenha()
        }else {
            alert("sua senha deve conter no minimo 8 digitos")
        }if ((this.state.cSenha !== "") && (this.state.cSenha === this.state.senha)){
            this.cadastroCSenha()
        } else {
            alert("suas senhas são diferentes")
        }
    }

    cadastroNome(event){    
        alert(this.state.nome);
        const nome = this.state.nome
        this.setState({nome: nome}) 
    }

    cadastroEmail(event) {
        alert(this.state.email);
        const email = this.state.email
        this.setState({email: email}) 
    }

    cadastroSenha(event) {
        alert(this.state.senha);
        const nome = this.state.nome
        // this.setState({senha: senha}) 
    }

    cadastroCSenha(event) {
        alert(this.state.cSenha);
        // this.setState({cSenha: cSenha}) 
    }

    atualizaCheck(event) {
        let termo = false;

        if(event.target.value === "Checked")
        {
            termo=true;
        } else {
            termo=false;
        }

        this.setState({ cTermo : termo})
    }

    render() {
        return <>
            <main>
                <section id="background">
                    {/* <!-- Parte principal do corpo do site --> */}
                    <div className="sessao">
                        {/* <!-- Sessão definida para dividir o campo de login --> */}
                        <div className="campo1">
                            {/* <!-- Div definida para formatar o campo de login --> */}
                            {/* <h1 className="h1topo"> Crie sua conta na</h1> */}
                            <div className="logo_twc">
                                <img src={logo} alt=""/>
                                {/* <!-- Div para imagem dentro do campo de login --> */}
                            </div>
                            <form id="formulario" >
                                {/* <!-- Tag criada para criar formulário --> */}
                                <input 
                                value={this.state.nome}
                                type="text" 
                                name="nome" 
                                id="iNome" 
                                placeholder="Nome" 
                                size="15" 
                                maxlength="20"
                                onChange={event => this.setState({nome: event.target.value})}
                                required/> 
                                    {/* <!-- Input criado para usuário inserir o nome para acesso --> */}
                                <input
                                value={this.state.email} 
                                type="text" 
                                name="email" 
                                id="iEmail" 
                                placeholder="Email" 
                                onChange={event => this.setState({email: event.target.value})}
                                required/>
                                    {/* <!-- Input criado para usuário inserir o email para acesso --> */}
                                <input 
                                value={this.state.senha} 
                                type="text" 
                                name="senha" 
                                placeholder="Senha" 
                                size="15" 
                                maxlength="20"
                                onChange={event => this.setState({senha: event.target.value})}
                                required/>
                                    {/* <!-- Input criado para usuário inserir senha dde acesso --> */}
                                <input 
                                type="text" 
                                name="tCSenha" 
                                placeholder="Confirmar Senha" 
                                size="15" maxlength="20"
                                required="required"/> 
                                    {/* <!-- Input criado para usuário inserir senha dde acesso --> */}
                                <div className="check2">
                                    <input type="checkbox" id="scales" name="cTermo"/>
                                    <label for="scales">Aceito receber novidades do TWMarketPlace</label>
                                </div>

                                <button className="criar_conta" onClick= {this.atualizaEstado.bind(this)}>
                                   Criar Conta
                               </button>
                            </form>
                                <div className="termo">
                                    <p>Ao clicar em criar conta, você está de acordo com os termos de serviço do TWMarketplace.</p>
                                </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    }
}

export default Cadastro;