import "./Products.css";
export default function Products() {
    return (
        <section className="product-list">
    <div className="product">
      <div className="product-image">
        <img src="src/assets/pictures/food-1.png"/>
      </div>
      <div className="product-info">
        <h4>Terminal Pizza</h4>
        <div className="product-price">
          <h5 className="rate">4.9</h5>
          <h5>(200)</h5>
          <h4>60₺</h4>
        </div>
      </div>
    </div>
    <div className="product">
      <div className="product-image">
        <img src="src/assets/pictures/food-2.png"/>
      </div>
      <div className="product-info">
        <h4>Position Absolute Acı Pizza</h4>
        <div className="product-price">
          <h5 className="rate">4.9</h5>
          <h5>(200)</h5>
          <h4>60₺</h4>
        </div>
      </div>
    </div>
     <div className="product">
      <div className="product-image">
        <img src="src/assets/pictures/food-3.png"/>
      </div>
      <div className="product-info">
        <h4>useEffect Tavuklu Burger</h4>
        <div className="product-price">
          <h5 className="rate">4.9</h5>
          <h5>(200)</h5>
          <h4>60₺</h4>
        </div>
      </div>
    </div>
  </section>
    )}