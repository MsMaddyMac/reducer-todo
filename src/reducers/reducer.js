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
            case "TOGGLE_COMPLETED_TODO":
                return (
                    state.map(item => {
                    if (item.id === action.payload) {
                        return { ...item, completed: !item.completed }
                    } else {
                        return item;
                    }
                }))
          default:
            return state;
        }
    }

