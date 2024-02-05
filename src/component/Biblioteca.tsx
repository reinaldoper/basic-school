import { fetchBooks } from "../services/fetchApi"
import { useState } from "react"

const Biblioteca = () => {
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState('')

  const handleClick = async () => {
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
  console.log(books);
  


  return (
    <>
      <div className="w3-container input-card">
        <h2>Volume:</h2>

        <div className="w3-card-4">
          <div className="w3-container w3-green">
            <h2>Formulário</h2>
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
    </>
  )
}

export default Biblioteca
