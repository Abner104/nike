import React from 'react'
import '../css/Details.css'

const ItemDetail = ({ data }) => {

    return (
        <div className="details">
            <img src={data.image} alt='' />
            <div className="box">
                <div className="row">
                <h2>{data.title}</h2>
                <p>{data.price}</p>
                </div>
            </div>
        </div>

    )
}

export default ItemDetail