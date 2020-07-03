import React from 'react';
import {render, screen, cleanup, fireEvent} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import OptionToggle from './OptionToggle';

describe('OptionToggle', () => {
    afterEach(cleanup);

    test('render OptionToggle', () => {
        const testFn = jest.fn();
        render(<OptionToggle 
                    isRegistered={true}
                    toggleForm={testFn}
                />
        );
    });

    test('check if "Log In" text is rendered', () => {
        const testFn = jest.fn();
        render(<OptionToggle 
                    isRegistered={true}
                    toggleForm={testFn}
                />
        );
        const button = screen.getByText('Log In');
        expect(button).toBeInTheDocument();
    });

    test('check if "Create Account" text is not rendered', () => {
        const testFn = jest.fn();
        render(<OptionToggle 
                    isRegistered={false}
                    toggleForm={testFn}
                />
        );
        const button = screen.getByText('Create Account');
        expect(button).toBeInTheDocument();
    });

    test('check if onClick event is registered', () => {
        const testFn = jest.fn();
        render(<OptionToggle 
                    isRegistered={false}
                    toggleForm={testFn}
                />
        );
        const button1 = screen.getByText('Create Account');
        const button2 = screen.getByText('Log In');
        fireEvent.click(button1);
        fireEvent.click(button2);
        expect(testFn).toHaveBeenCalledTimes(2);
    });

    test('check if buttons have correct classed (user not registered)', () => {
        const testFn = jest.fn();
        render(<OptionToggle 
                    isRegistered={false}
                    toggleForm={testFn}
                />
        );
        const button1 = screen.getByText('Create Account');
        const button2 = screen.getByText('Log In');
        expect(button1).toHaveClass('OptionToggleButtonActive');
        expect(button1).not.toHaveClass('OptionToggleButton');
        expect(button2).toHaveClass('OptionToggleButton');
        expect(button2).not.toHaveClass('OptionToggleButtonActive');
    });

    test('check if buttons have correct classed (user registered)', () => {
        const testFn = jest.fn();
        render(<OptionToggle 
                    isRegistered={true}
                    toggleForm={testFn}
                />
        );
        const button1 = screen.getByText('Create Account');
        const button2 = screen.getByText('Log In');
        expect(button2).toHaveClass('OptionToggleButtonActive');
        expect(button2).not.toHaveClass('OptionToggleButton');
        expect(button1).toHaveClass('OptionToggleButton');
        expect(button1).not.toHaveClass('OptionToggleButtonActive');
    });
    
});