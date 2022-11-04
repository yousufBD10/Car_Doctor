import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {title,price,img,_id} = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          
          <div className="card-actions justify-between">
            <h3>{price}</h3>
            <Link to={`/checkout/${_id}`}><button className="btn btn-primary">Checkout</button></Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;