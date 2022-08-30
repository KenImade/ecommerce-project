import { useState } from 'react';

import cashOnDeliveryImg from "../assets/icon-cash-on-delivery.svg";

const CheckoutForm = ({submitForm, onSubmit, register, handleSubmit, errors}) => {

    const [isActive, setIsActive] = useState("")

    const higlightPaymentMethod = (value) => {
        setIsActive(value)
    }

    return (
        <>
            <form className='checkout-form' onSubmit={handleSubmit(onSubmit)}>
                <h3 className='checkout-form-title'>checkout</h3>
                <p className='sub-title'>billing details</p>
                <section className='billing'>
                    <div className='form-group'>
                        <label htmlFor="name" style={{color: errors.name ? "red" : ""}}>
                            Name {errors.name && <span>Wrong Input</span>}
                        </label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder='Kenneth Imade'
                            {...register("name")}
                            style={{border: errors.name ? "1px solid red" : ""}}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="email" style={{color: errors.email ? "red" : ""}}>
                            Email {errors.email && <span>Wrong Input</span>}
                        </label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder='ken@email.com'
                            {...register("email")}
                            style={{border: errors.email ? "1px solid red" : ""}}
                        />
                    </div>
                    
                    <div className='form-group'>
                        <label htmlFor="phonenumber" style={{color: errors.phoneNumber ? "red" : ""}} >
                            Phone Number {errors.phoneNumber && <span>wrong input</span>}
                        </label>
                        <input 
                            type="tel" 
                            id="phonenumber" 
                            name="phoneNumber" 
                            placeholder='+234 705 123 4567'
                            {...register("phoneNumber")}
                            style={{border: errors.phoneNumber ? "1px solid red" : ""}}
                        />
                    </div>
                </section>

                <p className='sub-title'>shipping info</p>
                <div>
                    <div className='form-group address'>
                        <label htmlFor="address" style={{color: errors.address ? "red" : ""}}>
                            Address {errors.address && <span>wrong input</span>}
                        </label>
                        <input 
                            type="text" 
                            id="address" 
                            name="address" 
                            placeholder='113 Golden Avenue'
                            {...register("address")}
                            style={{border: errors.address ? "1px solid red" : ""}}
                        />
                    </div>
                    <section className='checkout-form-section'>
                        <div className='form-group'>
                            <label htmlFor="zipCode" style={{color: errors.zipCode ? "red" : ""}}>
                                ZIP Code {errors.zipCode && <span>wrong input</span>}
                            </label>
                            <input 
                                type="text" 
                                id="zipCode" 
                                name="zipCode" 
                                placeholder='10001'
                                {...register("zipCode")}
                                style={{border: errors.zipCode ? "1px solid red" : ""}} 
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="city" style={{color: errors.city ? "red" : ""}}>
                                City {errors.city && <span>wrong input</span>}
                            </label>
                            <input 
                                type="text" 
                                id="city" 
                                name="city" 
                                placeholder='Lagos'
                                {...register("city")}
                                style={{border: errors.city ? "1px solid red" : ""}} 
                            />
                        </div>
                    
                        <div className='form-group'>
                            <label htmlFor="country" style={{color: errors.country ? "red" : ""}}>
                                Country {errors.country && <span>wrong input</span>}
                            </label>
                            <input 
                                type="text" 
                                id="country" 
                                name="country" 
                                placeholder='Nigeria' 
                                {...register("country")}
                                style={{border: errors.country ? "1px solid red" : ""}} 
                            />
                        </div>
                    </section>
                </div>

                <p className='sub-title'>payment details</p>
                {errors.payment && <p className='payment-error'>please choose a payment method</p>}
                <section className='payment'>
                    <p>Payment method</p>
                    <div className='payment-methods'>
                        <label 
                            className={`radio-btn ${isActive === "e-money" ? " active" : ""}`}
                            onClick={() => higlightPaymentMethod("e-money")}
                        >
                            <input 
                                type="radio" 
                                id="payment" 
                                name="payment" 
                                value="e-money" 
                                className='radio-btn-input'
                                {...register("payment")}
                            />
                            <div className='radio__radio'></div>
                            e-Money
                        </label>
                        
                        <label 
                            className={`radio-btn ${isActive === "cash" ? " active" : ""}`}
                            onClick={() => higlightPaymentMethod("cash")}
                        >
                            <input 
                                type="radio" 
                                id="payment" 
                                name="payment" 
                                value="cash" 
                                className='radio-btn-input'
                                {...register("payment")}
                            />
                            <div className='radio__radio'></div>
                            Cash on Delivery
                        </label>
                    </div>
                </section>

                {isActive === "cash" && <div className='cash-on-delivery'>
                    <img src={cashOnDeliveryImg} alt="cash on delivery" />
                    <p className='body'>
                        The ‘Cash on Delivery’ option enables you to pay in cash when 
                        our delivery courier arrives at your residence. Just make sure 
                        your address is correct so that your order will not be cancelled.
                    </p>
                </div>}
                <button ref={submitForm} type="submit" style={{ display: 'none' }} />
                {/* <button type='submit'>Submit form</button> */}
            </form>
            
        </>
        
    )
}

export default CheckoutForm