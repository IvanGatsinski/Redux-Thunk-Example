import React from 'react'
import Item from './Item'

const ItemsList = ({ data }) => {

    return (<React.Fragment>
        {data && data.map(item =>
            <Item key={item.ID} id={item.ID} title={item.Title} description={item.Description} />)}
    </React.Fragment>)
}

export default ItemsList