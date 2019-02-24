import { GET_LIST, LOADING, ERROR } from './Actions';

const initialState = {
    data: [],
    isLoading: false,
    isErrored: false,
    errorText: '',
}

export default function imageLists(state = initialState, action) {
    switch(action.type) {
        case LOADING:
        state = {
            ...state,
            isLoading: true,
            isErrored: false,
            errorText: '',
        }
        return state
        case GET_LIST:
        const data = action.data;
        state = {
            ...state,
            data,
            isLoading: false,
            isErrored: false,
            errorText: '',
        }
        return state
        case ERROR:
        const errorText = action.err;
        state = {
            ...state,
            isErrored: true,
            isLoading: false,
            errorText,
        }
        return state;
        default:
        return state;
    }
}