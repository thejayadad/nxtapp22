'use client';

import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import { updateAvailability } from "@/lib/action/availability/availability-user-update";

interface Props {
  initialData: {
    start: string;
    finish: string;
    isAvailable: string;
    userEmail: string;
    day: string;
  };
  userEmail: string;
}

const AvailForm = ({ initialData, userEmail }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEdit = () => setIsEditing((current) => !current);

  const [formData, setFormData] = useState({
    start: initialData.start || "",
    finish: initialData.finish || "",
    day: initialData.day || "sunday", // Default to "sunday" if not provided
    userEmail: userEmail,
    isAvailable: initialData.isAvailable === "true",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await updateAvailability(formData); // Send data to the backend
      toggleEdit(); // Exit edit mode
    } catch (error) {
      console.error("Error updating availability:", error);
    }
  };

  return (
    <div>
      <div className="flex items-center space-x-2">
        <p>{formData.day}</p>
        <button onClick={toggleEdit}>
          {isEditing ? (
            <div className="hidden">x</div>
          ) : (
            <>unavailable</>
          )}
        </button>
        {!isEditing && <p>{formData.start}</p>}

        {isEditing && (
          <div className="flex w-full">
            <form
              onSubmit={handleSubmit}
              className="flex items-center w-full space-x-2"
            >
              <input
                type="hidden"
                name="userEmail"
                value={formData.userEmail}
                onChange={handleInputChange}
              />
              <input
                type="hidden"
                name="day"
                value={formData.day}
                onChange={handleInputChange}
              />
              <div className="flex items-center">
                <input
                  value={formData.start}
                  onChange={handleInputChange}
                  type="time"
                  name="start"
                  id="start"
                  className="border border-blue-300 w-full p-3 text-center rounded-lg"
                  placeholder="Start Time"
                />{" "}
                -
                <input
                  value={formData.finish}
                  onChange={handleInputChange}
                  type="time"
                  name="finish"
                  id="finish"
                  className="border border-blue-300 w-full p-3 text-center rounded-lg"
                  placeholder="Finish Time"
                />
              </div>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={toggleEdit}
                  className="text-red-600"
                >
                  <FiX className="h-4 w-4" />
                </button>
                <button
                  type="submit"
                  className="block lg:border lg:p-2 bg-blue-300 text-white lg:rounded-full border-blue-300"
                >
                  <FiPlus className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AvailForm;
    