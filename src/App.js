import React, { Component } from 'react';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from "react-redux";
import Slider from './Menu/Slider';

class App extends Component {

  render() { 
    const array = this.props.array;
    console.log(array)
    return ( 
      <div>
        <Slider></Slider>
        <SortingVisualizer array={array}></SortingVisualizer>
      </div>
     );
  }
}

const mapStateToProps = (state) => ({
  array: state.array
})
 
export default connect(mapStateToProps)(App);