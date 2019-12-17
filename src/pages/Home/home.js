import React, { Component } from 'react';
import '../../assets/CSS/HOME/Home.css';
import Menu from '../../Componentes/Menu';
import Rodape from '../../Componentes/Rodape';
import CarouselPage from '../../Componentes/Carrossel';

import notebook from '../../assets/imagens/note1.jpg';
import smartphone from '../../assets/imagens/phone7.jpg';
import { Link } from 'react-router-dom';


class Home extends Component {
    render() {
      return <>
      <Menu />
      <main id="home_main">
        <div id= "banner">
            <CarouselPage/>
        </div>
        {/* <!--Fim home_banner--> */}
        <hr className="hr"/>
  
        <section id="img1">
        {/* <!--Seção img1 = uma area do site onde os produtos podem ser classificados/ Local onde ficaram os produtos divididos (ex. fotos de varios notebooks)--> */}
            <nav className="filtro">
                    <h2>Notebooks</h2>

            </nav>
            <div id="containers">  
                <div className="Container">
                    <div className="grid">
                        <a href="../Editado-Tw/DescriçaoProduto.html"><img src={notebook} alt=""/></a>
                        <span className="valor">R$000</span>
                    </div>
                    <div className="grid">
                        <a href="#"><img src={notebook} alt=""/></a>
                        <span className="valor">R$000</span>
                    </div>
                    <div className="grid">
                        <a href="#"><img src={notebook} alt=""/></a>
                        <span className="valor">R$000</span>
                    </div>
                    <div className="grid">
                        <a href="#"><img src={notebook} alt=""/></a>
                        <span className="valor">R$000</span>
                    </div>
                    <div className="grid">
                        <a href="#"><img src={notebook} alt=""/></a>
                        <span className="valor">R$000</span>
                    </div>
                    <div className="grid">   
                        <a href="#"> <img src={notebook} alt=""/></a>
                        <span className="valor">R$000</span>
                    </div>             
                </div>
                {/* <!--Fim container--> */}
                <div className="grid-8">    
                    <a href="#"><img src={notebook} alt=""/></a>
                    <span className="valor_Maior">R$000</span>
                </div>  
            </div>
              <Link to ="/notebooks">Ver mais >>></Link>
        </section>
        {/* <!--Fim img1--> */}
        <hr className="hr"/>
  
        <section id="img2">
        {/* <!--Seção img2 = uma area do site onde os produtos podem ser classificados/ Local onde ficaram os produtos divididos (ex. fotos de varios smartphones)--> */}
            <nav className="filtro">
                <h2>Smartphones</h2>
            </nav>
            <div id="containers">  
                <div className="Container">
                    <div className="grid">
                        <a href="../Editado-Tw/DescriçaoProduto.html"><img src={smartphone} alt="" /></a>
                        <span className="valor">R$000</span>
                    </div>
                    <div className="grid">
                        <a href="#"><img src={smartphone} alt=""/></a>
                        <span className="valor">R$000</span>
                    </div>
                    <div className="grid">
                        <a href="#"><img src={smartphone} alt=""/></a>
                        <span className="valor">R$000</span>
                    </div>
                    <div className="grid">
                        <a href="#"><img src={smartphone} alt=""/></a>
                        <span className="valor">R$000</span>
                    </div>
                    <div className="grid">
                        <a href="#"><img src={smartphone} alt=""/></a>
                        <span className="valor">R$000</span>
                    </div>
                    <div className="grid">   
                        <a href="#"> <img src={smartphone} alt=""/></a>
                        <span className="valor">R$000</span>
                    </div>             
                </div>
                {/* <!--Fim container--> */}
                    <div className="grid-8">    
                    <a href="#"><img src={smartphone} alt=""/></a>
                    <span className="valor_Maior">R$000</span>
                </div>  
            </div>
            <Link to ="/smartphones">Ver mais >>></Link>
        </section>
        {/* <!--Fim img2--> */}
    </main>
    <Rodape/>
    </>
    }
  }
  
  export default Home;
  