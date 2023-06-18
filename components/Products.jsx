import React from "react";
import Image from "next/image";
import { data } from "@/utils/data";
import Link from "next/link";

function Products() {
  return (
    <>
      {data.products.map((product) => {
        return (
          <>
            <Link href={`/product/${product.slug}`} key={product.id}>
              <ul>
                <li>
                  <div>
                    <Image src={product.img} width={200} height={200} />
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
      })}
    </>
  );
}

export default Products;
