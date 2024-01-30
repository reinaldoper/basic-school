import '../styles/home.css'
import Home from '../component/Home';
import Footer from '../component/Footer';

function App() {

  return (
    <>
      <Home />
      <section id="transform-world">
        <div className='section-main w3-container w3-margin'>
          <p className="w3-cursive">Vem com a gente transformar o mundo.</p>
          <h2 className="w3-cursive">Aqui você encontra os melhores livros.</h2>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default App
