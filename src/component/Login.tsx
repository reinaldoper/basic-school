import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Stats from "../utils/Stats";
import ButtonForm from '../buttons/ButtonForm';
import { alertLogin } from '../alerts/Alerts';
import InputLogin from '../inputs/InputLogin';


const Login = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const { insertLogar, logout, teacherDiscipline,
    setAdmin, user, listAluno, userLogedIn,
    resetLogar, setDiretor, setStudentLogar } = Stats();

  const navigate = useNavigate();

  const handleSubmit = () => {

    const ability = teacherDiscipline.filter(e => e.email === email)


    if (ability[0]?.role === "ADMIN" && ability[0].nome === name && ability[0].email === email) {
      setError(false);
      insertLogar();
      setAdmin(ability);
      navigate('/')
    } else if (userLogedIn[0].nome === name && userLogedIn[0].role === "DIR" && userLogedIn[0].email === email) {
      setError(false);
      insertLogar();
      setDiretor();
      navigate('/')
    } else if (listAluno[0]?.role === "USER" && listAluno[0].nome === name && listAluno[0].email === email) {
      setError(false);
      setStudentLogar();
      user(listAluno);
      logout();
      resetLogar();
      navigate('/')
    } else {
      setError(true);
    }
  };

  return (
    <div className="login-center">
      {error && alertLogin()}
      <div className="w3-container w3-margin">
        <form className="w3-container w3-card-4 w3-light-grey w3-text-blue w3-margin" onSubmit={handleSubmit}>
          <h2 className="w3-center">Login</h2>
          <label className="w3-text-blue"><b>Nome</b></label>
          <InputLogin onChange={(e) => setName(e.target.value)}
            name={name} placeholder='Digite seu nome' />
          <label className="w3-text-blue"><b>Email</b></label>
          <InputLogin onChange={(e) => setEmail(e.target.value)}
            name={email} placeholder='Digite seu email' />
          <ButtonForm onClick={handleSubmit} name='Entrar' />
        </form>
      </div>
    </div>
  );
};

export default Login;
