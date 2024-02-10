import { useStore } from "../store/state"
import { useNavigate } from "react-router-dom"

const FormDelTeacher = () => {
  const navigate = useNavigate();

  const dir = useStore(state => state.dir)

  if(!dir) navigate('/');

  return (
    <>
      <h1>Teacher</h1>
    </>
  )
}

export default FormDelTeacher
