import React from 'react';
import {render, screen, cleanup} from '../../test-utils';
import {Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import "@testing-library/jest-dom/extend-expect";
import {createStore} from 'redux'

import Header from './Header';

describe('Header', () => {
    afterEach(cleanup);
    
    test('renders Header component', () => {
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <Header/>
            </Router>
        );
    });

    test('render w/o token (main header)', () => {
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <Header/>
            </Router>
        );
  
        expect(screen.getAllByText('Log In')[0]).toBeInTheDocument();
      });

      test('render w/o token (burger menu)', () => {
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <Header/>
            </Router>
        );
  
        expect(screen.getAllByText('Log In')[1]).toBeInTheDocument();
      });

      test('render with token (main header)', () => {
        const history = createMemoryHistory();
        const store = createStore(() => ({ 
            auth: {
                token: true 
            }
        }))
        render(
            <Router history={history}>
                <Header/>
            </Router>, {
                store
            }

        );
        expect(screen.getAllByText('Profile')[0]).toBeInTheDocument();
      });

      test('render with token (burger menu)', () => {
        const history = createMemoryHistory();
        const store = createStore(() => ({ 
            auth: {
                token: true 
            }
        }))
        render(
            <Router history={history}>
                <Header/>
            </Router>, {
                store
            }

        );
        expect(screen.getAllByText('Profile')[1]).toBeInTheDocument();
      });
  });