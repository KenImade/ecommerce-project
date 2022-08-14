import Button from "../Button";
import "./ProductCard.css";

const ProductCard = ({img, productName, productDesc, isReverse, isNew}) => {
  return (
    <section className="product-card-info" style={{flexDirection: isReverse ? "row-reverse" : "row"}}>
        <div className="product-img">
            <img src={img} alt={productName} />
        </div>

        <div className="product-details">
          {isNew && <p className="overline">new product</p>}
          <h2>{productName}</h2>
          <p className="product-text">{productDesc}</p>
          <Button className={"btn-one"} name={"see product"} link={"#"} />
        </div>
    </section>
  )
}

export default ProductCard;