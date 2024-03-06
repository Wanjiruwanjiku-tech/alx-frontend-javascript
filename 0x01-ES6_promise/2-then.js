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