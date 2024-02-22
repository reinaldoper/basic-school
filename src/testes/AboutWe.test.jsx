import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AboutWe from '../component/AboutWe.tsx';
import { text } from '../../.jest/mock/AboutText.jsx';


describe('AboutWe', () => {
  it('should return text and manager name.', async () => {
    render(
      <MemoryRouter>
        <AboutWe />
      </MemoryRouter>
    );
    const renderText = screen.getByText('Diretor da Escola Basic School')
    expect(renderText).toBeInTheDocument();

    
    waitFor(() => {
      const renderMsg = screen.getByText(text);
      expect(renderMsg).toBeInTheDocument();
    })
   
    
  });
});