import { useStore } from "../store/state";
import { useState } from "react";
import '../styles/home.css'

const ListProfessores = () => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedTeacherId, setSelectedTeacherId] = useState<number | null>(null);

  const teacherResult = useStore((state) => state.disciplina);

  const handleTeacherClick = (id: number) => {
    setIsOpen(true);
    setSelectedTeacherId(id);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedTeacherId(null);
  };

  const renderTeacherDetails = () => {
    if (selectedTeacherId !== null) {
      const result = teacherResult.find((teacher) => teacher.id === selectedTeacherId);

      return result?.alunos?.map((student) => (
        <ol id="w3-ul" className="w3-container w3-animate-top">
          <li id="teacher-name">{student.nome}</li>
          <li id="list-between">email: {student.email}</li>
          <li>
            <button type="button" className="fa fa-close search" onClick={closeModal}></button>
          </li>
        </ol>
      ));


    }
    return null;
  };

  const listTeacher = teacherResult.length && teacherResult.map((teacher) => (
    <ol key={teacher.id} id="w3-ul" className="w3-container w3-animate-top">
      <li id="teacher-name">{teacher.nome}</li>
      <li id="list-between">{teacher.disciplina}</li>
      <li id="list-email">{teacher.email}</li>
      <li>
        <button type="button" className="fa fa-search search" onClick={() => handleTeacherClick(teacher.id)}></button>
      </li>
    </ol>
  ));

  return (
    <>
      <div className="render-teacher">
        <h2 className="w3-cursive">{listTeacher && !modalIsOpen ? 'Lista de professores:' : 'Aluno(a):'}</h2>
        {listTeacher && !modalIsOpen ? <>{listTeacher}</> : <>{renderTeacherDetails()}</>}
      </div>
    </>
  );
};

export default ListProfessores;
