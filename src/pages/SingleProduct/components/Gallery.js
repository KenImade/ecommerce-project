
const Gallery = ({product}) => {
  return (
    <section className='gallery'>
        <div className="first-box">
            <div className="sm-img">
                <img src={product.gallery.desktop[0]} alt={product.title} />
            </div>
            <div className="sm-img">
                <img src={product.gallery.desktop[1]} alt={product.title} />
            </div>
        </div>
        <div className="lg-img">    
            <img src={product.gallery.desktop[2]} alt={product.title} />
        </div>
    </section>
  )
}

export default Gallery