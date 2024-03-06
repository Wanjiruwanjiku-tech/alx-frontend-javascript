// Return a promise
function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('');
        }, 1000)
    });
    
}
// Chaining
getResponseFromAPI().then(value => console.log(value))

// Export
export default getResponseFromAPI;