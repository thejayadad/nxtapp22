'use sever'



export async function createEvent(formData: FormData) {
    const bookingTimes = formData.get('bookingTimes');
    const length = formData.get('length');
    const title = formData.get('title');

    // Log the bookingTimes for testing
    console.log('BookingTimes Server:'+  bookingTimes );
    console.log('Length Server:' + length);
    console.log("Title Server " + title)

    // Perform additional actions (e.g., database insert) here if needed
}