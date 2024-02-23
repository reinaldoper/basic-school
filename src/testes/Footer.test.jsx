/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from '../component/Footer';



describe('should return Footer component ', () => {
  it('should return the component with the correct footer', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const footer = screen.getByText('Todos os direitos reservados a ©Copyright')
    const acesso = screen.getByText('Venha fazer parte do nosso mundo.');

    expect(footer).toBeInTheDocument();
    expect(acesso).toBeInTheDocument();
    
  });
});
