
// import './App.css'
// import Foto from '../src/assets/imagens/Perfil.png'
// import insta from './assets/icones/insta.png'
// import git from './assets/icones/git.png'
// import ln from './assets/icones/ln.png'
// import Projetos from './projetos/Projetos'
// import Sobre from './sobre/Sobre'
// import Navbar from './navegação'


// function App() {

//   return (
//     <div className='container'>

//       <div className="perfil">
//         <img src={Foto} alt="Foto" className='img'/>
//         <p className='nome'>Bruno Henrique</p>
//         <p className='profi'>Desenvolvedor Front-end</p>

//         <div className="icones">
//           <img src={ln} alt="linkedin" className='icon'/>
//           <img src={git} alt="GitHub" className='icon'/>
//           <img src={insta} alt="istagram" className='icon' />
//         </div>
//         <button className='botaoperfil'>Baixar Curriculo</button>
        

//       </div>
//       <div className="conteudo">
//         <div className="navbar">
//           <button className='botao'>Sobre mim</button>
//           <button className='botao'>Projetos</button>
//           <button className='botao'>Curriculo</button>
//           <button className='botao'>Fale comigo</button>

//         </div>
//         <Navbar/>

//         <div className="pagina">
        
//           <Sobre/>
//           <Projetos/>
          
        

//         </div>
//       </div>
      
//     </div>
//   )
// }

// export default App


// import './App.css';
// import Foto from '../src/assets/imagens/Perfil.png';
// import insta from './assets/icones/insta.png';
// import git from './assets/icones/git.png';
// import ln from './assets/icones/ln.png';
// import Projetos from './projetos/Projetos';
// import Sobre from './sobre/Sobre';
// import Navbar from './navegação';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <div className="container">
//         <div className="perfil">
//           <img src={Foto} alt="Foto" className="img" />
//           <p className="nome">Bruno Henrique</p>
//           <p className="profi">Desenvolvedor Front-end</p>

//           <div className="icones">
//             <img src={ln} alt="linkedin" className="icon" />
//             <img src={git} alt="GitHub" className="icon" />
//             <img src={insta} alt="Instagram" className="icon" />
//           </div>
//           <button className="botaoperfil">Baixar Currículo</button>
//         </div>

//         <div className="conteudo">
//           <div className="navbar">
//             <Link to="/" className="botao">
//               Sobre mim
//             </Link>
//             <Link to="/projetos" className="botao">
//               Projetos
//             </Link>
//             <Link to="/curriculo" className="botao">
//               Currículo
//             </Link>
//             <Link to="/fale-comigo" className="botao">
//               Fale comigo
//             </Link>
//           </div>
//           <Navbar />

//           <div className="pagina">
//             <Routes>
//               <Route path="/" element={<Sobre />} />
//               <Route path="/projetos" element={<Projetos />} />
//               <Route path="/curriculo" element={<div>Currículo</div>} />
//               <Route path="/fale-comigo" element={<div>Fale Comigo</div>} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;



import './App.css';
import Foto from '../src/assets/imagens/Perfil.png';
import insta from './assets/icones/insta.png';
import git from './assets/icones/git.png';
import ln from './assets/icones/ln.png';
import Projetos from './projetos/Projetos';
import Sobre from './sobre/Sobre';
import Curriculo from './curriculo/Curriculo';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Contato from './contato/Contato';
import Footer from './footer/Footer';




function App() {
  


 


  return (
    <Router>
      <div className="container">
        <div className="perfil">
          <img src={Foto} alt="Foto" className="img" />
          <h1 className="nome">Bruno Henrique</h1>
          <p className="profi">Desenvolvedor Front-end</p>

          <div className="icones">
            <a className='links' target="_blank" href="https://www.linkedin.com/in/bruno-rocha-ba6991240/">
            <img src={ln} alt="linkedin" className="icon" />
            </a>
            <a className='links' target="_blank" href="https://github.com/hbruunno">
            <img src={git} alt="GitHub" className="icon" />
            </a>
            <a className='links' target="_blank" href="https://www.instagram.com/hbruunno/">
            <img src={insta} alt="Instagram" className="icon" />
            </a>
          </div> 
          <a className='link' href="../src/arquivos/curriculo.pdf" download>
          <button className="botaoperfil">Baixar Currículo ⤓</button>
          </a>
        </div>

        <div className="conteudo">
          <Navigation />
          <div className="pagina">
            <Routes>
              <Route path="/" element={<Sobre />} />
              <Route path="/projetos" element={<Projetos />} />
              <Route path="/curriculo" element={<Curriculo />} />
              <Route path="/fale-comigo" element={<Contato/>} />
            </Routes>
          </div>
        </div>
        
      </div>
      <Footer/>
    </Router>
  );
}

function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();

  const ativo = (path) => {
    return location.pathname === path ? 'botaoativo' : 'botão';
  }


  return (
    <div className="navbar">
      <button className={`botao ${ativo('/')}`} onClick={() => navigate('/')}>
        Sobre mim
      </button>
      <button className={`botao ${ativo('/projetos')}`} onClick={() => navigate('/projetos')}>
        Projetos
      </button>
      <button className={`botao ${ativo('/curriculo')}`} onClick={() => navigate('/curriculo')}>
        Currículo
      </button>
      <button className={`botao ${ativo('/fale-comigo')}`} onClick={() => navigate('/fale-comigo')}>
        Fale comigo
      </button>
    </div>
  );
}

export default App;
