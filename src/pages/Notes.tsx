import Notas from "../component/Notas"
import { useNavigate } from 'react-router-dom';
import { useStore } from "../store/state";



const Notes = () => {

  const location = useNavigate();

  const logar = useStore((state) => state.logar)

  if(!logar) location('/');

  return (
    <div>
      <Notas />
    </div>
  )
}

export default Notes
