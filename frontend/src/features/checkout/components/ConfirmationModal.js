import formatter from "../../../utils/currencyFormatter";
import formatText from "../../../utils/formatText";

import confirmationImg from "../assets/icon-order-confirmation.svg";

const ConfirmationModal = ({items, saleSummary}) => {

    const productCards = items.map(item => {
        return (
            <article key={item.id} className="product-card">
                <div className="product-card-img">
                    <img src={item.image} alt={item.title} />
                </div>
                <div className="product-info">
                    <p className="product-info-title">{formatText(item.tag)}</p>
                    <p className="product-info-price">{formatter.format(item.price)}</p>
                </div>

                <div className="product-quantity">
                    {`x${item.quantity}`}
                </div>
            </article>
        )
    })

    return (
        <section className="confirmation">
            <div className="container">
                <div className="confirmation-logo">
                    <img src={confirmationImg} alt="confirmation icon"/>
                </div>
                <h3 className="confirmation-title">
                    thank you for your order
                </h3>
                <p className="body">You will receive an email confirmation shortly.</p>
                <div className="products-container">
                    <div className="left">
                        {productCards}
                    </div>
                    <div className="right">
                        <p className="title">grand total</p>
                        <p>{formatter.format(saleSummary.grandTotal)}</p>
                    </div>
                </div>
                <button className="btn-one confirmation-btn">
                    back to home
                </button>
            </div>
        </section>
    )
}

export default ConfirmationModal