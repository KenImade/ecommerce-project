import {useState} from 'react';

const AddToCart = ({product}) => {
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if (count !== 0) {
            setCount(count - 1)
        }
    }

    return (
        <section className='actions'>
            <div className='numbers'>
                <button onClick={decrement}>-</button>
                <div>{count}</div>
                <button onClick={increment}>+</button>
            </div>

            <button className='btn-one'>Add to Cart</button>
        </section>
    )
}

export default AddToCart