import './curriculo.css';

export default function Curriculo() {
  const softs = [
    {id: 1, nome: 'Proatividade'},
    {id: 2, nome: 'Comunicação'},
    {id: 3, nome: 'Agilidade'}
  ]

  const hards = [
    {id: 1, nome: 'HTML'},
    {id: 2, nome: 'CSS'},
    {id: 3, nome: 'JavaScript'},
    {id: 4, nome: 'React'},
    {id: 5, nome: 'ReactNative'},
    {id: 6, nome: 'Node.js'},
    {id: 7, nome: 'Bootstrap'},
    {id: 8, nome: 'Git'},
    {id: 9, nome: 'SQL'}
  ]


  return(
    <div className="ccontainer">
      <h1 className="ctitulo">Formação Acadêmica</h1>
      <h2 className="csubtitulo">Sistemas de Informação - Bacharel</h2> 
      <p className="cperiodo">2020 - 2024</p>    

      <h1 className="ctitulo">Experiência Profissional</h1>

      <h2 className="csubtitulo">Monitor de Arquitetura e Organização de Computadores</h2>
      <p className="cinfo">3 vezes monitor, no qual participei do SIM-UFAL e fui reconhecido com um certificado de excelência acadêmica.</p>
      <p className="cperiodo">Periodo de 4 meses por monitoria, total 12 meses</p>

      <h2 className="csubtitulo">Monitor de Banco de dados 1 e 2</h2> 
      <p className="cinfo"> Modelagem de dados, normalização e gestão de SGBDs (como MySQL) criação, manipulação, entidade e relacionamento.</p>
      <p className="cperiodo">Periodo de 4 meses B1 e 4 meses B2</p>

      <h2 className="csubtitulo">Monitor de Metodologia da Pesquisa Cientifica</h2>
      <p className="cinfo">Abordando conjunto de técnicas e procedimentos utilizados para investigar um problema de forma sistemática e objetiva.</p>
      <p className="cperiodo">Periodo de 4 meses</p>

      <h1 className="ctitulo">Competências e Habilidades</h1>
      <h2 className="csubtitulo">Soft Skills</h2> 
      <div className="chabilidades">
        <div className="chabilidade">
          {softs.map((soft) =>(
            <button className="soft" key={soft.id}> {soft.nome}</button>
            ))}
        </div>
      </div>


      <h2 className="csubtitulo">Hard Skills</h2> 
      <div className="chabilidades">
        <div className="chabilidade">
          {hards.map((hard) => (
            <button className="hard" key={hard.id}> {hard.nome} </button>
            ))}
        </div>
      </div>
    </div>
  )
} 