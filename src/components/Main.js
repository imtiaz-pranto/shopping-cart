import React from "react";
import Product from "./Product";

//Main component contains the products list and footer.

export default function Main(props) {
  const { products, onAdd } = props;
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>

      {/* Footer part */}

      <div className="footer col-2">
        <hr></hr>
        <div className="footer-row">
          <h3>
            Dhanmondi |
            <a href="#/" className="links">
              | Register 1 |{" "}
            </a>
            <a href="#/" onClick={refreshPage} className="links">
              New Sale
            </a>
          </h3>
          <button
            className="push simple"
            onClick={() => alert("Options will be available soon!")}
          >
            {" "}
            Options
          </button>
          <button className="simple" onClick={refreshPage}>
            {" "}
            New Sale
          </button>
        </div>
      </div>
    </main>
  );
}
