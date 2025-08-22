import React, { useState } from 'react';
import Header from './components/Header.jsx';
import BookingForm from './components/BookingForm.jsx';
import Confirmation from './components/Confirmation.jsx';

export default function App() {
  const [booking, setBooking] = useState(null);

  return (
    <div className="app">
      <Header />
      {booking ? (
        <Confirmation booking={booking} />
      ) : (
        <BookingForm onConfirm={setBooking} />
      )}
    </div>
  );
}
