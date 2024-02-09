import { useStore } from "../store/state";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const logar = useStore((state) => state.insertLogar)

  const logout = useStore((state) => state.resetLogar)

  const techer = useStore((state) => state.disciplina)

  const admin = useStore((state) => state.setAdmin)

  const user = useStore((state) => state.setLogUser)

  const listAluno = useStore((state) => state.aluno)

  const userLogan = useStore((state) => state.user)

  const resetLogar = useStore((state) => state.resetUserLogar)

  const setDiretor = useStore((state) => state.setDiretor)

  const navigate = useNavigate();

  const alert = () => {
    return (
      <div className="w3-panel w3-yellow">
        <h3>Warning!</h3>
        <p>Campos inválidos.</p>
      </div>
    )
  }


  const handleSubmit = () => {
    
    const ability = techer.filter(e => e.email === email)
    
    
    if (ability[0]?.role === "ADMIN" && ability[0].nome === name && ability[0].email === email) {
      setError(false);
      logar();
      admin(ability);
      navigate('/')
    } else if(userLogan[0].nome === name && userLogan[0].role === "DIR" && userLogan[0].email === email) {
      setError(false);
      logar();
      setDiretor();
      navigate('/')
    } else if (listAluno[0]?.role === "USER" && listAluno[0].nome === name && listAluno[0].email === email) {
      setError(false);
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
      {error && alert()}
      <div className="w3-container w3-margin">
        <form className="w3-container w3-card-4 w3-light-grey w3-text-blue w3-margin" onSubmit={handleSubmit}>
          <h2 className="w3-center">Login</h2>
          <label className="w3-text-blue"><b>Nome</b></label>
          <input
            className="w3-input w3-border w3-round-large"
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label className="w3-text-blue"><b>Email</b></label>
          <input
            className="w3-input w3-border w3-round-large"
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button className="w3-button w3-block w3-blue w3-round-large w3-section w3-padding"
            type="button"
            onClick={handleSubmit}
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
