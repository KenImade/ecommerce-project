import { useEffect, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

import CheckoutSchema from '../../schema/CheckoutSchema';

import { getCart, postSale } from "../cart/cartSlice";

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

    const {register, handleSubmit, formState: {errors}, reset } = useForm({
        resolver: yupResolver(CheckoutSchema)
    })

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

    const onSubmit = (data) => {
        const sale = {
            user: {...data},
            items: getSaleItems(), 
            total: saleSummary.grandTotal
        }
        dispatch(postSale(sale))
        reset()
        // TODO: Create confirmation modal
        console.log(sale)
    }

    const cartItems = useSelector(getCart)
  
    const getSum = (total, item) => {
      return total + (item.price * item.quantity);
    }
  
    const total = cartItems.reduce(getSum, 0);

    const saleSummary = {
        total: total,
        grandTotal: total + (total * VAT) + SHIPPING_VALUE,
        vat: VAT,
        shipping: SHIPPING_VALUE
    }

    

    useEffect(() => {
      setDisplayCart(false)
    }, [setDisplayCart])
    
    return (
        <>
            <ConfirmationModal items={cartItems} saleSummary={saleSummary}/>
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
                    <Summary submitForm={submitForm} items={cartItems} saleSummary={saleSummary} />
                </div>
            </section>
        </>
        
    )
}

export default Checkout