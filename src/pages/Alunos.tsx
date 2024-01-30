import Footer from "../component/Footer";
import Home from "../component/Home"
import ListAlunos from "../component/ListAlunos";
import FormAlunos from "../component/FormAlunos";
import '../styles/home.css';

const Alunos = () => {
  return (
    <>
      <Home />
      <section className="list-professor">
        <FormAlunos />
        <ListAlunos />
      </section>
      <hr />
      <Footer />
    </>
  )
}

export default Alunos
