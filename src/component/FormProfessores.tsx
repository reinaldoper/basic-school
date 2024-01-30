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
      const result = await fetchProfessor(headers)
      if (result.message.length > 0) {
        const headersGet: RequestInit = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        }
        const listTeacher = await fetchProfessor(headersGet)
        teacher(listTeacher.message);
      }
      reset();
      setError(false); 
    } else {
      reset();
      setError(true);
    }
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
              <input className="w3-input" type="text" value={disciplina} onChange={e => setDisciplina(e.target.value)} />
              <label>Disciplina</label></p>
            <p>
              <button type="button" onClick={handleClick} className="w3-btn w3-black">Salvar</button>
            </p>
          </form>
        </div>
      </div>: <div className="w3-container input-card">
        <h2 className='w3-cursive'>Entre com as credenciais corretas para cadastrar professores.</h2>
      </div>}
    </>
  )
}

export default FormProfessores
