import React from "react";
import {useOutletContext} from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Advert from "../../components/Advert/Advert";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import CategoryCardSection from "../../components/CategoryCard/CategoryCardSection";
import ProductCard from "../../components/ProductCard/ProductCard";
import Spinner from "../../components/Spinner/Spinner";

import "./assets/Headphones.css";

import { 
  fetchProducts, 
  getProductsError, 
  getProductsStatus, 
  selectAllProducts
} from "../../features/products/productsSlice";
import ErrorPage from "../ErrorPage/ErrorPage";

const Headphones = () => {
  const CATEGORY_NAME = "headphones";
  const dispatch = useDispatch()
  const setDisplayCart = useOutletContext()[1]  
  
  const products = useSelector(selectAllProducts)
  const productsStatus = useSelector(getProductsStatus)
  const error = useSelector(getProductsError)
  
  useEffect(() => {
    if(productsStatus === "idle") {
      dispatch(fetchProducts())
    } 
    setDisplayCart(false)
  }, [dispatch, productsStatus, setDisplayCart])

  if (productsStatus === "loading") {
    return <Spinner />
  } else if (productsStatus === "failed") {
    return <ErrorPage error={error} />
  } else if (productsStatus === "succeeded") {
    return (
      <section className="headphones">
          <CategoryBanner title={CATEGORY_NAME} />
          {products.filter(item => item.category.includes(CATEGORY_NAME))
                  .map((item, index) => {
                    const reverse = index % 2  === 0 ? false : true
                    return (
                      <ProductCard 
                        product={item} 
                        key={index} 
                        isReverse = {reverse}
                      />
                    )
                  })
          }
          <CategoryCardSection />
          <Advert />
      </section>
    )
  }
}

export default Headphones;