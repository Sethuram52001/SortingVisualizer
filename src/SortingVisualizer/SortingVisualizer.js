import React, { Component } from 'react';
import { connect } from 'react-redux';
import { generateArray } from '../redux/actions';

class SortingVisualizer extends Component {
    

    componentDidMount() {
        console.log("props:"+this.props.array)
    }

    generateArray = () => {
        console.log(this.props.array);
        this.props.dispatch(generateArray());
    }

    render() { 

        const array = this.props.array;
        return ( 
            <div>
                <h1>Sorting Visualizer</h1>
                <button onClick={this.generateArray}>generate array</button>
                <div className="array-container">
                    {array.map((value, index) => (
                        <div className="array-bar" key={index} style={{backgroundColor: "red", height: `${value}px`}}>{value}</div>
                    ))}
                </div>
            </div>
         );
    }
}
 
export default connect()(SortingVisualizer);