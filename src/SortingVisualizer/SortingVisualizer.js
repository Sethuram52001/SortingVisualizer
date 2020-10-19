import React, { Component } from 'react';

class SortingVisualizer extends Component {
    state = { 
        array: []
     }

    componentDidMount() {
        console.log(this.randomIntFromInterval(1,5))
    }

    generateArray = () => {
        let array = [];
        for(let i=0;i<10;i++) {
            array.push(this.randomIntFromInterval(20,300))
        }
        this.setState({
            array
        })
        console.log(this.state.array)
    }

    render() { 

        const array = this.state.array;
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

    // random number generator
    randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random()*(max-min+1)+min);
    }
}
 
export default SortingVisualizer;