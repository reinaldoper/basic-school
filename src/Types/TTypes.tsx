export interface IRender {
  id: number;
} 

export interface IEvent {
  currentTarget: string;
  event: React.MouseEvent<HTMLButtonElement>
}

export const IEventClick = "React.MouseEvent<HTMLButtonElement>"

export interface Admin {
  nome: string;
  role: string;
}

export interface User {
  nome: string;
  role: string;
}


export interface StoreState {
  logar: boolean;
  user: User[];
  admin: Admin[];
  logUser: Aluno[];
  disciplina: Disciplina[];
  aluno: Aluno[];
}

export interface StoreActions {
  insertLogar: () => void;
  resetLogar: () => void;
  setAddUser: (payload: User[]) => void;
  setDisciplina: (payload: Disciplina[]) => void;
  setAlunos: (payload:Aluno[]) => void;
  setAdmin: (payload:Admin[]) => void;
  setLogUser: (payload: Aluno[]) => void;
}

export interface Aluno {
  id: number;
  nome: string;
  role?: string;
  email?: string;
  semestre?: string;
  notas?: [{
    valor: string, id: number, semestre: string
  }]
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