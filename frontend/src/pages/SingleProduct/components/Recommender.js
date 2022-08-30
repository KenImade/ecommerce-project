import { useEffect, useState } from 'react';
import Button from '../../../components/Button';

const Recommender = ({product, products}) => {

    const [randomProducts, setRandomProducts] = useState([]);

    let productCards = randomProducts.map(product => {
        return (
            <article key={product.title} className="product-card">
                <div>
                    <div className='product-img'>
                        <img src={product.preview.desktop} alt={product.title} />
                    </div>
                    <div className='product-info'>
                        <h4>{product.tag.split("-").join(" ")}</h4>
                        <Button className={"btn-one"} name={"see product"} link={`/${product.title}`} />
                    </div>
                </div>
            </article>
        )
    })

    useEffect(() => {
        setRandomProducts([...products]
            .filter(item => item.id !== product.id)
            .sort(() => Math.random() - 0.5).slice(0, 3))

        return () => {
            setRandomProducts([])
        }
    }, [product, products]);

    console.log(randomProducts);
    return (
        <section className='recommender'>
            <h3>You may also like</h3>
            <div className='cards'>{productCards}</div>
        </section>
    )
}

export default Recommender