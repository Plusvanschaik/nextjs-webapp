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
        <div>
            <img src={props.img}/>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>{props.price}</p>
            <button>Add</button>
        </div>
    )
}