import React, { useState, useEffect } from 'react';
import { fetchAvailableTimes } from '../utils/api.js';

export default function BookingForm({ onConfirm }) {
  const [date, setDate] = useState('');
  const [times, setTimes] = useState([]);
  const [time, setTime] = useState('');
  const [seats, setSeats] = useState(2);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (date) {
      fetchAvailableTimes(date).then(setTimes);
      setTime('');
    }
  }, [date]);

  function handleSubmit(e) {
    e.preventDefault();
    onConfirm({ date, time, seats, name, email });
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label>
        Date:
        <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
      </label>

      <label>
        Time:
        <select value={time} onChange={e => setTime(e.target.value)} required>
          <option value="">-- Select a time --</option>
          {times.map(t => <option key={t}>{t}</option>)}
        </select>
      </label>

      <label>
        Seats:
        <input type="number" min="1" max="10" value={seats} onChange={e => setSeats(e.target.value)} required />
      </label>

      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} required />
      </label>

      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      </label>

      <button type="submit" disabled={!time}>Confirm Booking</button>
    </form>
  );
}
