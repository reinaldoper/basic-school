import '../styles/home.css';
import school from '../assets/escola-2.webp'
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchDiretor } from '../services/fetchApi';
import { useStore } from "../store/state";

const Home = () => {
  const [diretor, setDiretor] = useState<string>('');

  useEffect(() => {
    const diretor = async () => {
      const result = await fetchDiretor();
      setDiretor(result.message[0].nome);
    };
    diretor();
  }, []);

  const add = useStore((state) => state.setAdd);
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

      default:
        break;
    }
  };

  const router = (url: string) => {
    navigate(url);
  };



  return (
    <>
      <div className='w3-container w3-teal header'>
        <div className='logo'>
          <img src={school} title='A escola do futuro' alt="Image school" />
        </div>
        <h1>Basic school</h1>
      </div>
      <div className='w3-container w3-white'>
        <button type="button" name='/' className={`w3-button ${local === '/' ? 'active' : null}`} onClick={handleClick}>Inicio</button>
        <button type="button" name='/students' className={`w3-button ${local === '/students' ? 'active' : null}`} onClick={handleClick}>Listar alunos</button>
        <button type="button" name='/teacher' className={`w3-button ${local === '/teacher' ? 'active' : null}`} onClick={handleClick}>Professores</button>
        <button type="button" name='/manager' className={`w3-button ${local === '/manager' ? 'active' : null}`} onClick={handleClick}>Diretor</button>
        <button type="button" name='/about' className={`w3-button ${local === '/about' ? 'active' : null}`} onClick={handleClick}>Sobre nós</button>
        <button type="button" name='/login' className={`w3-button ${local === '/login' ? 'active' : null}`} onClick={handleClick}>Login</button>
      </div>
    </>
  )
}

export default Home
