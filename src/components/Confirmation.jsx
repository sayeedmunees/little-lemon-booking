import React from 'react';

export default function Confirmation({ booking }) {
  return (
    <div className="confirmation">
      <h2>Booking Confirmed!</h2>
      <p>
        Thank you, <strong>{booking.name}</strong>. Your table for <strong>{booking.seats}</strong> on <strong>{booking.date}</strong> at <strong>{booking.time}</strong> is confirmed. A confirmation email will be sent to <strong>{booking.email}</strong>.
      </p>
    </div>
  );
}
