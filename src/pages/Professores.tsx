import Home from "../component/Home"
import '../styles/home.css';
import FormProfessores from "../component/FormProfessores";
import ListProfessores from "../component/ListProfessores";
import { useStore } from "../store/state";


const Professores = () => {

  const admin = useStore((state) => state.admin)

  const logout = useStore((state) => state.logar)

  const user = useStore((state) => state.user)

  const userRs = (): boolean => {
    if(admin.length && admin[0].role === 'ADMIN' || user.length && user[0].role === 'DIR') {
      return true
    }else {
      return false
    }
  }


  return (
    <>
      <Home />
      <section className={`${logout && userRs() ? 'list-professor': 'logout'}`}>
        <FormProfessores />
        <ListProfessores />
      </section>
      <hr />
    </>
  )
}

export default Professores
