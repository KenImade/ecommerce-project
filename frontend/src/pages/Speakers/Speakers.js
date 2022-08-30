import {useOutletContext} from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Advert from "../../components/Advert/Advert";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import CategoryCardSection from "../../components/CategoryCard/CategoryCardSection";
import ProductCard from "../../components/ProductCard/ProductCard";
import Spinner from "../../components/Spinner/Spinner";

import "./assets/Speakers.css";

import {
  selectAllProducts,
  getProductsStatus,
  getProductsError,
  fetchProducts
} from "../../features/products/productsSlice";

const Speakers = () => {
  const setDisplayCart = useOutletContext()[1]
  const CATEGORY_NAME = "speakers";
  const dispatch = useDispatch()

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
    return <p>{error}</p>
  } else if (productsStatus === "succeeded") {
    return (
      <section>
          <CategoryBanner title={CATEGORY_NAME}/>
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

export default Speakers