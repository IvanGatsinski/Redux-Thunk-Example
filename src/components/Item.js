import React from 'react'

const Item = ({ id, title, description }) => {

  return (
    <p className="single-p">
      Id: {id}, Title: {title}, Description: {description}
    </p>
  )
}
export default Item;