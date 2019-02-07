import { GET_LIST } from './Actions';

const initialState = []

export default function imageLists(state = initialState, action) {
    switch(action.type) {
        case GET_LIST:
        state = 
        action.data
        return state
        default:
        return state
    }
}