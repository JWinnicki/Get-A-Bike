import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import Footer from './Footer';

describe('Footer', () => {
    test('renders Footer component', () => {
      render(<Footer />);
    });
    test('render contact data', () => {
        render(<Footer />);
  
        expect(screen.getByText('Contact: jwinnicki2@gmail.com')).toBeInTheDocument();
      });
  });
