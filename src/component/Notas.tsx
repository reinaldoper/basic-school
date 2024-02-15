import { fetchNotas } from "../services/fetchApi";
import { useState } from "react";
import Stats from "../utils/Stats";
import ButtonUpdate from "../buttons/ButtonUpdate";
import { alertLogoutNotes, alertVariables } from "../alerts/Alerts";
import { useNavigate } from "react-router-dom";


const Notas = () => {
  const [nome, setNome] = useState<string>('')
  const [nota, setNota] = useState<number>(5)
  const [error, setError] = useState<boolean>(false)
  const [semestre, setSemestre] = useState<string>('')

  const navigate = useNavigate()

  const { logar, listAluno, admin } = Stats();

  const verify = listAluno.some(a => a.professor.nome);

  if(!verify){
    alert('No teacher found');
    navigate('/');
  }

  const newNota = listAluno.filter(nota => nota.professor.nome === admin[0].nome);


  const handleClick = async () => {

    const headers: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        valor: Number(nota),
        alunoId: newNota[0].id,
        semestre
      }),
    }

    if (verifyVariables()) {
      await fetchNotas(headers, null)
      reset();
      setError(false);
    } else {
      reset();
      setError(true);
    }
  };

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
      {logar && newNota.length ? <div id='container-notes'>
        <div className="w3-container input-card">
          {error && alertVariables()}
          <h2>Cadastrar nota:</h2>

          <div className="w3-card-4">
            <div className="w3-container w3-green">
              <h2>Formulário</h2>
            </div>

            <form className="w3-container w3-green">
              <p>
                <select value={nome} onChange={e => setNome(e.target.value)}>
                  <option value="">Aluno:</option>
                  {newNota.map((student) => (

                    <option key={student.id} value={student.nome}>
                      {student.nome}
                    </option>
                  ))}
                </select>
              </p>
              <hr />
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
                <ButtonUpdate onClick={handleClick} name='Salvar' />
              </p>
            </form>
          </div>
        </div>
      </div> : <div className="w3-container input-card w3-cursive">
        <h2 className='w3-cursive'>{alertLogoutNotes()}</h2>
      </div>}
    </>
  )
}

export default Notas
