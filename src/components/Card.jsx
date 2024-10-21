import React from "react";
import { Link } from "react-router-dom";
import { IMG_URL } from "../confing";

const Card = (props) => {
// object de-structring =>   const{title,image,price}=props.item

  const{_id,product_name,product_price,product_image}=props.item
  return (
    <>
      <div className="col">
        <div className="card">
          <img
            src={`${IMG_URL}/${product_image}`}
            className="card-img-top"
            alt={product_name}
          />
          <div className="card-body">
            <h5 className="card-title">{product_name}</h5>
            <h5>${product_price}</h5>
            <Link to={`/productdetails/${_id}`} className="btn brn-primary">
              view details
            </Link>

          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
