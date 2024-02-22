import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Notas from '../component/Notas'

const nome = 'Joao Castelo Branco';
const email = 'joao_castelo@school.com';
const role = 'ADMIN';

jest.mock('../utils/Stats', () => ({
  __esModule: true,
    default: jest.fn(() => ({
    logar: true,
    admin: [{nome: nome, email: email, role: role}],
    listAluno: [
      {
        "id": 5,
        "nome": "Giovanna",
        "role": "USER",
        "email": "gi@email.com",
        "professor": {
          "id": 4,
          "nome": "Joao Castelo Branco",
          "email": "joao_castelo@school.com",
          "createdAt": "2024-01-30T11:00:47.682Z",
          "role": "ADMIN",
          "disciplina": "portugues"
        },
        "createdAt": "2024-01-30T19:18:51.452Z",
        "notas": [
          {
            "id": 2,
            "valor": 9.99,
            "semestre": "1°-semestre",
            "alunoId": 5
          },
          {
            "id": 3,
            "valor": 8.72,
            "semestre": "2°-semestre",
            "alunoId": 5
          },
          {
            "id": 5,
            "valor": 8.05,
            "semestre": "3°-semestre",
            "alunoId": 5
          }
        ]
      },
      {
        "id": 6,
        "nome": "Joao Paulo",
        "role": "USER",
        "email": "joao@email.com",
        "professor": {
          "id": 4,
          "nome": "Joao Castelo Branco",
          "email": "joao_castelo@school.com",
          "createdAt": "2024-01-30T11:00:47.682Z",
          "role": "ADMIN",
          "disciplina": "portugues"
        },
        "createdAt": "2024-01-30T19:39:13.498Z",
        "notas": []
      },
      {
        "id": 7,
        "nome": "Rafaela Silva",
        "role": "USER",
        "email": "rafa@gmail.com",
        "professor": {
          "id": 5,
          "nome": "Reinaldo Pereira",
          "email": "reinaldo@school.com",
          "createdAt": "2024-01-30T11:24:18.954Z",
          "role": "ADMIN",
          "disciplina": "programacao"
        },
        "createdAt": "2024-01-30T19:50:50.968Z",
        "notas": []
      },
      {
        "id": 8,
        "nome": "Maria de Paula",
        "role": "USER",
        "email": "maria@hotmail.com",
        "professor": {
          "id": 5,
          "nome": "Reinaldo Pereira",
          "email": "reinaldo@school.com",
          "createdAt": "2024-01-30T11:24:18.954Z",
          "role": "ADMIN",
          "disciplina": "programacao"
        },
        "createdAt": "2024-01-30T20:00:41.301Z",
        "notas": []
      },
      {
        "id": 3,
        "nome": "João Pedro da Silva",
        "role": "USER",
        "email": "joaopedro@gmail.com",
        "professor": {
          "id": 6,
          "nome": "Josefina Costantina",
          "email": "josefuna@school.com",
          "createdAt": "2024-01-30T11:26:26.807Z",
          "role": "ADMIN",
          "disciplina": "historia"
        },
        "createdAt": "2024-01-28T11:53:59.410Z",
        "notas": [
          {
            "id": 7,
            "valor": 8.01,
            "semestre": "1°-semestre",
            "alunoId": 3
          }
        ]
      },
      {
        "id": 1,
        "nome": "Pedro Paulo Diniz",
        "role": "USER",
        "email": "pedro@gmail.com",
        "professor": {
          "id": 6,
          "nome": "Josefina Costantina",
          "email": "josefuna@school.com",
          "createdAt": "2024-01-30T11:26:26.807Z",
          "role": "ADMIN",
          "disciplina": "historia"
        },
        "createdAt": "2024-01-28T11:50:03.077Z",
        "notas": []
      },
      {
        "id": 9,
        "nome": "Matheus Henrique",
        "role": "USER",
        "email": "henrique@hotmail.com",
        "professor": {
          "id": 5,
          "nome": "Reinaldo Pereira",
          "email": "reinaldo@school.com",
          "createdAt": "2024-01-30T11:24:18.954Z",
          "role": "ADMIN",
          "disciplina": "programacao"
        },
        "createdAt": "2024-02-14T18:13:13.724Z",
        "notas": []
      },
      {
        "id": 10,
        "nome": "Marcos da Silva",
        "role": "USER",
        "email": "marcos@gmail.com",
        "professor": {
          "id": 2,
          "nome": "Marcela das Neves",
          "email": "marcela_neves@school.com",
          "createdAt": "2024-01-30T10:06:14.545Z",
          "role": "ADMIN",
          "disciplina": "matematica"
        },
        "createdAt": "2024-02-15T16:29:24.776Z",
        "notas": [
          {
            "id": 6,
            "valor": 7.5,
            "semestre": "1°-semestre",
            "alunoId": 10
          }
        ]
      }
    ],
  })),
}));

describe('Notas', () => {
  it('should return Notas component.', async () => {
    render(
      <MemoryRouter>
        <Notas />
      </MemoryRouter>
    );
    
    await waitFor(() => {
      const form = screen.getByText('Cadastrar nota:')
      const aluno = screen.getByText('Giovanna')
      expect(form).toBeInTheDocument()
      expect(aluno).toBeInTheDocument()
    })
  });
});
