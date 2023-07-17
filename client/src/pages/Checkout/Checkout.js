import React from "react";
import { useEffect, useRef, useState } from "react";
import { Navigate, useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

import CheckoutSchema from '../../schema/CheckoutSchema';

import { getCart, postSale, removeAllItems } from "../../features/cart/cartSlice";

import "./assets/Checkout.css";

import CheckoutForm from "./components/CheckoutForm";
import Summary from "./components/Summary";
import ConfirmationModal from "./components/ConfirmationModal";

const Checkout = () => {
    const SHIPPING_VALUE = 50;
    const VAT = 0.2;
    const setDisplayCart = useOutletContext()[1]
    const dispatch = useDispatch()

    const submitForm = useRef();

    const [showModal, setShowModal] = useState(false);

    const {register, handleSubmit, formState: {errors}, reset } = useForm({
        resolver: yupResolver(CheckoutSchema)
    })

    const onSubmit = (data) => {
        const sale = {
            user: {...data},
            items: getSaleItems(), 
            total: saleSummary.grandTotal
        }
        console.log(sale)
        dispatch(postSale(sale))
        setShowModal(!showModal)
    }

    const getSaleItems = () => {
        const items = []
        cartItems.forEach((item) => {
            const {id, title, price, quantity} = item
            const saleItem = {
                id,
                title,
                price,
                quantity
            }
            items.push(saleItem)
        })
        return items;
    }

    const completeSale = () => {
        reset()
        dispatch(removeAllItems())
    }

    const cartItems = useSelector(getCart)
  
    const getSum = (total, item) => {
      return total + (item.price * item.quantity);
    }
  
    const total = cartItems.reduce(getSum, 0);

    const saleSummary = {
        total: total,
        grandTotal: total + SHIPPING_VALUE,
        vat: total * VAT,
        shipping: SHIPPING_VALUE
    }

    useEffect(() => {
      setDisplayCart(false)
    }, [setDisplayCart])

    if(cartItems.length === 0) {
        return <Navigate to="/"/>
    }
    
    return (
        <>
            {showModal && <ConfirmationModal completeSale={completeSale} items={cartItems} saleSummary={saleSummary}/>}
            <section className="checkout">
                <div className="left">
                    <CheckoutForm 
                        submitForm={submitForm} 
                        onSubmit={onSubmit}
                        register={register}
                        handleSubmit={handleSubmit}
                        errors={errors}
                    />
                </div>
                <div className="right">
                    <Summary submitForm={submitForm}  items={cartItems} saleSummary={saleSummary} />
                </div>
            </section>
        </>
        
    )
}

export default Checkout