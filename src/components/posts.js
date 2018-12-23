import React,{Component} from 'react';
import {connect} from 'react-redux'
import { fetchPosts } from '../actions/postActions'

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            posts:[]
         }
    }
    componentWillMount(){
        this.props.fetchPosts();
    }

 
    render() { 

        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <hr />
            </div>
        ))
        return ( 
            <div>
               {postItems}
            </div>
         );
    }
}
const mapStateToProps =  state => ({
    posts: state.posts.items
})
 
export default connect(mapStateToProps,{fetchPosts})(Posts);