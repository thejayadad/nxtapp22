'use server';

import { prisma } from "@/lib/prisma";

export async function updateAvailability(eventData: {
  start: string;
  finish: string;
  day: string;
  userEmail: string;
}) {
  if (!eventData || Object.keys(eventData).length === 0) {
    console.log("Received invalid eventData:", eventData);
    throw new Error("Invalid event data provided.");
  }

  try {
    const { start, finish, day, userEmail } = eventData;

    console.log("start", start);
    console.log("finish", finish);
    console.log("day", day);
    console.log("userEmail", userEmail);

    const updatedAvailability = await prisma.availability.upsert({
      where: { userEmail_day: { userEmail, day } },
      update: { start, finish, isAvailable: true },
      create: { start, finish, day, userEmail, isAvailable: true },
    });

    return updatedAvailability;
  } catch (error) {
    console.error("Error updating availability:", error);
    throw new Error("Unable to update availability.");
  }
}
