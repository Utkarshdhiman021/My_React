import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const Template = (props) => {
  return (
    <div className="card">

      <div className="image-section">
        <img src={props.image} alt={props.name} />
      </div>

      <div className="content-section">
        <h2>{props.name}</h2>

        <p>Size: {props.size}</p>

        <p>Color: {props.color}</p>

        <p>{props.description}</p>

        <h3>₹{props.price}</h3>

        <button><FaShoppingCart/> Add to Cart</button>
      </div>

    </div>
  )
}

export default Template