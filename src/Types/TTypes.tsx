

export interface IEvent {
  currentTarget: string;
  event: React.MouseEvent<HTMLButtonElement>
}

export const IEventClick = "React.MouseEvent<HTMLButtonElement>"

export interface Admin {
  nome: string;
  role: string;
}


export interface StoreState {
  logar: boolean;
  user: string;
  admin: Admin[];
  disciplina: Disciplina[];
  aluno: Aluno[];
}

export interface StoreActions {
  insertLogar: () => void;
  resetLogar: () => void;
  setAddUser: (payload: string) => void;
  setDisciplina: (payload: Disciplina[]) => void;
  setAlunos: (payload:Aluno[]) => void;
  setAdmin: (payload:Admin[]) => void;
}

export interface Aluno {
  id?: number;
  nome: string;
  role?: string;
  professor: {
    id: number,
    nome: string,
    email: string,
    createdAt: string,
    disciplina: string
  },
  createdAt?: string;
}

export interface Disciplina {
  id: number;
  nome: string;
  role: string;
  email: string;
  disciplina: string;
  createdAt?: string;
  alunos?: Aluno[];
}