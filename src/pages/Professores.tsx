import Home from "../component/Home"
import '../styles/home.css';
import FormProfessores from "../component/FormProfessores";
import ListProfessores from "../component/ListProfessores";
import Footer from "../component/Footer";
import { useStore } from "../store/state";


const Professores = () => {

  const logout = useStore((state) => state.logar)
  return (
    <>
      <Home />
      <section className={`${logout ? 'list-professor': 'logout'}`}>
        <FormProfessores />
        <ListProfessores />
      </section>
      <hr />
      <Footer />
    </>
  )
}

export default Professores
