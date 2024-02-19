import Stats from "../../utils/Stats"
import { useState } from "react";
import Pagination from 'react-js-pagination';

const StudentsNotes = () => {

  const { listAluno } = Stats();

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

  const listNotesStudent = listAluno.length && paginatedData.map(aluno => (
    <ol key={aluno.id} id="w3-ul" className="w3-container w3-animate-top">
      <li>student: {aluno.nome}</li>
      <li id="list-between">teacher: {aluno.professor !== null ? aluno.professor.nome : null}</li>
      <li id='list-email'>discipline: {aluno.professor !== null ? aluno.professor.disciplina : null}</li>
      <li>
        Nota: {aluno.notas && aluno.notas.reduce((acc, dcc) => Number(acc) + Number(dcc.valor), 0)}
      </li>
    </ol>
  ));

  return (
    <div style={{maxWidth: "50%", margin: 'auto'}}>
      {listNotesStudent}
      {totalItemsCount > itemsPerPage ?
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
  )
}

export default StudentsNotes
