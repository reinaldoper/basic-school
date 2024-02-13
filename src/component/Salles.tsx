import { useStore } from "../store/state";
import { DirSection } from "../sections/Sections";

const Salles = () => {

  const diretor = useStore((state) => state.user)
  return (
    <>

      <div className='w3-container w3-animate-top about-we'>
        <DirSection />
        <span>
          {diretor.length ? diretor[0].nome : <p>Carregando...</p>}<br />
          <p>Todos os direitos reservados a &copy;Copyright</p>
        </span>
      </div>
    </>
  )
}

export default Salles
