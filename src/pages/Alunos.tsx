
import Home from "../component/Home"
import ListAlunos from "../component/ListAlunos";
import FormAlunos from "../component/FormAlunos";
import '../styles/home.css';
import { useStore } from "../store/state";

const Alunos = () => {

  const logout = useStore((state) => state.logar)

  const admin = useStore((state) => state.admin)


  return (
    <>
      <Home />
      <section className={`${logout && (admin.length && admin[0].role === 'ADMIN') ? 'list-professor': 'logout'}`}>
        <FormAlunos />
        <ListAlunos />
      </section>
      <hr />
    </>
  )
}

export default Alunos
