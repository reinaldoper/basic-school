import { useState } from "react";
import { useStore } from "../store/state";

const ListAlunos = () => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedStudentId, setSelectedStudentId] = useState<number | null>(null);

  const listAluno = useStore((state) => state.aluno)


  const handleStudentClick = (id: number) => {

    setIsOpen(true);
    setSelectedStudentId(id);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedStudentId(null);
  };

  const renderStudentDetails = () => {
    if (selectedStudentId !== null) {
      const result = listAluno.find((student) => student.id === selectedStudentId);

      return result?.notas?.map((aluno) => (
        <ol id="w3-ul" className="w3-container w3-animate-top">
          <li id="teacher-name">{aluno.id}</li>
          <li id="list-between">email: {aluno.valor}</li>
          <li>
            <button type="button" className="fa fa-close search" onClick={closeModal}></button>
          </li>
        </ol>
      ));


    }
    return null;


  };


  const listAlunos = listAluno.length && listAluno.map(aluno => (
    <ol key={aluno.id} id="w3-ul" className="w3-container w3-animate-top">
      <li>student: {aluno.nome}</li>
      <li id="list-between">teacher: {aluno.professor.nome}</li>
      <li id='list-email'>discipline: {aluno.professor.disciplina}</li>
      <li>
        <button type="button" className="fa fa-search search" onClick={() => handleStudentClick(aluno.id)}></button>
      </li>
    </ol>
  ));


  return (
    <>
      <div className="render-teacher">
        <h2 className="w3-cursive">{listAluno && !modalIsOpen ? 'Lista de alunos:' : 'Aluno(a):'}</h2>
        {listAlunos && !modalIsOpen ? <>{listAlunos}</> : <>{renderStudentDetails()}</>}
      </div>
    </>
  )
}

export default ListAlunos
