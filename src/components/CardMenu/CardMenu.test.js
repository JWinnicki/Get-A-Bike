import React from 'react';
import {render, screen, cleanup, fireEvent} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import CardMenu from './CardMenu';

describe('CardMenu', () => {
    afterEach(cleanup);

    test('render CardMenu', () => {
        render(<CardMenu 
                    options={['Option1', 'Option2', 'Option3']}
                    selected='Option1'
                    clicked={jest.fn()}
                />
        );
    });

    test('to check if all buttons are rendered', () => {

        const options = ['Option1', 'Option2', 'Option3'];

        render(<CardMenu 
                    options={options}
                    selected='Option1'
                    clicked={jest.fn()}
                />
        );
        expect(screen.getByText('Option1')).toBeInTheDocument();
        expect(screen.getByText('Option2')).toBeInTheDocument();
        expect(screen.getByText('Option3')).toBeInTheDocument();

        expect(document.querySelectorAll('button').length).toBe(options.length)
    });

    test('to check if selected option button has active class', () => {

        const selectedOption = 'Option2'

        render(<CardMenu 
                    options={['Option1', 'Option2', 'Option3']}
                    selected={selectedOption}
                    clicked={jest.fn()}
                />
        );

        const button = screen.getByText(selectedOption);

        expect(button).toHaveClass('CardMenuItemButtonActive');
    });

    test('to check if not selected options have not active class', () => {

        const selectedOption = 'Option2'

        render(<CardMenu 
                    options={['Option1', 'Option2', 'Option3']}
                    selected={selectedOption}
                    clicked={jest.fn()}
                />
        );

        expect(screen.getByText('Option1')).not.toHaveClass('CardMenuItemButtonActive');
        expect(screen.getByText('Option3')).not.toHaveClass('CardMenuItemButtonActive');

        expect(screen.getByText('Option1')).toHaveClass('CardMenuItemButton');
        expect(screen.getByText('Option3')).toHaveClass('CardMenuItemButton');
    });

    test('to check if not active will change into active after click', async () => {
        let selectedOption = 'Option2';
        const options = ['Option1', 'Option2', 'Option3'];
        const changeSelected = () => selectedOption = 'Option1';

        const {rerender} = render(<CardMenu 
                                    options={options}
                                    selected={selectedOption}
                                    clicked={changeSelected}
                                />
        );
        
        expect(screen.getByText('Option1')).not.toHaveClass('CardMenuItemButtonActive');
        
        fireEvent.click(screen.getByText('Option1'));

        rerender(<CardMenu 
                    options={options}
                    selected={selectedOption}
                    clicked={changeSelected}
                />
        )
        expect(screen.getByText('Option1')).toHaveClass('CardMenuItemButtonActive');
    });
});