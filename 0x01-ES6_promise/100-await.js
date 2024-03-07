import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
    let response = {};
    try {
        const myUser = await createUser();
        const myPhoto = await uploadPhoto();
        
        response = {
            myPhoto,
            myUser
        };

    } catch (error) {
        response = {
            photo: null,
            user: null
        };
    }
    return response;

}
export default asyncUploadUser;