import Home from "../component/Home"
import '../styles/home.css';
import FormProfessores from "../component/FormProfessores";
import ListProfessores from "../component/ListProfessores";
import Footer from "../component/Footer";

const Professores = () => {
  return (
    <>
      <Home />
      <section className="list-professor">
        <FormProfessores />
        <ListProfessores />
      </section>
      <hr />
      <Footer />
    </>
  )
}

export default Professores
