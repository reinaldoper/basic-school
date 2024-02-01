import '../styles/home.css';
import { useState } from 'react';
import { fetchProfessor } from '../services/fetchApi';
import { useStore } from "../store/state";


const FormProfessores = () => {
  const [email, setEmail] = useState<string>('')
  const [nome, setNome] = useState<string>('')
  const [disciplina, setDisciplina] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  const teacher = useStore((state) => state.setDisciplina)
  const logado = useStore((state) => state.logar)

  console.log(disciplina);
  
  const handleClick = async () => {
    const headers: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome,
        email,
        disciplina,
      }),
    }

    if (verifyVariables()) {
      await fetchProfessor(headers)
      enviaTeacher();
      reset();
      setError(false);
    } else {
      reset();
      setError(true);
    }
  };

  

  const enviaTeacher = async () => {
    const headersGet: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }
    const listTeacher = await fetchProfessor(headersGet)
    teacher(listTeacher.message);
  };





  const alert = () => {
    return (
      <div className="w3-panel w3-red">
        <h3>Danger!</h3>
        <p>Campos inválidos ou algo deu errado na solicitação.</p>
      </div>
    )
  }

  const verifyVariables = () => {
    if (email.length === 0 || nome.length === 0 || disciplina.length === 0) {
      return false
    } else {
      return true
    }
  };


  const reset = () => {
    setEmail('')
    setNome('')
    setDisciplina('')
  };


  const alertLogout = () => {
    return (
      <div className="w3-panel w3-yellow">
        <h3>Warning!</h3>
        <p>Entre com as credenciais corretas para cadastrar professores.</p>
      </div>
    )
  }


  return (
    <>
      {logado ? <div className="w3-container input-card">
        {error && alert()}
        <h2>Cadastrar professor:</h2>

        <div className="w3-card-4">
          <div className="w3-container w3-green">
            <h2>Formulário</h2>
          </div>

          <form className="w3-container w3-green">
            <p>
              <input className="w3-input" type="text" value={nome} onChange={e => setNome(e.target.value)} />
              <label>Nome</label></p>
            <p>
              <input className="w3-input" type="text" value={email} onChange={e => setEmail(e.target.value)} />
              <label>Email</label></p>
            <p>
              <select className="w3-input" value={disciplina} onChange={e => setDisciplina(e.target.value)}>
                <option value="matematica">MATEMATICA</option>
                <option value="geografia">GEOGRAFIA</option>
                <option value="fisica">FISICA</option>
                <option value="programacao">PROGRAMACAO</option>
                <option value="portugues">PORTUGUES</option>
                <option value="IoT">IoT</option>
                <option value="Ingles">INGLES</option>
                <option value="historia">HISTORIA</option>
              </select>
              <label>Disciplina</label></p>
            <p>
              <button type="button" onClick={handleClick} className="w3-btn w3-black">Salvar</button>
            </p>
          </form>
        </div>
      </div> : <div className="w3-container input-card w3-cursive">
        <h2 className='w3-cursive'>{alertLogout()}</h2>
      </div>}
    </>
  )
}

export default FormProfessores
