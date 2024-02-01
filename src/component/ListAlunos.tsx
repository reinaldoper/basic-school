import { useStore } from "../store/state";

const ListAlunos = () => {

  const listAluno = useStore((state) => state.aluno)


  const listAlunos = listAluno.length && listAluno.map(aluno => (
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
        {listAlunos ? <>{listAlunos}</> : <div>Carregando...</div>}
      </div>
    </>
  )
}

export default ListAlunos
