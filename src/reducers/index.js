import linkHoverReducer from "./linkHover";
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    isHovered: linkHoverReducer
})

export default allReducers