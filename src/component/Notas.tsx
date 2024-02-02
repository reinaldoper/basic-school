
import { fetchNotas } from "../services/fetchApi";
import { useState } from "react";
import { useStore } from "../store/state";

const Notas = () => {
  const [nome, setNome] = useState<string>('')
  const [nota, setNota] = useState<number>(5)
  const [error, setError] = useState<boolean>(false)
  console.log(nota);


  console.log(nome);


  const logado = useStore((state) => state.logar)

  const aluno = useStore((state) => state.aluno)
  
  

  const admin = useStore((state) => state.admin)

  const newNota = aluno.filter(nota => nota.professor.nome === admin[0].nome)


  const handleClick = async () => {

    const headers: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        valor: Number(nota),
        alunoId: newNota[0].id
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


  const alert = () => {
    return (
      <div className="w3-panel w3-red">
        <h3>Danger!</h3>
        <p>Campos inválidos ou algo deu errado na solicitação.</p>
      </div>
    )
  }

  const verifyVariables = () => {
    if (nome.length === 0 || nota < 4) {
      return false
    } else {
      return true
    }
  };


  const reset = () => {
    setNome('')
  };

  const alertLogout = () => {
    return (
      <div className="w3-panel w3-yellow">
        <h3>Warning!</h3>
        <p>Nota já lançada.</p>
      </div>
    )
  }

  return (
    <>
      {logado && newNota.length ? <div id='container-notes'>
        <div className="w3-container input-card">
          {error && alert()}
          <h2>Cadastrar nota:</h2>

          <div className="w3-card-4">
            <div className="w3-container w3-green">
              <h2>Formulário</h2>
            </div>

            <form className="w3-container w3-green">
              <p>
                <select value={nome} onChange={e => setNome(e.target.value)}>
                  <option value="">Excolha um nome:</option>
                  {newNota.map((student) => (

                    <option key={student.id} value={student.nome}>
                      {student.nome}
                    </option>
                  ))}
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
      </div> : <div className="w3-container input-card w3-cursive">
        <h2 className='w3-cursive'>{alertLogout()}</h2>
      </div>}
    </>
  )
}

export default Notas
