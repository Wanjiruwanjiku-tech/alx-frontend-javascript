import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
    // Call the Imported functions
    const userPromise = signUpUser(firstName, lastName);
    const photoPromise = uploadPhoto(fileName);

    // Use Promise.allSettled to wait for all promises to settle
    return Promise.allSettled([userPromise, photoPromise])
    
    // Map over the array of result from the function above
    .then((results) => results.map((result) => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason.message,
    })))

}