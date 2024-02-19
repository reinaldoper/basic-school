import '../styles/home.css';
import school from '../assets/escola-2.webp'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchDiretor, fetchProfessor, fetchAluno } from '../services/fetchApi';
import { User } from '../Types/TTypes';
import Button from '../buttons/Button';
import ButtonHome from '../buttons/ButtonHome';
import Navbar from './Navbar';
import Stats from '../utils/Stats';

const Home = () => {
  const [diretor, setDiretor] = useState<User[]>([]);

  const { dir,
    resetDiretor,
    setAdmin,
    setUserLogar,
    logUser,
    logar,
    admin,
    listAlunos,
    logout,
    teacher,
    add,
    logarUser,
    userLogedIn,
    studentLogar,
    resetStudentLogar } = Stats();

  useEffect(() => {
    const all = async () => {
      const headers: RequestInit = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }
      const { message } = await fetchDiretor(headers, null);
      setDiretor(message);
    };

    const response = async () => {
      const headers: RequestInit = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }
      const { message } = await fetchProfessor(headers, null);
      teacher(message)
    }
    all();
    response();
  }, [teacher]);


  useEffect(() => {
    const student = async () => {
      const headers: RequestInit = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }

      const { message } = await fetchAluno(headers)

      listAlunos(message)
    };
    student();

  }, [listAlunos])

  add(diretor);


  const location = useLocation();

  const local = location.pathname;

  const handleLogar = () => {
    logout();
    setUserLogar();
    resetStudentLogar();
    resetDiretor();
    setAdmin([]);
  };


  return (
    <>
      <div className='w3-container w3-teal header'>
        <div className='logo'>
          <img src={school} title='A escola do futuro' alt="Image school" />
        </div>
        <h1>Basic school</h1>
      </div>
      <div className='container-home'>
        {logar &&
          <Navbar>
            <div className='w3-container w3-white'>
              <ButtonHome local={local} variable='/' name='Home' />
              <Button local={local} variable='/student/notes' name='Notas-alunos' />
              <Button local={local} variable='/students' name='Listar alunos' />
              <Button local={local} variable='/teacher' name='Professores' />
              <Button local={local} variable='/manager' name='Diretor' />
              <Button local={local} variable='/about' name='Sobre nós' />
              <Button local={local} variable='/library' name='Livraria' />
              {admin.length && logar && admin[0].role === 'ADMIN' ? <Button local={local} variable='/notes' name='Notas' />
                : null}
              {!logar && logarUser ? <Button local={local} variable='/login' name='Login' />
                : <button type="button" className='w3-button' onClick={handleLogar}>Logout</button>}
              {dir && <Button local={local} variable='/teacher/del' name='DelTeacher' />}
              <li className="w3-large"><i className="fa fa-user"></i> {admin.length && logar ? admin[0].nome : logUser.length && !logar && !logarUser ? logUser[0].nome : userLogedIn.length && logar ? userLogedIn[0].nome : 'user-login'}</li>
            </div>
          </Navbar>}
        {!logar && !studentLogar &&
          <Navbar>
            <div className='w3-container w3-white'>
              <ButtonHome local={local} variable='/' name='Home' />
              <Button local={local} variable='/manager' name='Diretor' />
              <Button local={local} variable='/about' name='Sobre nós' />
              <Button local={local} variable='/library' name='Livraria' />
              {admin.length && logar && admin[0].role === 'ADMIN' ? <Button local={local} variable='/notes' name='Notas' />
                : null}
              {!logar && logarUser ? <Button local={local} variable='/login' name='Login' />
                : <button type="button" className='w3-button' onClick={handleLogar}>Logout</button>}
              {dir && <Button local={local} variable='/teacher/del' name='DelTeacher' />}
              <li className="w3-large"><i className="fa fa-user"></i> {admin.length && logar ? admin[0].nome : logUser.length && !logar && !logarUser ? logUser[0].nome : userLogedIn.length && logar ? userLogedIn[0].nome : 'user-login'}</li>
            </div>
          </Navbar>}
        {studentLogar &&
          <Navbar>
            <div className='w3-container w3-white'>
              <ButtonHome local={local} variable='/' name='Home' />
              <Button local={local} variable='/student/notes' name='Notas-alunos' />
              <Button local={local} variable='/manager' name='Diretor' />
              <Button local={local} variable='/about' name='Sobre nós' />
              <Button local={local} variable='/library' name='Livraria' />
              <button type="button" className='w3-button' onClick={handleLogar}>Logout</button>
              <li className="w3-large"><i className="fa fa-user"></i> {admin.length && logar ? admin[0].nome : logUser.length && !logar && !logarUser ? logUser[0].nome : userLogedIn.length && logar ? userLogedIn[0].nome : 'user-login'}</li>
            </div>
          </Navbar>}
      </div>

    </>
  )
}

export default Home
