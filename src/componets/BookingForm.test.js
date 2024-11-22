import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from "./BookingForm";
import { BrowserRouter } from 'react-router-dom';
import { toHaveValue } from '@testing-library/jest-dom/matchers';
import Nav from './Nav';


describe("Render the Booking Form", () => {
    const availableTimes = ["17:00", "18:00"];
    const today = new Date().toISOString().split('T')[0];
    const mockOnTimeChange = jest.fn();
    const mockSubmitForm = jest.fn();

    test('renders BookingForm fields', () => {
        render(<BrowserRouter><BookingForm
            availableTimes={{ availableTimes: availableTimes }}
            OnTimeChange={mockOnTimeChange}
            submitForm={mockSubmitForm}
        />
        </BrowserRouter>
        );

        const dateInput = screen.getByLabelText(/Choose date/i);
        const timeSelect = screen.getByLabelText(/Choose time/i);
        const guestInput = screen.getByLabelText(/Number of guests/i);
        const occasionSelect = screen.getByLabelText(/Occasion/i);
        const indoorRadioButton = screen.getByLabelText(/Indoor/i)
        const outdoorRadioButton = screen.getByLabelText(/Outdoor/i)
        const submitButton = screen.getByRole("button");

        //fireEvent.change(dateInput, { target: {value: "2024-11-01" } });
       
        expect(dateInput.value).toBe("");
        expect(timeSelect.value).toBe("17:00");
        expect(guestInput.value).toBe("2");
        expect(occasionSelect.value).toBe("None");
        expect(indoorRadioButton).toBeChecked();
        expect(outdoorRadioButton).not.toBeChecked();
        expect(submitButton).toBeDisabled();
    });

    test('changing BookingForm fields', () => {
        render(<BrowserRouter><BookingForm
            availableTimes={{ availableTimes: availableTimes }}
            OnTimeChange={mockOnTimeChange}
            submitForm={mockSubmitForm}
        />
        </BrowserRouter>
        );

        const dateInput = screen.getByLabelText(/Choose date/i);
        const timeSelect = screen.getByLabelText(/Choose time/i);
        const guestInput = screen.getByLabelText(/Number of guests/i);
        const occasionSelect = screen.getByLabelText(/Occasion/i);
        const indoorRadioButton = screen.getByLabelText(/Indoor/i)
        const outdoorRadioButton = screen.getByLabelText(/Outdoor/i)
        const submitButton = screen.getByRole("button");

        //fireEvent.change(dateInput, { target: {value: "2024-11-01" } });
        fireEvent.change(timeSelect, { target: {value: "18:00" } });
        fireEvent.change(guestInput, { target: {value: "3" } });
        fireEvent.click(outdoorRadioButton);
        fireEvent.change(occasionSelect, { target: {value: "Anniversary"}})
       
        expect(timeSelect.value).toBe("18:00");
        expect(guestInput.value).toBe("3");
        expect(occasionSelect.value).toBe("Anniversary");
        expect(indoorRadioButton).not.toBeChecked();
        expect(outdoorRadioButton).toBeChecked();
        expect(submitButton).toBeDisabled();
    });
});
