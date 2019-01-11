import React, { Component } from "react"
import { connect } from 'react-redux'
import { getValues } from '../actions/actions'
import ItemsList from './ItemsList'

class TodoDashboard extends Component {

    handleFetchData = (e) => {
        e.preventDefault()

        this.props.getData()
    }
    render() {
        const data = this.props.values.fetchTestReducer.fetchInfo
        const isLoading = this.props.values.fetchTestReducer.isLoading
        const error = this.props.values.fetchTestReducer.error

        const loader = isLoading ? <h3>Loading...</h3> : null;
        const errorOccured = error ? <h3>AN ERROR HAS OCCURED!!!</h3> : null

        return (<div>
            <button onClick={this.handleFetchData}>Get data</button>
            {loader}{errorOccured}
            <ItemsList data={data} />
        </div>)
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        values: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => { dispatch(getValues()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoDashboard);