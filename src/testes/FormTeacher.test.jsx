import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FormTeacher from '../component/forms/FormProfessores'


jest.mock('../utils/Stats', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    logar: true,
    teacher: jest.fn(),
    dir: true,
  })),
}));

describe('FormTeacher', () => {
  it('should return FormTeacher component.', async () => {
    render(
      <MemoryRouter>
        <FormTeacher />
      </MemoryRouter>
    );

    await waitFor(() => {
      const inputNome = screen.getByLabelText('Nome');
      const inputEmail = screen.getByLabelText('Email');

      fireEvent.change(inputNome, { target: { value: 'Seu Nome' } });
      fireEvent.change(inputEmail, { target: { value: 'seu.email@example.com' } });
      const materia = screen.getByText(/MATEMATICA/);
      expect(materia).toBeInTheDocument()

      fireEvent.change(materia, { target: { value: 'MATEMATICA' } });


      expect(materia.value).toBe('MATEMATICA');

      const button = screen.getByText(/Salvar/);
      expect(button).toBeInTheDocument()
      fireEvent.click(button);
      
      expect(inputNome.value).toBe('');
      expect(inputEmail.value).toBe('');
    })
  });
});
