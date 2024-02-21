/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../component/Home.tsx';



describe('should ', () => {
  it('should return the component with the correct word', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const homeElement = screen.getByRole('button', {
      name: /home/i
    })
    const diretorElement = screen.getByText('Diretor');
    const sobreElement = screen.getByText('Sobre nós');
    const login = screen.getByText('Login');

    expect(diretorElement).toBeInTheDocument();
    expect(sobreElement).toBeInTheDocument();
    expect(homeElement).toBeInTheDocument();
    expect(login).toBeInTheDocument();

    fireEvent.click(diretorElement);

    expect(login).toBeInTheDocument();
  });
});
