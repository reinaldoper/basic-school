
import Home from "../component/Home"
import ListAlunos from "../component/ListAlunos";
import FormAlunos from "../component/FormAlunos";
import { useState } from "react";
import '../styles/home.css';
import { useStore } from "../store/state";
import UpdateAlunos from "../component/UpdateAlunos";

const Alunos = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  
  const logout = useStore((state) => state.logar)

  const admin = useStore((state) => state.admin)

 

  const userRs = (): boolean => {
    if(admin.length && admin[0].role === 'ADMIN') {
      return true
    }else {
      return false
    }
  }


  return (
    <>
      <Home />
      {logout && userRs() ? <span className="update-toggle">
        <span>{!toggle ? 'Cadastrar aluno': 'Atualizar aluno'}</span>
        <label className="switch">
          <input type="checkbox" checked={toggle} onChange={e => setToggle(e.target.checked)} />
          <span className="slider round"></span>
        </label>
      </span>: null}
      
      <section className={`${logout && userRs() ? 'list-professor' : 'logout'}`}>
        { !toggle && logout && userRs() ?  <FormAlunos />: <UpdateAlunos /> }
        <ListAlunos />
      </section>
      <hr />
    </>
  )
}

export default Alunos
