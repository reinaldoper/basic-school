import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ListAlunos from '../component/lists/ListAlunos'

const nome = 'Joao Castelo Branco';
const email = 'joao_castelo@school.com';
const role = 'ADMIN';

jest.mock('../utils/Stats', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    listAlunos: [],
    logar: jest.fn(),
    admin: [{ nome: nome, email: email, role: role }],
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
      }
    ],
  })),
}));

describe('UpdateNotas', () => {
  it('should return UpdateNotas component.', () => {
    render(
      <MemoryRouter>
        <ListAlunos />
      </MemoryRouter>
    );

    const student = screen.getByText(/Giovanna/)

    expect(student).toBeInTheDocument();

    const teacher = screen.getByText(/Joao Castelo Branco/)

    expect(teacher).toBeInTheDocument();

  });
});
