import { GET_LIST } from './Actions';

const initialState = {
    data: [],
}

export default function imageLists(state = initialState, action) {
    switch(action.type) {
        case GET_LIST:
        const data = action.data;
        state = {
            ...state,
            data
        }
        return state
        default:
        return state
    }
}