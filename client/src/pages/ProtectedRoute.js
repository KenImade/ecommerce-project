import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {Navigate} from "react-router-dom";
import { getCart } from "../features/cart/cartSlice";


function ProtectedRoute({children}) {
    const cart = useState(useSelector(getCart))[0]

    if (cart.length === 0 ) {
        return <Navigate to='/' />
    }

    return children;
}

export default ProtectedRoute