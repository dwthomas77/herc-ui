import {
    SET_USER,
} from '../constants';

const defaultUser = {
    permissions: {},
    name: '',
    uid: '',
    authInitiated: false,
};

function user(state = defaultUser, action) {
    const { type, user } = action;

    if (type === SET_USER) {
        return {...user};
    } else {
        return state;
    }
}

export default user;