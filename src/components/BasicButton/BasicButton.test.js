import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import BasicButton from './BasicButton';



describe('BasicButton', () => {
    afterEach(cleanup);

    test('renders BasicButton component', () => {
      render(<BasicButton>Hello</BasicButton>);
    });

    test('to render inner text', () => {
        render(<BasicButton>Hello</BasicButton>);
  
        expect(screen.getByText('Hello')).toBeInTheDocument();
      });

    test('to check link attribute', () => {
        render(<BasicButton type='link' to='/'>Hello</BasicButton>);

        const button = screen.getByText('Hello');
        
        expect(button).toHaveAttribute('to', '/');
      });

    test('to check size attribute', () => {
        render(<BasicButton size='big'>Hello</BasicButton>);

        const button = screen.getByText('Hello');
        
        expect(button).not.toHaveAttribute('size');
      });
      
    test('to check if onClick fn is fired', () => {
        const test = jest.fn();
        render(<BasicButton onClick={test}>Hello</BasicButton>);

        const button = screen.getByText('Hello');
        fireEvent.click(button);
        expect(test).toBeCalled();
      });

      test('to check if onClick fn is fired once', () => {
        const test = jest.fn();
        render(<BasicButton onClick={test}>Hello</BasicButton>);

        const button = screen.getByText('Hello');
        fireEvent.click(button);
        expect(test).toHaveBeenCalledTimes(1);
      });
  });