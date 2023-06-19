import React from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import Layout from "@/components/Layout";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "@/redux/cart.slice";
import dynamic from "next/dynamic";

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
            <div class="container mx-auto px-4 py-8 pt-20 ">
              <div class="flex flex-col md:flex-row">
                <div class="md:w-3/4 lg:pl-24">
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
                        <div className="mr-36">
                          <h1 className="text-xl">{item.name}</h1>
                          <h1 className="text-xl font-semibold">
                            ₹{item.price}
                          </h1>
                          <div className="flex items-center gap-2 pt-3">
                            <button
                              className="bg-green-300 px-2"
                              onClick={() =>
                                dispatch(incrementQuantity(item.id))
                              }
                            >
                              +
                            </button>
                            <button
                              className="bg-red-300 px-2"
                              onClick={() =>
                                dispatch(decrementQuantity(item.id))
                              }
                            >
                              -
                            </button>
                          </div>
                          <p className="pt-2">Quantity: {item.quantity}</p>
                          <button
                            className="p-1 mt-2 text-gray-500"
                            onClick={() => dispatch(removeFromCart(item.id))}
                          >
                            REMOVE
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div class="md:w-3/4 md:pl-8">
                  <div class="ml-6 w-60 pt-4">
                    <div class="px-2 py-3 sm:pb-4.5 lg:py-5 border-2 border-gray-800">
                      <h1>Total Amount: ₹{getTotalPrice()}</h1>
                    </div>
                    <div>
                      <button class="bg-green-500  font-semibold px-4 py-1 rounded mt-3">
                        Check Out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Layout>
        </>
      )}
    </div>
  );
}

export default dynamic(() => Promise.resolve(Cart), { ssr: false });
