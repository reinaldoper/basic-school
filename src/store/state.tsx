import { create } from 'zustand';
import { StoreActions, StoreState, Disciplina, Aluno } from '../Types/TTypes';



export const useStore = create<StoreState & StoreActions>((set) => ({
  logar: false,
  insertLogar: () => set({ logar:true}),
  resetLogar: () => set({ logar: false }),
  add: '',
  setAdd: (payload: string) => set(() => ({ add: payload })),
  disciplina: [],
  setDisciplina: (payload: Disciplina[]) => set(() => ({ disciplina: payload })),
  aluno: [],
  setAlunos: (payload: Aluno[]) => set(() => ({ aluno: payload })),
}));