'use client';

import React, { useState } from 'react';
import Updateform from '../form/update-form';

const UpdateHandler = () => {
  const [isUnavailable, setIsUnavailable] = useState(false);

  // Toggle availability
  const handleCheckboxChange = () => {
    setIsUnavailable(!isUnavailable);
  };

  return (
    <div className="p-4 border rounded-md">
      <form className="space-y-4">
        <div className="flex items-center space-x-2">
          <label htmlFor="availability" className="text-sm font-medium">
            Unavailable
          </label>
          <input
            type="checkbox"
            id="availability"
            checked={isUnavailable}
            onChange={handleCheckboxChange}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
        </div>

        {/* Show UpdateForm when unavailable is toggled */}
        {isUnavailable && <Updateform onClose={() => setIsUnavailable(false)} />}
      </form>
    </div>
  );
};

export default UpdateHandler;
