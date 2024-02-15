import { useState } from "react";
import { fetchAluno } from "../../services/fetchApi"
import Stats from "../../utils/Stats";
import ButtonUpdate from '../../buttons/ButtonUpdate';
import InputForm from "../../inputs/InputForm";
import { alertVariables, alertLogout } from "../../alerts/Alerts";

const FormAlunos = () => {

  const [email, setEmail] = useState<string>('')
  const [nome, setNome] = useState<string>('')
  const [idade, setIdade] = useState<string>('')
  const [teacherId, setTeacherId] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  const { listAlunos, logar, teacherDiscipline, dir } = Stats();


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
    listAlunos(listStudents.message)
  };


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
      {logar && !dir ? <div className="w3-container input-card">
        {error && alertVariables()}
        <h2>Cadastrar aluno:</h2>

        <div className="w3-card-4">
          <div className="w3-container w3-green">
            <h2>Formulário</h2>
          </div>

          <form className="w3-container w3-green">
            <p>
              <InputForm name={nome} onChange={e => setNome(e.target.value)} />
              <label>Nome</label></p>
            <p>
              <InputForm name={email} onChange={e => setEmail(e.target.value)} />
              <label>Email</label></p>
            <p>
              <InputForm name={idade} onChange={e => setIdade(e.target.value)} />
              <label>Idade</label></p>
            <p>
              <select value={teacherId} onChange={e => setTeacherId(e.target.value)}>
                {teacherDiscipline.map((teacher) => (
                  <option key={teacher.id} value={teacher.id}>
                    {teacher.nome}
                  </option>
                ))}
              </select>
              <br />
              <label>professor</label></p>
            <p>
              <ButtonUpdate onClick={handleClick} name='Salvar' />
            </p>
          </form>
        </div>
      </div> : <div className="w3-container input-card w3-cursive">
        <h2 className='w3-cursive'>{alertLogout()}</h2>
      </div>}
    </>
  )
}

export default FormAlunos
