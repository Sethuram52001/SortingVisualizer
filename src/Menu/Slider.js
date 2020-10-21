import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sliderValue } from '../redux/actions';

class Slider extends Component {

    getSize = (e) => {
        //console.log(e.target.value);
        this.props.dispatch(sliderValue(e.target.value))
    }

    render() { 
        return ( 
            <div>
                <input type="range" min="0" max="100" id="changeSize" onChange={this.getSize} style={{background: "white", cursor: "pointer"}}></input>
            </div>
         );
    }
}
 
export default connect()(Slider);