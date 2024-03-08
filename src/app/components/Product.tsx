import React from "react";


export default function Product(
    props: {
        id: number;
        title: string;
        author: string;
        description: string;
        price: number;
        img: string;
    }
) {
    return (
        <div className="productCard">
            <img className="productCardImg" src={props.img}/>
            <div className="productCardDetails">
                <h5>{props.author}</h5>
                <h1>{props.title}</h1>
                <p className="productDescription">{props.description}</p>
                <div className="productCardAddToCart">
                    <h3>{props.price}</h3>
                    <button className="addToCartBtn">Add</button>
                </div>
            </div>
        </div>
    )
}