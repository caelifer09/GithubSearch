import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import user from '@testing-library/user-event'
import FormSearch from "@/components/FormSearch";

describe('FormSearch', () => {
    it('should render properly', () => {
        const testFunction = jest.fn()
        render(<FormSearch getUser={testFunction}/>);

        const buttonP = screen.getByRole('button');
        expect(buttonP).toHaveTextContent(/search/i);

        const inputP = screen.getByPlaceholderText('Search github username')
        expect(inputP).toBeInTheDocument()
    });
    
    it('calls getUser with the entered username when the form is submitted', async () => {
        // Mock getUser function
        user.setup()
        const getUserMock = jest.fn();
        // Render the component
        render(
          <FormSearch getUser={getUserMock} />
        );
        const input = screen.getByPlaceholderText('Search github username') as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'johndoe' } });
        expect(input.value).toBe('johndoe');
        const buttonP = screen.getByRole('button');
        await user.click(buttonP)
        // expect(getUserMock.mock.calls).toBe(1);
        expect(getUserMock).toHaveBeenCalledTimes(1);
      });
});