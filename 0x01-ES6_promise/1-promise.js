function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success){
                resolve({status: 200, body: 'Success'});
            }
            else {
                reject('The fake API is not working currently');
            }
        }, 1200)
    });
    
}
getFullResponseFromAPI().then(value => console.log(value))
                        .catch(error => console.error(error))

// export
export default getFullResponseFromAPI;