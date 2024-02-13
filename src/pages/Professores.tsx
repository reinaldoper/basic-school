import Home from "../component/Home"
import '../styles/home.css';
import FormProfessores from "../component/forms/FormProfessores";
import ListProfessores from "../component/lists/ListProfessores";
import { useStore } from "../store/state";


const Professores = () => {


  const logout = useStore((state) => state.logar)


  const dir = useStore((state) => state.dir)


  return (
    <>
      <Home />
      <section className={`${logout && dir ? 'list-professor': 'logout'}`}>
        <FormProfessores />
        <ListProfessores />
      </section>
      <hr />
    </>
  )
}

export default Professores
