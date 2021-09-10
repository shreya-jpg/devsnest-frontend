export interface User {
    username: string,
    profilePicture: string;
}

const updateUserb = (user: User) => {
    return {
        type: "UPDATE_USER",
        payload: user,
    };
};