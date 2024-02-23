import Stats from '../utils/Stats';
import { DirSection } from "../sections/Sections";

const Salles = () => {

  const start = Stats()

  const { userLogedIn } = start;
  return (
    <>

      <div className='w3-container w3-animate-top about-we'>
        <DirSection />
        <span>
          {userLogedIn.length ? userLogedIn[0].nome : <p>Carregando...</p>}<br />
          <p>Todos os direitos reservados a &copy;Copyright</p>
        </span>
      </div>
    </>
  )
}

export default Salles
