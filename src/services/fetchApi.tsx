import fetch from 'cross-fetch';

const URL_PROFESSOR = "https://escola-prisma.vercel.app/api/professor"
const URL_ALUNO = "https://escola-prisma.vercel.app/api/aluno"
const URL_DIRETOR = "https://escola-prisma.vercel.app/api/diretor"
const URL_NOTAS = "https://escola-prisma.vercel.app/api/notas"
const URL_BOOK = "https://www.googleapis.com/books/v1/volumes?q="


export const fetchProfessor = async (options: RequestInit, id: number | null) => {
  if (!id) {
    const response = await fetch(URL_PROFESSOR, options);
    const data = await response.json();
    return data;
  } else {
    const response = await fetch(`${URL_PROFESSOR}/${id}`, options);
    const data = await response.json();
    return data;
  }
}

export const fetchDiretor = async (options: RequestInit, id: number | null) => {
  if (id) {
    const response = await fetch(`${URL_DIRETOR}/${id}`, options);
    const data = await response.json();
    return data;
  } else {
    const response = await fetch(URL_DIRETOR, options);
    const data = await response.json();
    return data;
  }
}

export const fetchAluno = async (options: RequestInit) => {
  const response = await fetch(URL_ALUNO, options);
  const data = await response.json();
  return data;
}

export const fetchAlunoId = async (options: RequestInit, id: number) => {
  const response = await fetch(`${URL_ALUNO}/${id}`, options);
  const data = await response.json();
  return data;
}

export const fetchNotas = async (options: RequestInit, id: number | null) => {
  if (id) {
    const response = await fetch(`${URL_NOTAS}/${id}`, options);
    const data = await response.json();
    return data;
  } else {
    const response = await fetch(URL_NOTAS, options);
    const data = await response.json();
    return data;
  }

}

export const fetchBooks = async (options: RequestInit, datas: string) => {
  const response = await fetch(`${URL_BOOK}${datas}`, options);
  const data = await response.json();
  return data.items;
}