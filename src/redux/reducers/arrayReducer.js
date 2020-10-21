import { CONSTANTS } from '../actions';

const initialState = [];
var sliderValue = 0;

const arrayReducer = (state = initialState, action) => {
    switch(action.type) {

        case CONSTANTS.SLIDER_VALUE:
            const slider_value = action.payload;
            console.log("redux"+slider_value)
            sliderValue = slider_value;

        case CONSTANTS.GENERATE_ARRAY:
            console.log("redux action called: generate array");
            let array = [];
            for(let i=0;i<sliderValue;i++) {
                array.push(Math.floor(Math.random()*(300-20+1)+20))
            }
            state = array;

        default:
            return state;
    }
}


export default arrayReducer;