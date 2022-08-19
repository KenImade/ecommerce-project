import { useDispatch } from 'react-redux'
import formatter from '../../../utils/currencyFormatter'
import { decreaseQuantity, increaseQuantity } from '../cartSlice'

const CartCard = ({product}) => {

    const dispatch = useDispatch()

    return (
        <article className="cart-card">
            <div className="cart-card-img">
                <img src={product.cartImage} alt={product.title} />
            </div>
            <div className='cart-card-info'>
                <h6>{product.tag.split("-").join(" ")}</h6>
                <div>{formatter.format(product.price)}</div>
            </div>
            <div className='cart-card-actions'>
                <button
                    onClick={() => dispatch(decreaseQuantity(product))}
                >
                    -
                </button>
                <p>{product.quantity}</p>
                <button
                    onClick={() => dispatch(increaseQuantity(product))}
                >
                    +
                </button>
            </div>
        </article>
    )
}

export default CartCard