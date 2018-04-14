const initialState = {
    counter: 0
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREASE':
            return { ...state, counter: action.payload };
        default:
            return state;
    }
};

export default rootReducer;