const initialState = {
    isLoggedIn: false,
    user: {
        id: '',
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        userType: '',
    }
};

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'LOGIN_USER':
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
