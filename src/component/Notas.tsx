import Home from "./Home"
import { fetchNotas } from "../services/fetchApi";
import { useEffect, useState } from "react";

const Notas = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const notesStudents = async () => {
      const headers: RequestInit = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }
      const list = await fetchNotas(headers);
      setNotes(list.message)
    };
    notesStudents();
  }, []);

  console.log(notes);
  
  return (
    <div>
      <Home />
    </div>
  )
}

export default Notas
