const initialState = {
    youtubeData: [],
    toggleside: true

}

const MyReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'youtubeData':
            state = {
                ...state,
                youtubeData: action.payload

            }
            break;
        case 'toggle':
            state = {
                ...state,
                toggleside: !state.toggleside

            }
            break;



    }
    return state
}

export default MyReducer;