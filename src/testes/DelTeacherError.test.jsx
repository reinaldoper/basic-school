import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FormDelTeacher from '../component/forms/FormDelTeacher'


jest.mock('../utils/Stats', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    dir: true,
    alert: jest.fn(),
    setError: jest.fn(),
    error: jest.fn(),
    teacherDiscipline: [],
  })),
}));

describe('FormDelTeacher', () => {
  it('should return Msg FormDelTeacher component.', () => {
    render(
      <MemoryRouter>
        <FormDelTeacher />
      </MemoryRouter>
    );
    const teacher1 = screen.getByText(/No registered teacher./);
    expect(teacher1).toBeInTheDocument()

  });
});