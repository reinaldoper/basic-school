import { useState } from "react";
import Pagination from 'react-js-pagination';
import Stats from "../../utils/Stats";
import { useNavigate } from 'react-router-dom';


const ListAlunos = () => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedStudentId, setSelectedStudentId] = useState<number | null>(null);
  const [render, setRender] = useState<boolean>(false);

  const navigate = useNavigate()

  const { listAluno, logar } = Stats();
  
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 4;
  const totalItemsCount = listAluno.length;
  const pageRangeDisplayed = 2;



  const handlePageChange = (pageNumber: number) => {
    setActivePage(pageNumber);
  };

  const sortedData = listAluno.sort((a, b) =>
    a.nome.toLowerCase().localeCompare(b.nome.toLowerCase())
  );

  const paginatedData = sortedData.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );


  const handleStudentClick = (id: number) => {
    setRender(true);
    setIsOpen(true);
    setSelectedStudentId(id);
  };

  const closeModal = () => {
    setRender(false);
    setIsOpen(false);
    setSelectedStudentId(null);
  };

  const delStudent = (id: number) => {
    navigate('/student/del/' + id);
  };

  const renderStudentDetails = () => {
    if (selectedStudentId !== null) {
      const result = paginatedData.find((student) => student.id === selectedStudentId);

      return result?.notas?.map((aluno) => (
        <ol id="w3-ul" className="w3-container w3-animate-top">
          <li id="list-between">Semestre: {aluno.semestre === null ? null : aluno.semestre}</li>
          <li id="list-between">Nota: {aluno.valor}</li>
          <li>
            {logar && <button type="button" className="fa fa-trash close" onClick={() => delStudent(result.id)}></button>}
            <button type="button" className="fa fa-close search" onClick={closeModal}></button>
          </li>
        </ol>
      ));


    }
    return null;


  };


  const listAlunos = paginatedData.length && paginatedData.map(aluno => (
    <ol key={aluno.id} id="w3-ul" className="w3-container w3-animate-top">
      <li>student: {aluno.nome}</li>
      <li id="list-between">teacher: {aluno.professor !== null ? aluno.professor.nome : null}</li>
      <li id='list-email'>discipline: {aluno.professor !== null ? aluno.professor.disciplina : null}</li>
      <li>
        <button type="button" className="fa fa-search search" onClick={() => handleStudentClick(aluno.id)}></button>
      </li>
    </ol>
  ));


  return (
    <>
      <div className="render-teacher">
        <h2 className="w3-cursive">{listAluno && !modalIsOpen ? 'Lista de alunos:' : renderStudentDetails()?.length ? 'Aluno(a):' :
          <button type="button" className="fa fa-close" onClick={closeModal}></button>
        }</h2>
        {listAlunos && !modalIsOpen ? <>{listAlunos}</> : <>{renderStudentDetails()}</>}
        {listAluno.length === 0 && <h1>Carregando...</h1>}
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
  )
}

export default ListAlunos
