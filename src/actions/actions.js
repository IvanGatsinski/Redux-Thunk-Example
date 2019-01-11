export const getValues = () => {
    return (dispatch, getState) => {
        dispatch({ type: 'LOADING_DATA' })
        fetch('https://fakerestapi.azurewebsites.net/api/Books')
            .then((res) => res.json())
            .then((data) => {
                dispatch({ type: 'FETCH_DATA', fetchedData: data })
            })
            .catch((error) => {
                dispatch({ type: 'SHOW_ERROR' })
            })
    }
}
