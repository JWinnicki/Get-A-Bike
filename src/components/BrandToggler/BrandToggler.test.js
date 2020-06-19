import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import {initialState} from '../../store/reducers/motorcyclesReducer'
import BrandToggler from './BrandToggler';

describe('BrandToggler', () => {
    afterEach(cleanup);

    test('render BrandToggler', () => {
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <BrandToggler 
                    brands={initialState.brands}
                    selectedBrand='Kawasaki'
                    clicked={jest.fn()}
                />
            </Router>
        );
    });

    test('check if there is button with text Kawasaki', () => {
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <BrandToggler 
                    brands={initialState.brands}
                    selectedBrand='Kawasaki'
                    clicked={jest.fn()}
                />
            </Router>
        );
        const button = screen.getByText('Kawasaki');
        expect(button).toBeInTheDocument();
    });

    test('check if there is button with text Honda', () => {
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <BrandToggler 
                    brands={initialState.brands}
                    selectedBrand='Kawasaki'
                    clicked={jest.fn()}
                />
            </Router>
        );
        const button = screen.getByText('Honda');
        expect(button).toBeInTheDocument();
    });

    test('check class of active button', () => {
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <BrandToggler 
                    brands={initialState.brands}
                    selectedBrand='Kawasaki'
                    clicked={jest.fn()}
                />
            </Router>
        );
        const button = screen.getByText('Kawasaki');
        expect(button).toHaveClass('BrandTogglerListItemLinkActive');
    });

    test('check class of button with text Kawasaki', () => {
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <BrandToggler 
                    brands={initialState.brands}
                    selectedBrand='Kawasaki'
                    clicked={jest.fn()}
                />
            </Router>
        );
        const button = screen.getByText('Yamaha');
        expect(button).toHaveClass('BrandTogglerListItemLink');
    });
});