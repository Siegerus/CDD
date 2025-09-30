import getCurrentTime from '../utils/getCurrentTime.js';
import * as actionTypes from './actionTypes.js';

export function addCurrentTime() {     // Ф-ции создатели действий (actionCreators)
    return {
        type: actionTypes.ADD_CURRENT_TIME,
        payload: getCurrentTime(),
    }
}

export function clearTimes() {
    return {
        type: actionTypes.CLEAR_ALL_TIMES,
    }
}
