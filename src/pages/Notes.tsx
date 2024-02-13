import Notas from "../component/Notas"
import Home from "../component/Home";
import { useNavigate } from 'react-router-dom';
import { useStore } from "../store/state";
import { useState } from "react";
import '../styles/home.css'
import UpdateNotas from "../component/updates/UpdateNotas";



const Notes = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const location = useNavigate();

  const logar = useStore((state) => state.logar)

  if (!logar) location('/');

  return (
    <>
      <Home />
      <span className="update-toggle">
        <span>{!toggle ? 'Cadastrar nota' : 'Atualizar nota'}</span>
        <label className="switch">
          <input type="checkbox" checked={toggle} onChange={e => setToggle(e.target.checked)} />
          <span className="slider round"></span>
        </label>
      </span>
      {!toggle ? <Notas /> : <UpdateNotas />}
      <hr />
    </>
  )
}

export default Notes
