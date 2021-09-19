const initialState = {
    isLoggedIn: false,
    user: {
        userID: '',
        fname: '',
        lname: '',
        phone: '',
        address: '',
        email: '',
        userType: '',
        userImage: '',
    }
};

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'LOGIN_USER':
            return {
                isLoggedIn: true,
                ...payload
            };
        case 'UPDATE_USER':
            return {
                isLoggedIn: true,
                ...payload
            };
        case 'LOGOUT_USER':
            return initialState;
        default:
            return state;
    }
};

export default authReducer;
