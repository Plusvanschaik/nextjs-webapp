"use client"
import React from "react"
import Products from "./products"
import Product from "./components/Product"

export default function HomePage() {
    const productsArray = Products.map((product, index) => {
        return (
            <Product 
                key={index}
                id={product.id}
                title={product.title}
                author={product.author}
                description={product.description}
                price={product.price}
                img={product.img}
            />
        )
    })

    return (
        <div>
            <h1>Home</h1>
            <div>
                {productsArray}
            </div>
        </div>
    )
}