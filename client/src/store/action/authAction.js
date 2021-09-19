export const loginUser = (payload) => {
    return {
        type: 'LOGIN_USER',
        payload
    };
};

export const logoutUser = () => {
    return {
        type: 'LOGOUT_USER'
    };
};

export const updateUser = (payload) => {
    return {
        type: 'UPDATE_USER',
        payload
    };
};
