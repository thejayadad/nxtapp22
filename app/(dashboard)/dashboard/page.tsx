import { auth } from '@/auth';
import { createDefaultAvailability } from '@/lib/helpers/create-user-avail';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';
import React from 'react';

const DashboardPage = async () => {
  const session = await auth();

//   Redirect if no session
  if (!session || !session.user?.email) {
    redirect('/');
    return null; // Ensure no further execution
  }

  const userEmail = session.user.email;

  // Ensure availability is created only if it doesn't exist
  const existingAvailability = await prisma.availability.findFirst({
    where: { userEmail },
  });

  if (!existingAvailability) {
    await createDefaultAvailability(userEmail);
  }

  return (
    <div className='px-12'>
      DashboardPage
    </div>
  );
};

export default DashboardPage;
