import Notas from "../component/Notas"
import Home from "../component/Home";
import { useNavigate } from 'react-router-dom';
import { useStore } from "../store/state";



const Notes = () => {

  const location = useNavigate();

  const logar = useStore((state) => state.logar)

  if (!logar) location('/');

  return (
    <>
      <Home />
      <Notas />
    </>
  )
}

export default Notes
