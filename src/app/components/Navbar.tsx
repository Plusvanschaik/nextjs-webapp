import React from "react";


export default function Navbar() {
    return (
        <nav>
            <img src="book_logo.png" className="logo"/>
            <div className="searchBar">
                <input type="text" placeholder="Zoeken..." />
            </div>
            <div className="shoppingCart">
                <i className="material-symbols-outlined shopping-cart">
                    shopping_cart
                </i>
                <span className="itemCounter">0</span>
            </div>
        </nav>
    )
}