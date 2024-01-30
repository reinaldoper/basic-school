import { fetchAluno } from "../services/fetchApi"
import { useEffect, useState } from "react"
import { Aluno } from "../Types/TTypes";

const ListAlunos = () => {
  const [alunos, setAlunos] = useState<Aluno[]>([]);


  useEffect(() => {
    const getAlunos = async () => {
      const headersGet: RequestInit = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }
      const listStudents = await fetchAluno(headersGet)
      setAlunos(listStudents.message)
    }
    getAlunos();
  }, []);

  const listAlunos = alunos.map(aluno => (
    <ol key={aluno.id} id="w3-ul" className="w3-container w3-animate-top">
      <li>aluno: {aluno.nome}</li>
      <li id="list-between">teacher: {aluno.professor.nome}</li>
      <li id='list-email'>disciplina: {aluno.professor.disciplina}</li>
      <li>data-matricula: {aluno.createdAt ? new Date(aluno.createdAt).toLocaleDateString("pt-BR") : "Data indisponivel!"}</li>
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
