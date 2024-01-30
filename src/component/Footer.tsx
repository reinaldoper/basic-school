import livros from '../assets/livros.jpg';
import homem from '../assets/homem.jpg';


const Footer = () => {
  return (
    <>
      <section id="professional-challenges">
        <h2>Venha fazer parte do nosso mundo.</h2>
        <img src={ homem } 
        title="Homem lendo em um tablet" alt="Homem lendo" />
        <p>
          Junte-se a nós. Aqui você encontra os melhores professores, os melhores livros,
          salas de aula dotadas com a mais alta tecnologia do momento.
          Livraria digital bem atualizada e com os melhores acervos do mundo.
        </p>
      </section>
      <footer className="w3-container w3-teal footer-div">
        <img className="logo" src={livros}
          title="Logotipo"
          alt="Logotipo" />
        <p>Acesse <a className="footer-a" href="https://github.com/reinaldoper">o meu</a> portfolio.</p>
        <p>Todos os direitos reservados a &copy;Copyright</p>
      </footer>
    </>

  )
}

export default Footer;
