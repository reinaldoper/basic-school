import '../styles/home.css';
import school from '../assets/escola-2.webp'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchDiretor, fetchProfessor, fetchAluno } from '../services/fetchApi';
import { useStore } from "../store/state";
import { User } from '../Types/TTypes';
import Button from './Button';
import ButtonHome from './ButtonHome';
import Navbar from './Navbar';


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


      const list = await fetchProfessor(headers, null);
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


  const location = useLocation();

  const local = location.pathname;

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
        <Navbar>
          <div className='w3-container w3-white'>
            <ButtonHome local={local} variable='/' name='Home' />
            <Button local={local} variable='/students' name='Listar alunos' />
            <Button local={local} variable='/teacher' name='Professores' />
            <Button local={local} variable='/manager' name='Diretor' />
            <Button local={local} variable='/about' name='Sobre nós' />
            <Button local={local} variable='/library' name='Livraria' />
            {admin.length && logar && admin[0].role === 'ADMIN' ? <Button local={local} variable='/notes' name='Notas' />
              : null}
            {!logar && logarUser ? <Button local={local} variable='/login' name='Login' />
              : null}
            <button type="button" className='w3-button' onClick={handleLogar}>Logout</button>
            {dir && <Button local={local} variable='/teacher/del' name='DelTeacher' />}
            <li className="w3-large"><i className="fa fa-user"></i> {admin.length && logar ? admin[0].nome : logUser.length && !logar && !logarUser ? logUser[0].nome : userLogedIn.length && logar ? userLogedIn[0].nome : 'user-login'}</li>
          </div>
        </Navbar>
      </div>

    </>
  )
}

export default Home
