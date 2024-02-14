import ButtonForm from "../../buttons/ButtonForm";
import { fetchAlunoId } from "../../services/fetchApi";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Aluno } from "../../Types/TTypes";
import Stats from "../../utils/Stats";
import '../../styles/home.css'


const FormDelStudent = () => {
  const [student, setStudent] = useState<Aluno>()

  const { admin } = Stats();


  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const result = async () => {
      const headers: RequestInit = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }
      const { error, message } = await fetchAlunoId(headers, Number(id))
      if (error) alert(error)
      if (message) setStudent(message)
    }
    result()
  }, [id])

  const resultStudent = student &&  admin.find(teacher => teacher.nome === student?.professor.nome)
  if(!resultStudent) navigate('/')
  
  

  const handleStudentClick = async () => {
    const headers: RequestInit = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    }
    const { error, message } = await fetchAlunoId(headers, Number(id))
    if (error) {
      alert(error)
      navigate('/')
    }
    if (message) {
      alert(message)
      navigate('/')
    }

  }

  const returnHome = () => {
    navigate('/');
  }

  return (
    <>
      {student ? <div className="w3-card-4 del-student">

        <header className="w3-container">
          <p>{student.email?.toLowerCase()}</p>
        </header>

        <div className="w3-container">
          <p>{student.professor.disciplina}</p>
        </div>

        <div className="w3-container">
          <p>{student.createdAt && new Date(student.createdAt).toLocaleDateString('pt-BR')}</p>
        </div>
        <footer className="w3-container">
          <ButtonForm onClick={handleStudentClick} name="DELETE" />
          <ButtonForm onClick={returnHome} name="CANCEL" />
        </footer>

      </div> : <h1 style={{ display: 'flex', justifyContent: 'center', margin: 'auto'}}>Carregando...</h1>}
    </>
  )
}

export default FormDelStudent
