function signUpUser(firstName, lastName) {
    return Promise.resolve(
        {
            firstName,
            lastName
        },
    );
}
// Export
export default signUpUser;