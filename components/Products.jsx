import React from "react";
import Image from "next/image";
import Link from "next/link";

function Products({ product }) {
  return (
    <>
      <Link href={`/product/${product.slug}`}>
        <ul>
          <li>
            <div>
              <Image
                src={product.img}
                width={300}
                height={300}
                alt="product image"
                className="flec justify-center"
              />
              <div className="pt-3">
                <h1 className="text-lg">{product.name}</h1>
                <p className="font-medium">{product.price}</p>
                <button className="w-[205px] mt-2 p-1 border-[1px] border-black">
                  Add To Bag
                </button>
              </div>
            </div>
          </li>
        </ul>
      </Link>
    </>
  );
}

export default Products;
