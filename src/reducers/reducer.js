// initialState
export const initialState = [{
    name: 'Todo',
    id: Date.now(),
    completed: false
}];

// reducer
export const reducer = (state, action) => {
        switch(action.type) {
            case "ADD_NEW_TODO":
                return [ 
                    ...state, 
                    action.payload
                ];
          default:
            return state;
        }
    }

