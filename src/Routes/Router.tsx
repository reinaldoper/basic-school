import {  Routes, Route } from "react-router-dom";
import App from '../pages/App'
import Alunos from "../pages/Alunos";
import Professores from "../pages/Professores";
import Diretor from "../pages/Diretor";
import About from "../pages/About";
import LogiIn from "../pages/LogiIn";
import Notes from "../pages/Notes";
import Library from "../pages/Library";
import DeleteTeacher from "../pages/DeleteTeacher";


const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LogiIn />} />
        <Route path="/students" element={<Alunos />} />
        <Route path="/teacher" element={<Professores />} />
        <Route path="/manager" element={<Diretor />} />
        <Route path="/about" element={<About />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/library" element={<Library />} />
        <Route path="/teacher/del" element={<DeleteTeacher />} />
      </Routes>
    </>
  )
}

export default Router;
