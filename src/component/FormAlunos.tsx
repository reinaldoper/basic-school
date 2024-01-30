
import { useStore } from "../store/state";
import { useState } from "react";
import { fetchAluno } from "../services/fetchApi"

const FormAlunos = () => {

  const [email, setEmail] = useState<string>('')
  const [nome, setNome] = useState<string>('')
  const [idade, setIdade] = useState<string>('')
  const [teacherId, setTeacherId] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  const setAlunos = useStore((state) => state.setAlunos)
  const logado = useStore((state) => state.logar)
  const listTeacher = useStore((state) => state.disciplina)


  const handleClick = async () => {
    const numberIdade = Number(idade)
    const idProfessor = Number(teacherId)
    const headers: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome,
        email,
        idade: numberIdade,
        professorId: idProfessor
      }),
    }

    if (verifyVariables()) {
      await fetchAluno(headers)
      enviaStudent()
      reset();
      setError(false);
    } else {
      reset();
      setError(true);
    }
  };



  const enviaStudent = async () => {
    const headersGet: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }
    const listStudents = await fetchAluno(headersGet)
    setAlunos(listStudents.message)
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
    if (email.length === 0 || nome.length === 0 || idade.length === 0 || teacherId.length === 0) {
      return false
    } else {
      return true
    }
  };


  const reset = () => {
    setEmail('')
    setNome('')
    setIdade('')
    setTeacherId('')
  };

  return (
    <>
      {logado ? <div className="w3-container input-card">
        {error && alert()}
        <h2>Cadastrar aluno:</h2>

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
              <input className="w3-input" type="text" value={idade} onChange={e => setIdade(e.target.value)} />
              <label>Idade</label></p>
            <p>
              <select value={teacherId} onChange={e => setTeacherId(e.target.value)}>
                {listTeacher.map((teacher) => (
                  <option key={teacher.id} value={teacher.id}>
                    {teacher.nome}
                  </option>
                ))}
              </select>
              <br />
              <label>professorId</label></p>
            <p>
              <button type="button" onClick={handleClick} className="w3-btn w3-black">Salvar</button>
            </p>
          </form>
        </div>
      </div> : <div className="w3-container input-card">
        <h2 className='w3-cursive'>Entre com as credenciais corretas para cadastrar alunos.</h2>
      </div>}
    </>
  )
}

export default FormAlunos
