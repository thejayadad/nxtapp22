'use server';

import { prisma } from "@/lib/prisma";


export async function getAvailability(userEmail: string) {
  try {
    const userAvail = await prisma.availability.findMany({
      where: {
        userEmail,
      },
      orderBy: {
        day: 'asc', // Order days for better readability
      },
    });

    return userAvail;
  } catch (error) {
    console.error("Get Availability Error: ", error);
    return [];
  }
}
