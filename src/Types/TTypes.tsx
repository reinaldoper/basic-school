import { ReactNode } from "react";

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
  email: string;
}


export interface StoreState {
  logar: boolean;
  user: User[];
  admin: Admin[];
  logUser: Aluno[];
  disciplina: Disciplina[];
  aluno: Aluno[];
  update: Aluno[];
  userLogar: boolean;
  dir: boolean;
}

export interface StoreActions {
  insertLogar: () => void;
  resetLogar: () => void;
  setAddUser: (payload: User[]) => void;
  setDisciplina: (payload: Disciplina[]) => void;
  setAlunos: (payload: Aluno[]) => void;
  setAdmin: (payload: Admin[]) => void;
  setLogUser: (payload: Aluno[]) => void;
  setUpdateAluno: (payload: Aluno[]) => void;
  resetUserLogar: () => void;
  setUserLogar: () => void;
  setDiretor: () => void;
  resetDiretor: () => void;
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

interface IndustryIdentifier {
  type: string;
  identifier: string;
}

interface ReadingModes {
  text: boolean;
  image: boolean;
}
interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

interface VolumeInfo {
  title: string;
  subtitle: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  industryIdentifiers: IndustryIdentifier[];
  readingModes: ReadingModes;
  pageCount: number;
  printType: string;
  categories: string[];
  imageLinks: ImageLinks;
  infoLink: string;
}



interface SaleInfo {
  country: string;
  saleability: string;
  isEbook: boolean;
}

interface Epub {
  isAvailable: boolean;
}

interface Pdf {
  isAvailable: boolean;
  acsTokenLink: string;
}

interface AccessInfo {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub: Epub;
  pdf: Pdf;
  webReaderLink: string;
  accessViewStatus: string;
  quoteSharingAllowed: boolean;
}

interface SearchInfo {
  textSnippet: string;
}

export interface Book {
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
  searchInfo: SearchInfo;
}

export interface NavbarProps {
  children: ReactNode;
}

export interface ButtonFormProps {
  onClick: () => void;
  name: string;
}