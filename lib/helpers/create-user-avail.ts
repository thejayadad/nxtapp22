'use server'

import { daysOfWeek } from "@/app/(dashboard)/dashboard/_components/form/validation";
import { prisma } from "../prisma";

export const createDefaultAvailability = async (userEmail: string) => {
  const defaultAvailability = daysOfWeek.map((day) => ({
    userEmail,
    day,
    start: 0, // Midnight (12:00 AM)
    finish: 1440, // End of the day (11:59 PM)
    isAvailable: false,
  }));

  await prisma.availability.createMany({
    data: defaultAvailability,
  });
};
