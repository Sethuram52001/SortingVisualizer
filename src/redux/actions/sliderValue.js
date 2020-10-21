import { CONSTANTS } from './index';

export const sliderValue = (slider_value) => ({
    type: CONSTANTS.SLIDER_VALUE,
    payload: slider_value
})