import './Home.css';
import Header from './Components/Header/';
import Sidenav from './Components/Sidenav/'

function Home() {
  return (
    <div>
      <Header />
      <Sidenav />
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className="above-header position-absolute">
          <h3 className="col-10 m-3">Soluções em Laudos e Vistorias Técnicas para a sua segurança.</h3>
          <button className="saiba-mais m-3">Saiba Mais</button>
        </div>
      </div>
      <div className="section1 container-fluid">
        <div className="container section1-content mt-5 p-5">
          <div className="section-text position-relative mt-5 pt-5 col-8">
            <h2 className="col-6">Uma empresa especializada em trazer segurança ao seu negócio.</h2>
            <p className="col-10">A SD Engenharia possui expertise em laudos e vistorias para diversos seguimentos como: Playgrounds, Sistemas de Exaustão para Cozinhas Profissionais, Projetos de Ar condicionado e Planos de PMOC, NR-11, NR-12, Laudos para Máquinas Pesadas e Perícias Judiciais além de Responsabilidade técnica para empresas de Desmonte.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;