import React, { Component } from 'react';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <SortingVisualizer></SortingVisualizer>
      </div>
     );
  }
}
 
export default App;