import Footer from "../component/Footer";
import Home from "../component/Home"
import ListAlunos from "../component/ListAlunos";
import FormAlunos from "../component/FormAlunos";
import '../styles/home.css';
import { useStore } from "../store/state";

const Alunos = () => {

  const logout = useStore((state) => state.logar)


  return (
    <>
      <Home />
      <section className={`${logout ? 'list-professor': 'logout'}`}>
        <FormAlunos />
        <ListAlunos />
      </section>
      <hr />
      <Footer />
    </>
  )
}

export default Alunos
