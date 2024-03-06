// The function takes a promise as an arg and appends 3 event handlers to it
// If it resolves returns an obj with info
// If it rejects it returns an empty error obj
// For every resolution (whether the promise resolves or rejects),
// it should log the message "Got a response from the API" to the console.
function handleResponseFromAPI(promise) {
    // Promise Handling
    promise.then(() => {
        console.log('Got a response from the API');
        return {status: 200, body: 'success'};
    })
    //Error Handling
    .catch(() => {
        console.log('Got a response from the API');
        // Return an empty error obj
        return new Error()
    });
}

// Export the function
export default handleResponseFromAPI;