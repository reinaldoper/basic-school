import {  Routes, Route } from "react-router-dom";
import App from '../pages/App'
import Alunos from "../pages/Alunos";
import Professores from "../pages/Professores";
import Diretor from "../pages/Diretor";
import About from "../pages/About";
import LogiIn from "../pages/LogiIn";


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
      </Routes>
    </>
  )
}

export default Router;
