import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Salles from '../component/Salles'
import { manager } from '../../.jest/mock/AboutText';



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






describe('Manager', () => {
  it('should return Salles component.', async () => {
    render(
      <MemoryRouter>
        <Salles />
      </MemoryRouter>
    );
    const renderText = screen.getByText('Carregando...')
    expect(renderText).toBeInTheDocument();


    await waitFor(() => {
      const renderMsg = screen.getByText(manager);
      expect(renderMsg).toBeInTheDocument();
    })
  });
});