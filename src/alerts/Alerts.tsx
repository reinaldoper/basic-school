export  const alert = () => {
  return (
    <div className="w3-panel w3-red">
      <h3>Danger!</h3>
      <p>Campos inválidos ou algo deu errado na solicitação.</p>
    </div>
  )
}

export const alertLogout = () => {
  return (
    <div className="w3-panel w3-yellow">
      <h3>Warning!</h3>
      <p>Entre com as credenciais corretas para cadastrar alunos.</p>
    </div>
  )
}

export const alertLogin = () => {
  return (
    <div className="w3-panel w3-yellow">
      <h3>Warning!</h3>
      <p>Campos inválidos.</p>
    </div>
  )
}

export const alertLogoutTeacher = () => {
  return (
    <div className="w3-panel w3-yellow">
      <h3>Warning!</h3>
      <p>Entre com as credenciais corretas para cadastrar professores.</p>
    </div>
  )
}

export const alertLogoutNotes = () => {
  return (
    <div className="w3-panel w3-yellow">
      <h3>Warning!</h3>
      <p>Nota já lançada.</p>
    </div>
  )
}