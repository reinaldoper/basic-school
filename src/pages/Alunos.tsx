
import Home from "../component/Home"
import ListAlunos from "../component/lists/ListAlunos";
import FormAlunos from "../component/forms/FormAlunos";
import { useState } from "react";
import '../styles/home.css';
import UpdateAlunos from "../component/updates/UpdateAlunos";
import Stats from "../utils/Stats";

const Alunos = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const { logar, admin } = Stats();

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
      {logar && userRs() ? <span className="update-toggle">
        <span>{!toggle ? 'Cadastrar aluno': 'Atualizar aluno'}</span>
        <label className="switch">
          <input type="checkbox" checked={toggle} onChange={e => setToggle(e.target.checked)} />
          <span className="slider round"></span>
        </label>
      </span>: null}
      
      <section className={`${logar && userRs() ? 'list-professor' : 'logout'}`}>
        { !toggle && logar && userRs() ?  <FormAlunos />: <UpdateAlunos /> }
        <ListAlunos />
      </section>
      <hr />
    </>
  )
}

export default Alunos
