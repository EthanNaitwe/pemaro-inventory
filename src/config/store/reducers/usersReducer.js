import { CREATE_USER_FAILURE, CREATE_USER_REQUEST, CREATE_USER_SUCCESS, FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, GET_PROFILE_FAILURE, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS } from '../actions/userActions';

const initialState = {
    user: null,
    loading: false,
    error: null,
    creating: false,
    logging: false,

    authUser: {},
    profileError: null,
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return { ...state, loading: true };
        case FETCH_USER_SUCCESS:
            return { ...state, loading: false, user: action.payload };
        case FETCH_USER_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case CREATE_USER_REQUEST:
            return { ...state, creating: true };
        case CREATE_USER_SUCCESS:
            return { ...state, creating: false, user: action.payload };
        case CREATE_USER_FAILURE:
            return { ...state, creating: false, error: action.payload };

        case LOGIN_USER_REQUEST:
            return { ...state, logging: true };
        case LOGIN_USER_SUCCESS:
            localStorage.setItem("token", action.payload.token);
            return { ...state, logging: false };
        case LOGIN_USER_FAILURE:
            return { ...state, logging: false, error: action.payload };

        case GET_PROFILE_REQUEST:
            return { ...state, gettingProfile: true, profileError: null };
        case GET_PROFILE_SUCCESS:
            return { ...state, gettingProfile: false, authUser: action.payload };
        case GET_PROFILE_FAILURE:
            return { ...state, gettingProfile: false, profileError: action.payload };
        default:
            return state;
    }
};
