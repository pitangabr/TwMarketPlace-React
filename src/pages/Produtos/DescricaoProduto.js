import React, { Component } from 'react';
import '../../assets/CSS/DescricaoProduto/DescricaoProduto.css';
import Menu from '../../Componentes/Menu';
import Rodape from '../../Componentes/Rodape';
import { Link } from 'react-router-dom';

import produto from '../../assets/imagens/note1.jpg';

class DescricaoProduto extends Component {
    render() {
      return <>
        <Menu></Menu>
        <main id="classificacaomain">

        {/* <!--COMEÇO DO PRODUTO--> */}
        <section id="produto">

            <div className="imagemG">

                <div className="imagem1">
                    <img src={produto} alt=""/>
                </div>


            </div>

            <div className="tituloT">

                <div className="tituloNot">
                    <h1>Notebook Acer Aspire 3 A315-53-52ZZ Intel Core i5 - 8GB 1TB 15,6” Windows 10</h1>
                </div>

                <p>R$2680,00</p>

                <div className="btn">
                    <Link to = "/perfiladminteresse" className = "btn_tenhoInteresse"><span>Tenho Interesse</span></Link>
                </div>

            </div>

        </section>
        {/* <!--FIM DA SECTION--> */}

        <hr/>
        {/* <!--COMEÇO DO ARTICLE--> */}

        <article id="corpoanuncio">
            <h2>Descrição:</h2>
            <p>Precisa de poder de processamento para executar suas atividades com mais velocidade? O notebook Lenovo
                Ideapad 330 é uma boa opção!
                Equipado com processador i7, 8GB de RAM e 1TB de HD, você roda programas, vídeos e jogos com maior
                fluidez e o melhor de tudo, na hora que precisar.
                Ele também acompanha uma placa de vídeo GeForce MX150 com 2GB para turbinar as suas aplicações. Tudo
                isso em uma tela de 15,6 polegadas
                Full HD com abertura 180° para você aproveitar ao máximo os seus conteúdos favoritos.</p>
            <h2>Especificações:</h2>

            <table id="tabela_esp">

                <tr>
                    <td rowspan="2" className="ce"> Memória</td>
                    <td className="cd">Modelos com Intel Coreaté 20GB de memória máxima 2400MHz DDR4 (4GB soldados + 1 slot)
                    </td>
                    <tr>
                        <td className="cd">Modelos com Intel Celeron até 8GB de memória máxima 2400MHz DDR4 (1 slot).</td>
                    </tr>
                </tr>

                <tr>
                    <td className="ce">Armazenamento</td>
                    <td className="cd">HD 500GB (5400 rpm) HD 1TB (5400 rpm) SSD 256GB</td>
                </tr>

                <tr>
                    <td className="ce">Câmera</td>
                    <td className="cd">0,3 MP (VGA)</td>
                </tr>

                <tr>
                    <td rowspan="2" className="ce">Bateria</td>
                    <td className="cd">2 células 30Wh </td>
                <tr>
                    <td className="cd">células 35Wh (modelos com placa de vídeo dedicada)</td>
                </tr>
                </tr>

                <tr>
                    <td className="ce">Cor</td>
                    <td className="cd">Prata</td>
                </tr>

            </table>
        </article>
        {/* <!--COMEÇO DO ARTICLE--> */}
    </main>
    {/* <!--FIM DO MAIN--> */}
        <Rodape/>
    </>
 }
}

export default DescricaoProduto;