import React,{Component} from 'react';


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

         fetch('https://jsonplaceholder.typicode.com/posts',{
             method:'POST',
             headers: {
                 'content-type' : 'applicaion/json'
             },
             body : JSON.stringify(post)
         })
         .then(res => res.json())
         .then(data => console.log(data))
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
 
export default PostForms;