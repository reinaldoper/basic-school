

export interface IEvent {
  currentTarget: string;
  event: React.MouseEvent<HTMLButtonElement>
}

export const IEventClick = "React.MouseEvent<HTMLButtonElement>"


export interface StoreState {
  logar: boolean;
  add: string;
  disciplina: Disciplina[];
  aluno: Aluno[];
}

export interface StoreActions {
  insertLogar: () => void;
  resetLogar: () => void;
  setAdd: (payload: string) => void;
  setDisciplina: (payload: Disciplina[]) => void;
  setAlunos: (payload:Aluno[]) => void;
}

export interface Aluno {
  id?: number;
  nome: string;
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
  email: string;
  disciplina: string;
  createdAt?: string;
  alunos?: Aluno[];
}