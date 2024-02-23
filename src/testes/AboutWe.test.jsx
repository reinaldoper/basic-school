import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AboutWe from '../component/AboutWe.tsx';
import { text } from '../../.jest/mock/AboutText.jsx';


const nome = 'Moreira Salles';
const email = 'moreira@school.com';
const role = 'DIR';

jest.mock('../utils/Stats', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    userLogedIn: [{ nome: nome, email: email, role: role }]
  })),
}));

describe('AboutWe', () => {
  it('should return text.', () => {
    render(
      <MemoryRouter>
        <AboutWe />
      </MemoryRouter>
    );
    const renderText = screen.getByText(/Diretor da Escola Basic School/)
    expect(renderText).toBeInTheDocument();

    const textManager = screen.getByText(text);
    expect(textManager).toBeInTheDocument();


  });
  it('should return loading text.', () => {
    render(
      <MemoryRouter>
        <AboutWe />
      </MemoryRouter>
    );
    const renderText = screen.getByText(/Todos os direitos reservados a ©Copyright/)
    expect(renderText).toBeInTheDocument();


  });
  it('should return name manager.', async () => {
    render(
      <MemoryRouter>
        <AboutWe />
      </MemoryRouter>
    );

    await waitFor(() => {
      const renderText = screen.getByText(/Moreira Salles/)
      expect(renderText).toBeInTheDocument();
    })
  });
});