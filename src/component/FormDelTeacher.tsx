import { useStore } from "../store/state"
import { useNavigate } from "react-router-dom"
import { fetchProfessor } from "../services/fetchApi";

const FormDelTeacher = () => {

  const navigate = useNavigate();

  const dir = useStore(state => state.dir)

  const teacher = useStore(state => state.disciplina)


  if (!dir) navigate('/');

  const handleClick = async (id: number) => {
    const headers: RequestInit = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    }
    const result = await fetchProfessor(headers, id)
    if(result) navigate('/');
  };

  const resultTeachers = teacher.length && teacher.length > 0 ? teacher.map(item => (
    <div id="teacher-del" className="w3-container w3-border w3-large" key={item.id}>
      <div className="w3-left-align"><p>{item.nome}</p></div>
      <div className="w3-right-align"><p>{item.disciplina}</p></div>
      <button id="button-del-teacher" className="fa fa-trash" onClick={() => handleClick(item.id)} type="button"></button>
    </div>
  )) : null;

  return (
    <>
      <div className="del-teacher">
        {resultTeachers ? resultTeachers : <div>No registered teacher.</div>}
      </div>
    </>
  )
}

export default FormDelTeacher
