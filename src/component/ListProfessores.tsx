import { useStore } from "../store/state";

const ListProfessores = () => {
 

  const teacherResult = useStore((state) => state.disciplina)



  const listTeacher = teacherResult.map(teacher => (
    <ol key={teacher.id} id="w3-ul" className="w3-container w3-animate-top">
      <li>{teacher.nome}</li>
      <li id="list-between">{teacher.disciplina}</li>
      <li id='list-email'>{teacher.email}</li>
      <li>{teacher.createdAt ? new Date(teacher.createdAt).toLocaleDateString("pt-BR") : "Data indisponivel!"}</li>
    </ol>
  ));

  return (
    <>
      <div className="render-teacher">
        <h2 className="w3-cursive">Lista de professores:</h2>
        {listTeacher.length > 0 ? <>{listTeacher}</> : <div>Carregando...</div>}
      </div>
    </>
  )
}

export default ListProfessores
