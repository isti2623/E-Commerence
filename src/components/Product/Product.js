import React from 'react';

import './Product.css'

const Product = (props) => {
    console.log(props);
    /* const {img,name, price } = props.Product  */
    return (
        <div className="col-md-4 g-4">
            <div className="item-product container-fluid mt-3">


                <div class="card h-100">
                    <img src={props.product.img} class="card-img-top" alt="..."></img>
                    <div class="card-body">
                        <h5 class="card-title">{props.product.name.slice(0, 30)}</h5>
                        <p class="card-text">Price: {props.product.price}</p>
                    </div>
                    <div onClick={() => props.handleAddToBag(props.product)} className="btn btn-danger">Add To Bag</div>
                </div>


            </div>

        </div>
    );
};

export default Product;