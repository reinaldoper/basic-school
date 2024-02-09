import '../styles/home.css';
import school from '../assets/escola-2.webp'
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchDiretor, fetchProfessor, fetchAluno } from '../services/fetchApi';
import { useStore } from "../store/state";
import { User } from '../Types/TTypes';


const Home = () => {
  const [diretor, setDiretor] = useState<User[]>([]);

  const teacher = useStore((state) => state.setDisciplina)

  const admin = useStore((state) => state.admin)

  const setAdmin = useStore((state) => state.setAdmin)

  const logout = useStore((state) => state.resetLogar)

  const listAlunos = useStore((state) => state.setAlunos)

  const logar = useStore((state) => state.logar)

  const logUser = useStore((state) => state.logUser)

  const setUserLogar = useStore((state) => state.setUserLogar);

  const resetDiretor = useStore((state) => state.resetDiretor);

  const dir = useStore((state) => state.dir)

  useEffect(() => {
    const all = async () => {
      const headers: RequestInit = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }
      const result = await fetchDiretor(headers, null);
      setDiretor(result.message);


      const list = await fetchProfessor(headers);
      teacher(list.message)
    };
    all();
  }, [teacher]);


  useEffect(() => {
    const student = async () => {
      const headers: RequestInit = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }

      const listStudents = await fetchAluno(headers)
      listAlunos(listStudents.message)
    };
    student();

  }, [listAlunos])

  const add = useStore((state) => state.setAddUser);
  add(diretor);



  const navigate = useNavigate();
  const location = useLocation();

  const local = location.pathname;


  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const name = event.currentTarget.name;

    switch (name) {
      case "/":
        router(name)
        break;
      case "/students":
        router(name)
        break;
      case "/teacher":
        router(name)
        break;
      case "/manager":
        router(name)
        break;
      case "/about":
        router(name)
        break;
      case "/login":
        router(name)
        break;
      case "/notes":
        router(name)
        break;
      case "/library":
        router(name)
        break;
      case "/teacher/del":
        router(name)
        break;

      default:
        break;
    }
  };
  
  const router = (url: string) => {
    navigate(url);
  };

  const handleLogar = () => {
    logout();
    setUserLogar();
    resetDiretor();
    setAdmin([]);
  };

  const userLogedIn = useStore((state) => state.user);

  const logarUser = useStore((state) => state.userLogar);

  

  return (
    <>
      <div className='w3-container w3-teal header'>
        <div className='logo'>
          <img src={school} title='A escola do futuro' alt="Image school" />
        </div>
        <h1>Basic school</h1>
      </div>
      <div className='container-home'>
        <div className='w3-container w3-white'>
          <button type="button" name='/' className={`w3-button w3-large fa fa-home ${local === '/' ? 'active' : null}`} onClick={handleClick}>Inicio</button>
          <button type="button" name='/students' className={`w3-button ${local === '/students' ? 'active' : null}`} onClick={handleClick}>Listar alunos</button>
          <button type="button" name='/teacher' className={`w3-button ${local === '/teacher' ? 'active' : null}`} onClick={handleClick}>Professores</button>
          <button type="button" name='/manager' className={`w3-button ${local === '/manager' ? 'active' : null}`} onClick={handleClick}>Diretor</button>
          <button type="button" name='/about' className={`w3-button ${local === '/about' ? 'active' : null}`} onClick={handleClick}>Sobre nós</button>
          <button type="button" name='/library' className={`w3-button ${local === '/library' ? 'active' : null}`} onClick={handleClick}>Livraria</button>
          {admin.length && logar && admin[0].role === 'ADMIN' ? <button type="button" name='/notes' className={`w3-button ${local === '/notes' ? 'active' : null}`} onClick={handleClick}>Notas</button>
            : null}
          {!logar && logarUser ? <button type="button" name='/login' className={`w3-button ${local === '/login' ? 'active' : null}`} onClick={handleClick}>Login</button>
            : null}
          <button type="button" className='w3-button' onClick={handleLogar}>Logout</button>
          { dir && <button type="button" name='/teacher/del' className={`w3-button ${local === '/teacher/del' ? 'active' : null}`} onClick={handleClick}>DelTeacher</button>}
          <li className="w3-large"><i className="fa fa-user"></i> {admin.length && logar ? admin[0].nome : logUser.length && !logar && !logarUser ? logUser[0].nome : userLogedIn.length && logar ? userLogedIn[0].nome : 'user-login'}</li>
        </div>
      </div>

    </>
  )
}

export default Home
