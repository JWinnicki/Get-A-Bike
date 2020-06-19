import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import BurgerMenu from './BurgerMenu';

describe('BurgerMenu', () => {
    afterEach(cleanup);

    test('render BurgerMenu with Log In link', () => {
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <BurgerMenu 
                    togglePath='/login'
                />
            </Router>
        );
        
        expect(screen.getByText('Log In')).toBeInTheDocument();
    });

    test('render BurgerMenu with Profile link', () => {
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <BurgerMenu 
                    togglePath='/profile'
                />
            </Router>
        );
        
        expect(screen.getByText('Profile')).toBeInTheDocument();
    });

    test('to check if Log In text will be rendered with /profile route', () => {
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <BurgerMenu 
                    togglePath='/profile'
                />
            </Router>
        );
        
        expect(screen.queryByText('Log In')).not.toBeInTheDocument();
    });

    test('to check if Profile text will be rendered with /login route', () => {
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <BurgerMenu 
                    togglePath='/login'
                />
            </Router>
        );
        
        expect(screen.queryByText('Profile')).not.toBeInTheDocument();
    });

    test('to check how many links will be rendered', () => {
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <BurgerMenu 
                    togglePath='/login'
                />
            </Router>
        );
        
        expect(document.querySelectorAll(".BurgerMenuListItemLink")).toHaveLength(6);
    });

    test('to check inner HTML of last link', () => {
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <BurgerMenu 
                    togglePath='/login'
                />
            </Router>
        );
        
        expect(document.querySelectorAll(".BurgerMenuListItemLink")[5].innerHTML).toBe('Log In');
    });
});