import '../styles/home.css'
import { useStore } from "../store/state";
import { AboutSections } from '../sections/Sections';

const AboutWe = () => {

  const diretor = useStore((state) => state.user)

  console.log(diretor);
  

  return (
    <>
      <p className='w3-container w3-animate-top about-we'>
        <AboutSections />
        <span>
          {diretor.length ? diretor[0].nome : <p>Carregando...</p>}<br />
          Diretor da Escola Basic School
          <p>Todos os direitos reservados a &copy;Copyright</p>
        </span>
      </p>

    </>
  )
}

export default AboutWe
