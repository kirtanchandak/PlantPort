import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cart.slice";

function Products({ product }) {
  const dispatch = useDispatch();
  return (
    <>
      <ul>
        <li>
          <div className="bg-white w-auto h-auto rounded-xl pb-5">
            <Link href={`/product/${product.slug}`}>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={product.img}
                  width={300}
                  height={300}
                  alt="product image"
                  className="flex justify-center items-center rounded-xl"
                />
              </div>
              <div className="pt-3 px-5">
                <h1 className="text-lg font-bold">{product.name}</h1>
                <p className="font-medium">₹{product.price}</p>
                <p className="mt-1 text-red-600">⚡Extra 30% off on Checkout</p>
                <button className="w-[205px] mt-2 p-1 border-[1px] border-black">
                  View Product
                </button>
              </div>

              {/* <button
                  className="w-[205px] mt-2 p-1 border-[1px] border-black"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add To Bag
                </button> */}
            </Link>
          </div>
        </li>
      </ul>
    </>
  );
}

export default Products;
