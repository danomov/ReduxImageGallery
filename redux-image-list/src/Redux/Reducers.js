import { GET_LIST, LOADING } from './Actions';

const initialState = {
    data: [],
    isLoading: false,
}

export default function imageLists(state = initialState, action) {
    switch(action.type) {
        case LOADING:
        state = {
            ...state,
            isLoading: true,
        }
        return state
        case GET_LIST:
        const data = action.data;
        state = {
            ...state,
            data,
            isLoading: false
        }
        return state
        default:
        return state
    }
}