import React,{Component} from 'react';
import { connect } from 'react-redux';
import { SelectValue } from '../actions/postActions';


class DropList extends Component {
    constructor(props) {
        super(props);
        this.state = { getValue:'No Select' }
        this.onChange = this.onChange.bind(this)
    }

    onChange(e){
        // call from action
       this.props.SelectValue(e.target.value);
       //this.setState({getValue: e.target.value})
    }
    render() { 
        return ( 
            <div>
                <p>Drop list</p>
                <select key={this.props.name} onChange={this.onChange} name={this.props.name}>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>

                <p>{this.props.getValue}</p>
            </div>
         );
    }
}
const mapStateToProps = state => ({
 getValue: state.posts.ValueSelect
})

export default connect(mapStateToProps, { SelectValue }) (DropList);