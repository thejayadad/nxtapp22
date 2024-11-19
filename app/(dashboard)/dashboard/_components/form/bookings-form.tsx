import React from 'react';
import { availabilitySchema } from './validation';

const BookingsForm = () => {
  // Example data conforming to availabilitySchema
  const bookingTimes = [
    { day: 'Monday', from: '09:00', to: '17:00' },
    { day: 'Wednesday', from: '10:00', to: '14:00' },
  ];

  // Validate data using availabilitySchema (if needed)
  bookingTimes.forEach((booking) => {
    availabilitySchema.parse(booking); // Validates each booking against the schema
  });

  return (
    <div className="w-full max-w-lg mx-auto p-4 bg-gray-100 rounded-md">
      <h2 className="text-xl font-bold mb-4">Booking Times</h2>
      <div className="space-y-4">
        {bookingTimes.map((booking, index) => (
          <div
            key={index}
            className="p-4 border rounded-md shadow-sm flex bg-white"
          >
            <h3 className="font-medium">{booking.day}</h3>
            <p>
              <strong>From:</strong> {booking.from}
            </p>
            <p>
              <strong>To:</strong> {booking.to}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingsForm;
