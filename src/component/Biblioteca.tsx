import { fetchBooks } from "../services/fetchApi"
import { useState } from "react"
import { Book } from "../Types/TTypes"
import '../styles/home.css'
import Livro from '../assets/livro.jpg'

const Biblioteca = () => {
  const [books, setBooks] = useState<Book[]>([])
  const [search, setSearch] = useState('')
  const [start, setStart] = useState<boolean>(false)
  const [end, setEnd] = useState<boolean>(false)

  const handleClick = async () => {
    setEnd(true)
    setStart(true)
    const headers: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
    if (search.length === 0) {
      alert('Please enter your search term')
    } else {
      const response = await fetchBooks(headers, search)
      setBooks(response)
      setSearch('')
    }

  };
  console.log(books.length);

  const booksResults = books.length > 0 && books.map((book, index) => (
    <div className="w3-card-4 book-card" key={index}>
      <p>{book.volumeInfo.publishedDate}</p>
      <p>{book.accessInfo.accessViewStatus}</p>
      <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail: 
        Livro
      } alt="books" title={book.volumeInfo.title} />
      <div className="w3-container w3-center">
        <p>{book.volumeInfo.title}</p>
        <p>{book.volumeInfo.categories}</p>
      </div>
    </div>

  ));



  return (
    <>
      <div className="w3-container input-card book-input">

        <div className="w3-card-4">
          <div className="w3-container w3-green">
            <h2>Volume:</h2>
          </div>

          <form className="w3-container w3-green">
            <p>
              <input className="w3-input" type="text" value={search} onChange={e => setSearch(e.target.value)} />
              <label>Search</label></p>
            <p>
              <button type="button" onClick={handleClick} className="w3-btn w3-black">Search</button>
            </p>
          </form>
        </div>
      </div>

      {end && <>{start && books.length ? <>
        <hr />
        <ul className="books">
          {booksResults}
        </ul>
      </> : <h2 style={{display: 'flex', justifyContent: 'center', margin: 'auto' }}>Carregando...</h2>}</>}
    </>
  )
}

export default Biblioteca
