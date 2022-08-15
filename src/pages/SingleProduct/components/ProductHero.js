import AddToCart from './AddToCart'

const ProductHero = ({product}) => {

    let formatter = new Intl.NumberFormat('en-US', {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0
    })

    return (
        <section className='product-hero'>
            <div className='product-hero-img'>
                <img src={product.preview.desktop} alt={product.title} />
            </div>

            <div className='product-hero-info'>
                {product.isNew && <p className="overline">new product</p>}
                <h2>{product.title.split("-").join(" ")}</h2>
                <p className="product-text body">{product.info}</p>
                <p className='product-price'>{formatter.format(product.price)}</p>
                <AddToCart product={product} />
            </div>
        </section>
    )
}

export default ProductHero