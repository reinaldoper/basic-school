import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AboutWe from '../component/AboutWe.tsx';
import { text } from '../../.jest/mock/AboutText.jsx';




describe('AboutWe', () => {
  it('should return text.', () => {
    render(
      <MemoryRouter>
        <AboutWe />
      </MemoryRouter>
    );
    const renderText = screen.getByText('Diretor da Escola Basic School')
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
    const renderText = screen.getByText('Carregando...')
    expect(renderText).toBeInTheDocument();


  });
});