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
      setEnd(false)
      alert('Please enter your search term')
    } else {
      const response = await fetchBooks(headers, search)
      setBooks(response)
      setSearch('')
    }

  };
 

  const booksResults = books.length > 0 && books.map((book, index) => (
    <div className="w3-card-4 book-card" key={index}>
      <p>{book.volumeInfo.publishedDate}</p>
      <p>{book.accessInfo.accessViewStatus}</p>
      <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail :
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
      <div className="login-center">
        <div className="w3-container w3-margin">
          <form className="w3-container w3-card-4 w3-light-grey w3-text-blue w3-margin">
            <h2 className="w3-center">Search</h2>
            <label className="w3-text-blue"><b>Search</b></label>
            <input
              className="w3-input w3-border w3-round-large"
              type="text"
              placeholder="Search"
              value={search}
              onChange={e => setSearch(e.target.value)}
              required
            />
            <button className="w3-button w3-block w3-blue w3-round-large w3-section w3-padding"
              type="button"
              onClick={handleClick}
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {end && <>{start && books.length ? <>
        <hr />
        <ul className="books">
          {booksResults}
        </ul>
      </> : <h2 style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>Carregando...</h2>}</>}
    </>
  )
}

export default Biblioteca
