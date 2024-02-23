import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../component/Login';


jest.mock('../store/state', () => ({
  useStore: jest.fn(),
}));




describe('Should return a login form.', () => {
  it('Login.', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const renderText = screen.getByText('Login')
    expect(renderText).toBeInTheDocument();

    const inputElement = screen.getByPlaceholderText('Digite seu nome'); 
    fireEvent.change(inputElement, { target: { value: 'Moreira Salles' } });
    expect(inputElement.value).toBe('Moreira Salles');

    const emailElement = screen.getByPlaceholderText('Digite seu email'); 
    fireEvent.change(emailElement, { target: { value: 'moreira@school.com' } });
    expect(emailElement.value).toBe('moreira@school.com');

    const button = screen.getByRole('button', {
      name: /entrar/i
    })

    expect(button).toBeInTheDocument()

  });
});
