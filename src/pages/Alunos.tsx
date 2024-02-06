
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

  const user = useStore((state) => state.user)


  return (
    <>
      <Home />
      {logout && (admin.length | user.length) ? <span className="update-toggle">
        <span>{!toggle ? 'Cadastrar aluno': 'Atualizar aluno'}</span>
        <label className="switch">
          <input type="checkbox" checked={toggle} onChange={e => setToggle(e.target.checked)} />
          <span className="slider round"></span>
        </label>
      </span>: null}
      
      <section className={`${logout && (admin.length | user.length) ? 'list-professor' : 'logout'}`}>
        { !toggle && logout && (admin.length | user.length) ?  <FormAlunos />: <UpdateAlunos /> }
        <ListAlunos />
      </section>
      <hr />
    </>
  )
}

export default Alunos
