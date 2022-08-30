import formatter from "../../../utils/currencyFormatter";

const Summary = ({submitForm, items, saleSummary}) => {
  
  const itemCards = items.map(item => {
    return (
      <article key={item.id} className="summary-card">
        <div className="summary-card-img">
          <img src={item.image} alt={item.title} />
        </div>

        <div className="summary-card-info">
          <p className="text">{item.tag.split("-").join(" ")}</p>
          <p>{formatter.format(item.price)}</p>
        </div>

        <div className="summary-item-quantity">
          {`x${item.quantity}`}
        </div>
      </article>
    )
  })
  
  const handleFormSubmit = () => {
    console.log("hello")
    console.log(submitForm.current)
    submitForm.current.click()
  }
  return (
    <section className="summary">
      <h6>Summary</h6>
      <div className="summary-items">
        {itemCards}
      </div>

      <div className="fees">
        <div>
          <span className="fees-text body">total</span>
          <span className="fees-amount">{formatter.format(saleSummary.total)}</span>
        </div>
        <div>
          <span className="fees-text body">shipping</span>
          <span className="fees-amount">{formatter.format(saleSummary.shipping)}</span>
        </div>
        <div>
          <span className="fees-text body">vat (included)</span>
          <span className="fees-amount">{formatter.format(saleSummary.vat)}</span>
        </div>
        <div>
          <span className="fees-text body">grand total</span>
          <span className="fees-amount grand">{formatter.format(saleSummary.grandTotal)}</span>
        </div>
      </div>

      <button 
        className="summary-btn btn-one"
        onClick={() => handleFormSubmit()}
      >
        continue & pay
      </button>
    </section>
  )
}

export default Summary