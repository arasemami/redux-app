import React,{Component} from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';



class PostForms extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:'',
            body:''
         }

         this.onChange = this.onChange.bind(this);
         this.onSubmit = this.onSubmit.bind(this);
    } 

    onChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    onSubmit(event){
        event.preventDefault();
        console.log("posting . . . .")
         const post = {
             title : this.state.title,
             body: this.state.body
         }

      // call from action
      this.props.createPost(post);
    }

    render() { 
        return ( 
            <div>
                <p>Post forms</p>

                <form onSubmit={this.onSubmit}>
                    <div>
                        <label> title: </label>
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
                    </div>
                    <div>
                        <label> body: </label>
                        <textarea name="body" onChange={this.onChange} value={this.state.body} />
                    </div>
                    <br />
                    <button type="submit">Save Data</button>
                 
                </form>
            </div>
         );
    }
}

 
export default connect(null, {createPost})(PostForms);