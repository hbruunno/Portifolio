import './sobre.css'
import cerebro from '../assets/icones/cerebro.png'
import html from '../assets/icones/html.png'
import css from '../assets/icones/css.png'
import reac from '../assets/icones/react.png'
import node from '../assets/icones/node.png'
import js from '../assets/icones/js.png'
import bootstrap from '../assets/icones/botstrap.png'
import sql from '../assets/icones/sql.png'


export default function Sobre() {
  return(
    <div className='scontainer'>
    <h1 className='titulo'>Oi, Bem-vindo</h1>
          <p className='paragrafo'>
          Sou formado em Sistemas de Informação pela Universidade Federal de Alagoas (UFAL). Meu trabalho é guiado pelo uso de tecnologias amplamente reconhecidas no mercado que me permitem desenvolver soluções eficazes, criativas e alinhadas às necessidades de cada projeto.
          </p>
          <div className="titulohab">
              <img src={cerebro} alt="cerebro" className='cerebro'/> 
              <h1 className='h1'>Conhecimentos - Habilidades </h1>
          </div>
          <div className="habilidades">
            
          
          <div className="tecnologias">
            <img src={html} alt="html" className='ticon' />
            <img src={css} alt="css"  className='ticon'/>
            <img src={reac} alt="react"  className='ticon'/>
            <img src={node} alt="node"  className='ticon'/>
            <img src={js} alt="js"  className='ticon' />
            <img src={bootstrap} alt="bootstrap"  className='ticon'/>
            <img src={sql} alt="bootstrap"  className='ticon'/>
          </div>
          </div>
    </div>
  )
}