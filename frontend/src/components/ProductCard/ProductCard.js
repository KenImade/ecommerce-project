import Button from "../Button";
import "./ProductCard.css";

const ProductCard = ({product, isReverse}) => {
  return (
    <section 
      className="product-card-info" 
      style={{flexDirection: isReverse ? "row-reverse" : "row"}}>
        <div className="product-img">
            <img src={product.productImage.desktop} alt={product.title} />
        </div>

        <div className="product-details">
          {product.isNew && <p className="overline">new product</p>}
          <h2>{product.title.split("-").join(" ")}</h2>
          <p className="product-text">{product.info}</p>
          <Button className={"btn-one"} name={"see product"} link={`/${product.title}`} />
        </div>
    </section>
  )
}

export default ProductCard;