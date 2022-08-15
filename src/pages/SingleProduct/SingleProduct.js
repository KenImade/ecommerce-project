import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';

import Advert from "../../components/Advert/Advert";
import CategoryCardSection from "../../components/CategoryCard/CategoryCardSection";
import "./assets/SingleProduct.css";

import { getProductsError, getProductsStatus, selectAllProducts, fetchProducts } from '../../features/products/productsSlice';
import ProductHero from "./components/ProductHero";
import ProductDescription from "./components/ProductDescription";
import Gallery from "./components/Gallery";
import Recommender from "./components/Recommender";

const SingleProduct = () => {
    const title = useParams();

    const dispatch = useDispatch();

    const products = useSelector(selectAllProducts)
    const productsStatus = useSelector(getProductsStatus)
    const error = useSelector(getProductsError)
  
    useEffect(() => {
      if(productsStatus === 'idle') {
        dispatch(fetchProducts())
      }
    }, [productsStatus, dispatch])

    if (productsStatus === 'loading') {
        // TODO: Create spinner
      return  <p>"Loading..."</p>;
    } else if (productsStatus === 'failed') {
        // TODO: Create custom error page
        return <p>{error}</p>
    } else if (productsStatus === 'succeeded') {
        const product = products.find(product => product.title === title.productTitle)
        return (
            <section className="single-product">
                <ProductHero product={product} />
                <ProductDescription product={product} />
                <Gallery product={product} />
                <Recommender products={products} />
                <CategoryCardSection />
                <Advert />
            </section>
        )
    }
}

export default SingleProduct;