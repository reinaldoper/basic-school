import '../styles/home.css'
import { fetchNotas, fetchAluno } from "../services/fetchApi";
import { useState } from "react";
import { useStore } from "../store/state";


const UpdateNotas = () => {
  const [nome, setNome] = useState<string>('')
  const [nota, setNota] = useState<number>(5)
  const [error, setError] = useState<boolean>(false)
  const [semestre, setSemestre] = useState<string>('')
  const [log, setLog] = useState<boolean>(false)
  const [id, setId] = useState<number>()
 
  
  const setAlunos = useStore((state) => state.setAlunos)

  const logado = useStore((state) => state.logar)

  const aluno = useStore((state) => state.aluno)



  const admin = useStore((state) => state.admin)

  const newNota = aluno.filter(nota => nota.professor.nome === admin[0].nome)
  

  const handleStudentClick = (id: number) => {
    setId(id);
    setLog(true);
    const note = newNota[0].notas?.filter(nota => nota.id === id);
    setSemestre(note && note[0] ? note[0].semestre : '');
    setNota(note && note[0] ? Number(note[0].valor) : 5);

  }



  const updateAluno = newNota ? newNota[0].notas?.map(nota => (
    <ol id="update-ol" className="w3-container w3-animate-top">
      <li>Semestre: {nota.semestre === null ? null : nota.semestre}</li>
      <li>Nota: {nota.valor}</li>
      <li>
            <button type="button" className="fa fa-search search" onClick={() => handleStudentClick(nota.id)}></button>
          </li>
    </ol>
  )) : null



  const handleClick = async () => {

    const headers: RequestInit = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        valor: Number(nota),
        semestre
      }),
    }

    if (verifyVariables()) {
      await fetchNotas(headers, Number(id))
      reset();
      setLog(false);
      setError(false);
      const headersGet: RequestInit = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }
      const listStudents = await fetchAluno(headersGet)
      setAlunos(listStudents.message)
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
    if (nome.length === 0 || nota < 5 || semestre.length === 0) {
      return false
    } else {
      return true
    }
  };


  const reset = () => {
    setNome('')
    setSemestre('')
  };


  return (
    <>
      <div className="update-student">
        {updateAluno}
      </div>

      {logado && newNota.length && log ? <div id='container-notes'>
        <div className="w3-container input-card">
          {error && alert()}
          <h2>Atualizar nota:</h2>

          <div className="w3-card-4">
            <div className="w3-container w3-green">
              <h2>Formulário</h2>
            </div>

            <form className="w3-container w3-green">
              <p>
                <select value={semestre} onChange={e => setSemestre(e.target.value)}>
                  <option value="">Semestre:</option>
                  <option value="1°-semestre">1°-semestre</option>
                  <option value="2°-semestre">2°-semestre</option>
                  <option value="3°-semestre">3°-semestre</option>
                  <option value="4°-semestre">4°-semestre</option>
                </select>
              </p>
              <hr />
              <p>
                <input type='number' min="4.50" max="9.99" step='0.01' value={nota} onChange={e => setNota(Number(e.target.value))} />
                <br />
                <label>Nota</label></p>
              <p>
                <button type="button" onClick={handleClick} className="w3-btn w3-black">Salvar</button>
              </p>
            </form>
          </div>
        </div>
      </div> : null}
    </>
  )
}

export default UpdateNotas
