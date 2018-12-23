import { FETCH_POSTS, NEW_POST} from './type'

export const fetchPosts = () => dispatch => {
    
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data =>  dispatch({
            type: FETCH_POSTS,
            payload: data
        }))
   
}