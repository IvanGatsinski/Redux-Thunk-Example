const initState = {
    fetchInfo: [],
    isLoading: false,
    error: false,
}

const fetchTestReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return { fetchInfo: action.fetchedData, isLoading: false, error: false }
        case 'LOADING_DATA':
            return { ...state, isLoading: true, error: false }
        case 'SHOW_ERROR':
            return { ...state, error: true, isLoading: false }
        default: return state;
    }
}
export default fetchTestReducer;