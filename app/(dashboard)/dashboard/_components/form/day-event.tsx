import React from 'react';
import { daysOfWeek } from './validation';

const DayEvent = () => {
  return (
    <div>
      <div className='flex bg-orange-200 w-full p-2'>
        <div>
          {daysOfWeek.map((day) => (
            <label key={day} className="flex items-center space-x-2">
              <input
                name='bookingTimes'
                id='bookingTimes'
                defaultValue={day}
              type="checkbox" className="form-checkbox" />
              <span>{day}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DayEvent;
