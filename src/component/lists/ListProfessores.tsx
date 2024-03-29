import { useState } from "react";
import '../../styles/home.css'
import Pagination from 'react-js-pagination';
import Stats from "../../utils/Stats";


const ListProfessores = () => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedTeacherId, setSelectedTeacherId] = useState<number | null>(null);
  const [render, setRender] = useState<boolean>(false);

  const { teacherDiscipline } = Stats();

  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 4;
  const totalItemsCount = teacherDiscipline.length;
  const pageRangeDisplayed = 2;



  const handlePageChange = (pageNumber: number) => {
    setActivePage(pageNumber);
  };

  const sortedData = teacherDiscipline.sort((a, b) =>
    a.nome.toLowerCase().localeCompare(b.nome.toLowerCase())
  );

  const paginatedData = sortedData.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );

  const handleTeacherClick = (id: number) => {
    setRender(true);
    setIsOpen(true);
    setSelectedTeacherId(id);
  };

  const closeModal = () => {
    setRender(false);
    setIsOpen(false);
    setSelectedTeacherId(null);
  };

  const renderTeacherDetails = () => {
    if (selectedTeacherId !== null) {
      const result = paginatedData.find((teacher) => teacher.id === selectedTeacherId);

      // Verifique se há estudantes relacionados ao professor
      if (result?.alunos && result.alunos.length > 0) {
        return result.alunos.map((student) => (
          <ol id="w3-ul" className="w3-container w3-animate-top" key={student.id}>
            <li id="teacher-name">{student.nome}</li>
            <li id="list-between">email: {student.email}</li>
            <li>
              <button type="button" className="fa fa-close search" onClick={closeModal}></button>
            </li>
          </ol>
        ));
      }
    }

    return (
      <ol id="w3-ul" className="w3-container w3-animate-top">
        <li id="list-between">Não há alunos cadastrados.</li>
        <li>
          <button type="button" className="fa fa-close search" onClick={closeModal}></button>
        </li>
      </ol>
    );
  };


  const listTeacher = paginatedData.length && paginatedData.map((teacher) => (
    <ol key={teacher.id} id="w3-ul" className="w3-container w3-animate-top">
      <li id="teacher-name">Prf(a): {teacher.nome}</li>
      <li id="list-between">Disciplina: {teacher.disciplina}</li>

      <li>
        <button type="button" className="fa fa-search search" onClick={() => handleTeacherClick(teacher.id)}></button>
      </li>
    </ol>
  ));

  return (
    <>
      <div className="render-teacher">
        <h2 className="w3-cursive">{listTeacher && !modalIsOpen ? 'Lista de professores:' : 'Aluno(a)s:'}</h2>
        {listTeacher && !modalIsOpen ? <>{listTeacher}</> : <>{renderTeacherDetails()}</>}
        {teacherDiscipline.length === 0 && <h1>Carregando...</h1>}
        {totalItemsCount > itemsPerPage && !render ?
          <div className="pagination">
            <Pagination
              itemClass='pagination'
              activePage={activePage}
              itemsCountPerPage={itemsPerPage}
              totalItemsCount={totalItemsCount}
              pageRangeDisplayed={pageRangeDisplayed}
              onChange={handlePageChange}
            />

          </div> : null}
      </div>
    </>
  );
};

export default ListProfessores;
