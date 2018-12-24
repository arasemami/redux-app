import React,{Component} from 'react';
import { connect} from 'react-redux';
import { IncrementData, DecrementData} from '../actions/postActions'


class SumComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { sum:0 }
        this.onIncrement = this.onIncrement.bind(this)
        this.onDecrement = this.onDecrement.bind(this)
        this.onChange = this.onChange.bind(this)
        this.GetValu = this.GetValu.bind(this)
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
        e.preventDefault();
         // call from acction
         this.props.DecrementData(this.props.sum);

    //    return this.setState({sum: this.state.sum - 1})
    }

    GetValu(e){
        e.preventDefault();  
        alert(this.props.sum)
    }


    render() { 
        return ( 
            <div>
                <p>Sum Component</p>

                <form >
                    <button type="submit" onClick={this.onDecrement}>-</button>
                    <input  type="text" onChange={this.onChange} value={this.props.sum}/>
                    <button type="submit" onClick={this.onIncrement}>+</button>
                    <button type="submit" onClick={this.GetValu}>GetValue</button>

                </form>
            </div>
         );
    }
}
 
const mapStateToProps =  state => ({
    sum: state.posts.sum
})

export default connect(mapStateToProps, {IncrementData, DecrementData} )(SumComponent);
