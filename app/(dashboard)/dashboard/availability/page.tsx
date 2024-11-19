import React from 'react';
import PageWrapper from '../_components/ui/page.wrapper';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { getAvailability } from '@/lib/action/availability/get-avail';
import AvailForm from './_components/form/avail-form';

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const UserAvailability = async () => {
  const session = await auth();
  const userEmail = session?.user?.email;

  if (!session || !userEmail) {
    redirect('/');
  }

  // Fetch availability for the logged-in user
  const availability = await getAvailability(userEmail);

  

  return (
    <PageWrapper title="Availability">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-4 border col-span-1">
          <h2 className="text-lg font-semibold mb-4">Weekly Availability</h2>
            <div>
                <AvailForm
                initialData={availability}
                key={availability.id}
                userEmail={userEmail}
                />
            </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default UserAvailability;
