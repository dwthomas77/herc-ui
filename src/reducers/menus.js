import { SET_MENU, TOGGLE_MENU } from 'constants.js';

const initialState = {
    userMenu: { open: false },
};

function menus(state = initialState, action) {
    const { type, key, update } = action;
    if (type === SET_MENU) {
        return {
            ...state,
            [key]: { update }
        };
    } else if (type === TOGGLE_MENU) {
        const updatedState = {...state};
        updatedState[key].open = !updatedState[key].open;
        return updatedState;
    }
    return state;
}

export default menus;
