const URL_PROFESSOR = "https://escola-prisma.vercel.app/api/professor"
const URL_ALUNO = "https://escola-prisma.vercel.app/api/aluno"
const URL_DIRETOR = "https://escola-prisma.vercel.app/api/diretor"
const URL_NOTAS = "https://escola-prisma.vercel.app/api/notas"


export const fetchProfessor = async (options: RequestInit) => {
  const response = await fetch(URL_PROFESSOR, options);
  const data = await response.json();
  return data;
}

export const fetchDiretor = async () => {
  const response = await fetch(URL_DIRETOR);
  const data = await response.json();
  return data;
}

export const fetchAluno = async (options: RequestInit) => {
  const response = await fetch(URL_ALUNO, options);
  const data = await response.json();
  return data;
}

export const fetchNotas = async () => {
  const response = await fetch(URL_NOTAS);
  const data = await response.json();
  return data;
}