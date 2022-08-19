import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItem, getCart } from '../../../features/cart/cartSlice';

const AddToCart = ({product}) => {
    const ITEM_QUANTITY = 1;

    const [count, setCount] = useState(ITEM_QUANTITY);

    const dispatch = useDispatch()
    const cart = useSelector(getCart)

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if (count !== 1) {
            setCount(count - 1)
        }
    }

    const addItemToCart = () => {
        const item = {
            id: product.id,
            title: product.title,
            tag: product.tag,
            price: product.price,
            quantity: count
        }
        dispatch(addItem(item))
        setCount(ITEM_QUANTITY)
        // TODO: Create alert banner
        
    }
    console.log(cart)
    return (
        <section className='actions'>
            <div className='numbers'>
                <button onClick={decrement}>-</button>
                <div>{count}</div>
                <button onClick={increment}>+</button>
            </div>

            <button className='btn-one' onClick={addItemToCart}>Add to Cart</button>
        </section>
    )
}

export default AddToCart