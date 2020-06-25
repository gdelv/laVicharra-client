const linkHoverReducer = (state = '', action) => {
    switch(action.type) {
        case 'FIRST_LINK':
            return state = 'firstBG'
        case 'SECOND_LINK':
            return state = 'secondBG'
        case 'THIRD_LINK':
            return state = 'thirdBG'
        default:
            return state = ''
    }
}

export default linkHoverReducer;