import React, { Component } from 'react';
import { connect } from 'react-redux';
import { generateArray } from '../redux/actions';

class SortingVisualizer extends Component {
    

    componentDidMount() {
        console.log("props:"+this.props.array);
        console.log("document width"+document.body.clientWidth);
    }

    generateArray = () => {
        console.log(this.props.array);
        this.props.dispatch(generateArray());
        console.log(document.body.clientWidth);
        //const width = document.body.clientWidth;
        //console.log("width: " +Math.floor(width / (this.props.array.length * 3)));
    }

    render() { 

        const width = Math.floor(document.body.clientWidth / (this.props.array.length * 2.5));
        const array = this.props.array;
        const color = array.length < 15 ? "white" : "transparent";

        return ( 
            <div>
                <h1>Sorting Visualizer</h1>
                <button onClick={this.generateArray}>generate array</button>
                <div className="array-container">
                    {array.map((value, index) => (
                        <div className="array-bar" key={index} style={{backgroundColor: "red", height: `${value*1.3}px`, width: `${width}px`, color: color}}>{value}</div>
                    ))}
                    </div>
            </div>
         );
    }
}
 
export default connect()(SortingVisualizer);