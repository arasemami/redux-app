import {FETCH_POSTS, NEW_POST} from '../actions/type';

const initialState = {
    items:[],
    item:{}
}

export default function(state = initialState, actions){


    switch (actions.type) {
          case FETCH_POSTS:
          return {
              ...state,
              items: actions.payload
          }


        default:
            return state
    }
}
