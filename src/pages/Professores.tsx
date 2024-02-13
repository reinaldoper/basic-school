import Home from "../component/Home"
import '../styles/home.css';
import FormProfessores from "../component/forms/FormProfessores";
import ListProfessores from "../component/lists/ListProfessores";
import Stats from "../utils/Stats";


const Professores = () => {

  const { logar, dir } = Stats();

  return (
    <>
      <Home />
      <section className={`${logar && dir ? 'list-professor': 'logout'}`}>
        <FormProfessores />
        <ListProfessores />
      </section>
      <hr />
    </>
  )
}

export default Professores
