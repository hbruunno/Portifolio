import './contato.css'
import wpp from '../assets/icones/whatsapp.png'


export default function Contato () {
  

  return ( 
    <div className="contato">

      <div className="cinfo">
        <h1 className='ctitulo'>Meus Contatos</h1>
        <h2 className='csubtitulo'>E-mail:</h2>
        <p className='cparagrafo'>brunohenriquers@outlook.com</p>

        <h2 className='csubtitulo'> Telefone e Whatsaap:</h2>
        <p className='cparagrafo'>(79) 99672 6925</p>
        <h2 className='csubtitulo'>Instagram:</h2>
        <p className='cparagrafo'>hbruunno</p>
      </div>    

      <div className="wimg">
        <a href="https://wa.me/5579996726925" className='a' target="_blank" >
         <img className='wpp' src={wpp} alt='img whatsaap'/>
        </a>
       
      </div>


      

      
    </div>
  );
};

