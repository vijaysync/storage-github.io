const initialState = {
    token: ''
}

export const authreducer = (state=initialState, action) => {
    switch(action.type) {
        case 'token':
            return {
                ...state,
                token: action.response
            }
        default:
            return state;    

    }
}