import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Salles from '../component/Salles'
import { manager } from '../../.jest/mock/AboutText';



const nome = 'Moreira Salles';
const email = 'moreira@school.com';
const role = 'DIR';

jest.mock('../utils/Stats', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    userLogedIn: [{ nome: nome, email: email, role: role }]
  })),
}));






describe('Manager', () => {
  it('should return Salles component.', async () => {
    render(
      <MemoryRouter>
        <Salles />
      </MemoryRouter>
    );

    const renderMsg = screen.getByText(manager);
    expect(renderMsg).toBeInTheDocument();

    const renderDireitos = screen.getByText('Todos os direitos reservados a ©Copyright')
    expect(renderDireitos).toBeInTheDocument();


    await waitFor(() => {
      const renderText = screen.getByText('Moreira Salles')
      expect(renderText).toBeInTheDocument();
    })
  });
});