import React from "react";

export default function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.05;
  const discount = itemsPrice > 2000 ? 50 : 0;
  const totalPrice = itemsPrice + taxPrice + discount;
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{" "}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x BDT {item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <div className="pricefinal">
            <hr></hr>
            <div className="row">
              <div className="col-2">Subtotal</div>
              <div className="col-1 text-right">
                BDT {itemsPrice.toFixed(2)}
              </div>
            </div>
            <div className="row">
              <div className="col-2">Tax (5%)</div>
              <div className="col-1 text-right">BDT {taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Discount Price</div>
              <div className="col-1 text-right">BDT {discount.toFixed(2)}</div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>BDT{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert("Implement Checkout!")}>PAY</button>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
