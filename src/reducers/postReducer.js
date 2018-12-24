import {FETCH_POSTS, NEW_POST, ADD_INCREMENT, ADD_DECREMENT} from '../actions/type';

const initialState = {
    items:[],
    item:{},
    sum:0
}

export default function(state = initialState, actions){


    switch (actions.type) {
          case FETCH_POSTS:
            return {
                ...state,
                items: actions.payload
            }
          case NEW_POST:
            return {
                ...state,
                item: actions.payload
            }
            case ADD_INCREMENT:
            return {
                ...state,
                sum: actions.payload
            }
            case ADD_DECREMENT:
            return {
                ...state,
                sum: actions.payload
            }


        default:
            return state
    }
}
