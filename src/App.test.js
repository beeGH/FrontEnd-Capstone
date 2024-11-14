import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from "./componets/BookingForm";
import { BrowserRouter } from 'react-router-dom';


/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

describe("test", () => {
  test('Renders the BookingForm heading', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const headingElement = screen.getByText("Reservation");
    expect(headingElement).toBeInTheDocument();
  });
});
