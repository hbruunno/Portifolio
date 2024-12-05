import './styles.css';
import html from '../assets/icones/html.png';
import css from '../assets/icones/css.png';
import js from '../assets/icones/js.png';
import rea from '../assets/icones/react.png'
import nod from '../assets/icones/node.png'
import jav from '../assets/icones/java.png'

import fit from '../assets/imagens/fit.jpg';
import gerador from '../assets/imagens/gerador.jpg'
import fitapp from '../assets/imagens/fitapp.jpg';
import devbot from '../assets/imagens/devbot.jpg';
import quiz from '../assets/imagens/quiz.jpg';
import supe from '../assets/imagens/super.jpg';


export default function Projetos() {
  const projetos = [
    { id: 1, title: 'FitLife App', description: 'Aplicativo para gestão de alunos em academia', img: fitapp, icons: [html, css, js, rea, nod] },
    { id: 2, title: 'Quiz', description: 'Jogo de perguntas', img: quiz, icons: [html, css, js, rea, nod] },   
    { id: 3, title: 'DevBot', description: 'Troca de mensagens com IA, usando api da OpenIA', img: devbot, icons: [html, css, js] },
    { id: 4, title: 'Gerador de Senha', description: 'criador de senhas aleatorias', img: gerador, icons: [html, css, js] },
    { id: 5, title: 'FitLife web', description: 'Site para gestão de alunos em academia', img: fit, icons: [css, jav, nod] },
    { id: 6, title: 'Super Man', description: 'utilizando o CSS para causar efeito flutuante', img: supe, icons: [html, css] },
  ];

  return (
    <div className="projetos">
      {projetos.map((projeto) => (
        <div className="card" key={projeto.id}>
          <img src={projeto.img} alt={`Imagem do ${projeto.title}`} className="imgprojeto" />
          <div className="overlay">
            <h2 className='projetotitulo'>{projeto.title}</h2>
            <p className='projetop'>{projeto.description}</p>
            <div className="cardicons">
            {/* <p className="projetop">Tecnologias:</p> */}
              {projeto.icons.map((icon, index) => (
                
                <img key={index} src={icon} alt={`Ícone ${index + 1}`} className="cardicon" />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
