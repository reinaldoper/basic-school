import { useStore } from "../store/state";


const Stats = () => {

const teacher = useStore((state) => state.setDisciplina)

const admin = useStore((state) => state.admin)

const setAdmin = useStore((state) => state.setAdmin)

const logout = useStore((state) => state.resetLogar)

const listAlunos = useStore((state) => state.setAlunos)

const logar = useStore((state) => state.logar)

const logUser = useStore((state) => state.logUser)

const setUserLogar = useStore((state) => state.setUserLogar);

const resetDiretor = useStore((state) => state.resetDiretor);

const dir = useStore((state) => state.dir)

const add = useStore((state) => state.setAddUser);

const userLogedIn = useStore((state) => state.user);

const logarUser = useStore((state) => state.userLogar);


  return {
    dir, resetDiretor, setAdmin, setUserLogar, logUser, logar,
    admin, listAlunos, logout, teacher, add, userLogedIn, logarUser
  }
}

export default Stats
