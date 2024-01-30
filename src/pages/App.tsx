//import { useState, useEffect } from 'react'
import '../styles/home.css'
//import { fetchProfessor } from '../services/fetchApi'
import Home from '../component/Home';
import Footer from '../component/Footer';

function App() {
  /* const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    const professores = async () => {
      const request = await fetchProfessor()
      setTeacher(request.message)
    }

    professores();

  }, []); */


  return (
    <>
      <Home />
      <section id="transform-world">
        <div className='section-main'>
          <p>Vem com a gente transformar o mundo.</p>
          <h2>Aqui você encontra os melhores livros.</h2>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default App
