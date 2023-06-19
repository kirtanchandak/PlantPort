import React from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import Layout from "@/components/Layout";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "@/redux/cart.slice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };
  return (
    <div>
      {cart.length === 0 ? (
        <div>
          <h1>No items found</h1>
        </div>
      ) : (
        <>
          <Layout>
            <div className="pt-20 flex flex-col md:flex-row justify-center items-center">
              <div className="w-2/3">
                {cart.map((item) => (
                  <div key={item.id} className="p-5 ">
                    <div className="flex items-center gap-5 flex-col md:flex-row">
                      <div className="">
                        <Image
                          src={item.img}
                          width={300}
                          height={300}
                          className="md:w-[200px]"
                        />
                      </div>
                      <div>
                        <h1 className="text-xl">{item.name}</h1>
                        <h1 className="text-xl font-semibold">{item.price}</h1>
                        <div className="flex items-center gap-2 pt-3">
                          <button
                            className="bg-green-300 px-2"
                            onClick={() => dispatch(incrementQuantity(item.id))}
                          >
                            +
                          </button>
                          <button
                            className="bg-red-300 px-2"
                            onClick={() => dispatch(decrementQuantity(item.id))}
                          >
                            -
                          </button>
                        </div>
                        <p className="pt-2">Quantity: {item.quantity}</p>
                        <button
                          className="p-1 mt-2 bg-green-500"
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          Remove Item
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="md:w-1/3 p-5 text-center lg:mr-36">
                <h1 className="text-2xl font-semibold ">
                  Total Quantity: {getTotalPrice()}
                </h1>
              </div>
            </div>
          </Layout>
        </>
      )}
    </div>
  );
}

export default Cart;
