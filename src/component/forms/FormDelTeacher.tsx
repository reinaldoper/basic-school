import { useNavigate } from "react-router-dom"
import { fetchProfessor } from "../../services/fetchApi";
import { useState } from "react";
import Stats from "../../utils/Stats";

const FormDelTeacher = () => {
  const [error, setError] = useState<string>('')

  const navigate = useNavigate();

  const { dir, teacherDiscipline } = Stats();


  if (!dir) navigate('/');

  const handleClick = async (id: number) => {
    
    const headers: RequestInit = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    }
    const { error, message } = await fetchProfessor(headers, id)
    if(message) navigate('/');
    if(error) setError(error);
  };

  const alert = () => {
    return (
      <div className="w3-panel w3-yellow">
        <h3>Warning!</h3>
        <p>{error}</p>
      </div>
    )
  }

  const resultTeachers = teacherDiscipline.length && teacherDiscipline.length > 0 ? teacherDiscipline.map(item => (
    <div id="teacher-del" className="w3-container w3-border w3-large" key={item.id}>
      <div className="w3-left-align"><p>{item.nome}</p></div>
      <div className="w3-right-align"><p>{item.disciplina}</p></div>
      <button data-testid='button-del' id="button-del-teacher" className="fa fa-trash" onClick={() => handleClick(item.id)} type="button"></button>
    </div>
  )) : null;

  return (
    <>
      <div className="del-teacher">
        {error.length ? alert() : null}
        {resultTeachers ? resultTeachers : <h1>No registered teacher.</h1>}
      </div>
    </>
  )
}

export default FormDelTeacher
