import { isTemplateElement } from "@babel/types";

// reducer
export const reducer = (state, action) => {
        switch(action.type) {
          default:
            return state;
        }
    }

// initialState
export const initialState = {
    item: '',
    completed: false,
    id: Date.now()
};