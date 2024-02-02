
import { useStore } from "../store/state";
import { useState } from "react";
import { fetchAluno, fetchAlunoId } from "../services/fetchApi"

const UpdateAlunos = () => {

  const [nome, setNome] = useState<string>('')
  const [teacherId, setTeacherId] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  const setAlunos = useStore((state) => state.setAlunos)
  const logado = useStore((state) => state.logar)
  const listTeacher = useStore((state) => state.disciplina)

  const aluno = useStore((state) => state.aluno)


  const handleClick = async () => {
    const idProfessor = Number(teacherId)
    const idAluno = aluno.filter((aluno) => aluno.nome === nome)
    const headers: RequestInit = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome,
        professorId: idProfessor
      }),
    }

    if (verifyVariables()) {
      await fetchAlunoId(headers, idAluno[0].id)
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
    if (nome.length === 0 || teacherId.length === 0) {
      return false
    } else {
      return true
    }
  };


  const reset = () => {
    setNome('')
    setTeacherId('')
  };

  const alertLogout = () => {
    return (
      <div className="w3-panel w3-yellow">
        <h3>Warning!</h3>
        <p>Entre com as credenciais corretas para cadastrar alunos.</p>
      </div>
    )
  }

  return (
    <>
      {logado ? <div className="w3-container input-card">
        {error && alert()}
        <h2>Atualizar aluno:</h2>

        <div className="w3-card-4">
          <div className="w3-container w3-green">
            <h2>Formulário</h2>
          </div>

          <form className="w3-container w3-green">
            <p>
            <select value={nome} onChange={e => setNome(e.target.value)}>
                {aluno.map((student) => (
                  <option key={student.id} value={student.nome}>
                    {student.nome}
                  </option>
                ))}
              </select>
            </p>
            <hr />
            <p>
              <select value={teacherId} onChange={e => setTeacherId(e.target.value)}>
                {listTeacher.map((teacher) => (
                  <option key={teacher.id} value={teacher.id}>
                    {teacher.nome}
                  </option>
                ))}
              </select>
              <br />
              <label>professor</label></p>
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

export default UpdateAlunos