import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import UpdateAlunos from '../component/updates/UpdateAlunos'




const nome = 'Moreira Salles'
const email = 'moreira@school.com'
const role = 'DIR'

const diretor = [
  nome, email, role
]



jest.mock('../store/state', () => ({
  diretor,
  setAddUser: jest.fn(),
  useStore: jest.fn(() => ({
    diretor,
  })),
}));


describe('UpdateAlunos', () => {
  it('should return UpdateAlunos component.', async () => {
    render(
      <MemoryRouter>
        <UpdateAlunos />
      </MemoryRouter>
    );
    const renderText = screen.getByText('Entre com as credenciais corretas para cadastrar alunos.')
    expect(renderText).toBeInTheDocument();

  });
});