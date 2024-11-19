import { z } from "zod";

// Array of all days of the week
export const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

// Session increments (in minutes)
export const sessionIncrements = [15, 30, 60]; // 15 min, 30 min, 1 hour

// Zod Schema for available days and hours
export const availabilitySchema = z.object({
  day: z.enum(daysOfWeek), // Ensures valid day of the week
  from: z.string().refine((time) => /^([01]\d|2[0-3]):([0-5]\d)$/.test(time), {
    message: "Invalid time format. Use HH:mm (24-hour format).",
  }), // Validates time format
  to: z.string().refine((time) => /^([01]\d|2[0-3]):([0-5]\d)$/.test(time), {
    message: "Invalid time format. Use HH:mm (24-hour format).",
  }),
});

// Zod Schema for session increment
export const sessionSchema = z.object({
  increment: z.enum(sessionIncrements.map(String) as unknown as [string, ...string[]]),
});
