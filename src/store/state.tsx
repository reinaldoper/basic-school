import { create } from 'zustand';
import { StoreActions, StoreState, Disciplina, Aluno, Admin } from '../Types/TTypes';



export const useStore = create<StoreState & StoreActions>((set) => ({
  logar: false,
  insertLogar: () => set({ logar:true}),
  resetLogar: () => set({ logar: false }),
  user: '',
  setAddUser: (payload: string) => set(() => ({ user: payload })),
  disciplina: [],
  setDisciplina: (payload: Disciplina[]) => set(() => ({ disciplina: payload })),
  aluno: [],
  setAlunos: (payload: Aluno[]) => set(() => ({ aluno: payload })),
  admin: [],
  setAdmin: (payload: Admin[]) => set(() => ({ admin: payload })),
}));