import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import UpdateAlunos from '../component/updates/UpdateAlunos'



jest.mock('../utils/Stats', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    setAddUser: jest.fn(),
    logar: true,
    listAluno:[
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
    teacherDiscipline: [
      {
        "id": 2,
        "nome": "Marcela das Neves",
        "role": "ADMIN",
        "disciplina": "matematica",
        "email": "marcela_neves@school.com",
        "createdAt": "2024-01-30T10:06:14.545Z",
        "alunos": [
          {
            "id": 10,
            "nome": "Marcos da Silva",
            "idade": 23,
            "email": "marcos@gmail.com",
            "role": "USER",
            "createdAt": "2024-02-15T16:29:24.776Z",
            "professorId": 2
          }
        ]
      },
      {
        "id": 4,
        "nome": "Joao Castelo Branco",
        "role": "ADMIN",
        "disciplina": "portugues",
        "email": "joao_castelo@school.com",
        "createdAt": "2024-01-30T11:00:47.682Z",
        "alunos": [
          {
            "id": 5,
            "nome": "Giovanna",
            "idade": 24,
            "email": "gi@email.com",
            "role": "USER",
            "createdAt": "2024-01-30T19:18:51.452Z",
            "professorId": 4
          },
          {
            "id": 6,
            "nome": "Joao Paulo",
            "idade": 45,
            "email": "joao@email.com",
            "role": "USER",
            "createdAt": "2024-01-30T19:39:13.498Z",
            "professorId": 4
          }
        ]
      },
      {
        "id": 5,
        "nome": "Reinaldo Pereira",
        "role": "ADMIN",
        "disciplina": "programacao",
        "email": "reinaldo@school.com",
        "createdAt": "2024-01-30T11:24:18.954Z",
        "alunos": [
          {
            "id": 7,
            "nome": "Rafaela Silva",
            "idade": 19,
            "email": "rafa@gmail.com",
            "role": "USER",
            "createdAt": "2024-01-30T19:50:50.968Z",
            "professorId": 5
          },
          {
            "id": 8,
            "nome": "Maria de Paula",
            "idade": 25,
            "email": "maria@hotmail.com",
            "role": "USER",
            "createdAt": "2024-01-30T20:00:41.301Z",
            "professorId": 5
          },
          {
            "id": 9,
            "nome": "Matheus Henrique",
            "idade": 23,
            "email": "henrique@hotmail.com",
            "role": "USER",
            "createdAt": "2024-02-14T18:13:13.724Z",
            "professorId": 5
          }
        ]
      },
      {
        "id": 6,
        "nome": "Josefina Costantina",
        "role": "ADMIN",
        "disciplina": "historia",
        "email": "josefuna@school.com",
        "createdAt": "2024-01-30T11:26:26.807Z",
        "alunos": [
          {
            "id": 3,
            "nome": "João Pedro da Silva",
            "idade": 21,
            "email": "joaopedro@gmail.com",
            "role": "USER",
            "createdAt": "2024-01-28T11:53:59.410Z",
            "professorId": 6
          },
          {
            "id": 1,
            "nome": "Pedro Paulo Diniz",
            "idade": 19,
            "email": "pedro@gmail.com",
            "role": "USER",
            "createdAt": "2024-01-28T11:50:03.077Z",
            "professorId": 6
          }
        ]
      }
    ],
  }))
}));


describe('UpdateAlunos', () => {
  it('should return UpdateAlunos component.', async () => {
    render(
      <MemoryRouter>
        <UpdateAlunos />
      </MemoryRouter>
    );
    
    await waitFor(() => {
      const teacher = screen.getByText(/Marcela das Neves/)
      expect(teacher).toBeInTheDocument();
      const button = screen.getByRole('button', {
        name: /salvar/i
      })
      expect(button).toBeInTheDocument();
      fireEvent.click(button)
    })

  });
});