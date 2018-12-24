import React,{Component} from 'react';
import { connect} from 'react-redux';
import { IncrementData} from '../actions/postActions'


class SumComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { sum:0 }
        this.onIncrement = this.onIncrement.bind(this)
        this.onDecrement = this.onDecrement.bind(this)
        this.onChange = this.onChange.bind(this)
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onIncrement(e){ 
        e.preventDefault();
       // call from acction
       this.props.IncrementData(this.props.sum);
    }

    onDecrement(e){
        console.log(e.target)
        e.preventDefault();
        return this.setState({sum: this.state.sum - 1})
    }


    render() { 
        return ( 
            <div>
                <p>Sum Component</p>

                <form >
                    <button type="submit" onClick={this.onDecrement}>-</button>
                    <input  type="text" onChange={this.onChange} value={this.props.sum}/>
                    <button type="submit" onClick={this.onIncrement}>+</button>
                </form>
            </div>
         );
    }
}
 
const mapStateToProps =  state => ({
    sum: state.posts.sum
})

export default connect(mapStateToProps, {IncrementData} )(SumComponent);
