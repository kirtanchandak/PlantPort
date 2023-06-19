import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <div>
          <h1>No items found</h1>
        </div>
      ) : (
        <div>
          {cart.map((item) => {
            return (
              <div>
                <h1>{item.price}</h1>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Cart;
