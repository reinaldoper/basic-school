import { create } from 'zustand';
import { StoreActions, StoreState, Disciplina, Aluno, Admin, User } from '../Types/TTypes';



export const useStore = create<StoreState & StoreActions>((set) => ({
  logar: false,
  insertLogar: () => set({ logar:true}),
  resetLogar: () => set({ logar: false }),
  user: [],
  setAddUser: (payload: User[]) => set(() => ({ user: payload })),
  disciplina: [],
  setDisciplina: (payload: Disciplina[]) => set(() => ({ disciplina: payload })),
  aluno: [],
  setAlunos: (payload: Aluno[]) => set(() => ({ aluno: payload })),
  admin: [],
  setAdmin: (payload: Admin[]) => set(() => ({ admin: payload })),
  logUser: [],
  setLogUser: (payload: Aluno[]) => set(() => ({ logUser: payload })),
  update: [],
  setUpdateAluno: (payload: Aluno[]) => set(() => ({ update: payload })),
  userLogar: true,
  resetUserLogar: () => set({ userLogar: false }),
  setUserLogar: () => set({ userLogar: true }),
  dir: false,
  setDiretor: () => set({ dir: true }),
  resetDiretor: () => set({ dir: false }),
  studentLogar: false,
  setStudent: () => set({ studentLogar: true }),
  resetStudent: () => set({ studentLogar: false }),
}));