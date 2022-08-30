
const ProductDescription = ({product}) => {
    let content = product.features.split("\n/")
    
    let paragraphs = content.map((line, index) => {
        return <p className="body" key={index}>{line}</p>
    })

    let accessories = product.accessories.map((item, index) => {
        return (
            <li  key={index}>
                <span 
                    style={{color: "var(--orange)", fontWeight: 700}}
                    className="qty"
                >
                    {`${item.quantity}x`}
                </span>
                <span className="body">{item.name}</span>
            </li>
        )
    })

    return (
        <section className='product-desc'>
            <div className="features">
                <h3>Features</h3>
                <div>{paragraphs}</div>
            </div>
            
            <div className="in-the-box">
                <h3>in the box</h3>
                <ul>{accessories}</ul>
            </div>
        </section>
    )
}

export default ProductDescription