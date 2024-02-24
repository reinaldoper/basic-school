import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import FormDelStudent from '../component/forms/FormDelStudent'


const nome = 'Reinaldo Pereira';
const email = 'reinaldo@school.com';
const role = 'ADMIN';

const id = 9;
jest.mock('../utils/Stats', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    admin: [{ nome: nome, email: email, role: role }],
  }))
}));


describe('DelStudent', () => {
  it('should return DelStudent component.', () => {
    render(
      <MemoryRouter initialEntries={[`/student/del/${id}`]}>
        <Routes>
          <Route path="/student/del/:id" element={<FormDelStudent />} />
        </Routes>
      </MemoryRouter>
    );

    const msg = screen.getByText(/Carregando.../);
    expect(msg).toBeInTheDocument()
  });
});