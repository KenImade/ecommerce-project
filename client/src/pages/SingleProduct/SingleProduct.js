import { useParams, useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';

import Advert from "../../components/Advert/Advert";
import CategoryCardSection from "../../components/CategoryCard/CategoryCardSection";
import ProductHero from "./components/ProductHero";
import ProductDescription from "./components/ProductDescription";
import Gallery from "./components/Gallery";
import Recommender from "./components/Recommender";
import Spinner from "../../components/Spinner/Spinner";

import { getProductsError, getProductsStatus, selectAllProducts, fetchProducts } from '../../features/products/productsSlice';

import "./assets/SingleProduct.css";
import ErrorPage from "../ErrorPage/ErrorPage";

const SingleProduct = () => {
    const title = useParams();

    const dispatch = useDispatch();

    const products = useSelector(selectAllProducts)
    const productsStatus = useSelector(getProductsStatus)
    const error = useSelector(getProductsError)
  
    const setDisplayCart = useOutletContext()[1]

    useEffect(() => {
      if(productsStatus === 'idle') {
        dispatch(fetchProducts())
      }
      setDisplayCart(false)
    }, [productsStatus, dispatch, setDisplayCart])

    if (productsStatus === 'loading') {
      return <Spinner />
    } else if (productsStatus === 'failed') {
        return <ErrorPage error={error} />
    } else if (productsStatus === 'succeeded') {
        const product = products.find(product => product.title === title.productTitle)
        return (
            <section className="single-product">
                <ProductHero product={product} />
                <ProductDescription product={product} />
                <Gallery product={product} />
                <Recommender product={product} products={products} />
                <CategoryCardSection />
                <Advert />
            </section>
        )
    }
}

export default SingleProduct;