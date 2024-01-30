import { fetchAluno } from "../services/fetchApi"
import { useEffect } from "react"

import { useStore } from "../store/state";

const ListAlunos = () => {
  

  const list = useStore((state) => state.setAlunos)

  const listAluno = useStore((state) => state.aluno)

  useEffect(() => {
    const getAlunos = async () => {
      const headersGet: RequestInit = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }
      const listStudents = await fetchAluno(headersGet)
      
      list(listStudents.message)
    }
    getAlunos();
  }, [list]);


  const listAlunos = listAluno.map(aluno => (
    <ol key={aluno.id} id="w3-ul" className="w3-container w3-animate-top">
      <li>student: {aluno.nome}</li>
      <li id="list-between">teacher: {aluno.professor.nome}</li>
      <li id='list-email'>discipline: {aluno.professor.disciplina}</li>
    </ol>
  ));


  return (
    <>
      <div className="render-teacher">
        <h2 className="w3-cursive">Lista de alunos:</h2>
        {listAlunos.length > 0 ? <>{listAlunos}</> : <div>Carregando...</div>}
      </div>
    </>
  )
}

export default ListAlunos
