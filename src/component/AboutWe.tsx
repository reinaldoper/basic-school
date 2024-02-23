import '../styles/home.css'
import { AboutSections } from '../sections/Sections';
import Stats from '../utils/Stats';

const AboutWe = () => {

  const start = Stats()

  const { userLogedIn } = start;

  return (
    <>
      <p className='w3-container w3-animate-top about-we'>
        <AboutSections />
        <span>
          {userLogedIn.length ? userLogedIn[0].nome : <p>Carregando...</p>}<br />
          Diretor da Escola Basic School
          <p>Todos os direitos reservados a &copy;Copyright</p>
        </span>
      </p>

    </>
  )
}

export default AboutWe
