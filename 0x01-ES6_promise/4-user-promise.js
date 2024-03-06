function signUpUser(firstName, lastName) {
    return Promise
    .then(() => {
        console.log(`Promise {{firstName: ${firstName}, lastName: ${lastName}}}`);
    });
}