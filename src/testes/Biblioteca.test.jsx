import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Biblioteca from '../component/Biblioteca';

describe('Should return a login form.', () => {
  it('Login.', async () => {
    render(
      <MemoryRouter>
        <Biblioteca />
      </MemoryRouter>
    );
    const renderText = screen.getAllByText('Search')
    expect(renderText[0]).toBeInTheDocument();

    const inputElement = screen.getByRole('textbox'); 
    
    
    fireEvent.change(inputElement, { target: { value: 'Pride' } });

    
    expect(inputElement.value).toBe('Pride');

    const button = screen.getByRole('button', {
      name: /search/i
    })

    button.click();

    await waitFor(() => {
      const msg = screen.getByText('Gay Pride Day')
      expect(msg).toBeInTheDocument();
    })

  });
});