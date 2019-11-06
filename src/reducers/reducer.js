// initialState
export const initialState = [{
    name: '',
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
                }));
            case "CLEAR_COMPLETED_TODO":
                return (
                    state.filter(item => item.completed !== true)
                )
          default:
            return state;
        }
    }

