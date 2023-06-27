import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { data } from "@/utils/data";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";

function CategoryPage() {
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (router.isReady) {
      console.log(slug);
    }
  }, [router.isReady, slug]);

  const [colors, setColors] = useState([]);

  useEffect(() => {
    if (slug) {
      const categoryProducts = data.products.filter((product) =>
        product.category.includes(slug)
      );
      setColors(categoryProducts);
    }
  }, [slug]);

  const getCategoryName = (slug) => {
    const category = data.categories.find((cat) => cat.slug === slug);
    return category ? category.name : "";
  };
  const title = getCategoryName(slug);

  const filterColors = (color) => {
    if (color === null) {
      setColors(categoryProducts);
    } else {
      const filteredProducts = data.products.filter((product) =>
        product.color.includes(color)
      );
      setColors(filteredProducts);
    }

    if (color == null) {
      setColors(categoryProducts);
    }
  };

  const handleColorChange = (event) => {
    if (event.target.checked) {
      const color = event.target.value;
      filterColors(color);
    } else {
      const categoryProducts = data.products.filter((product) =>
        product.category.includes(slug)
      );
      setColors(categoryProducts);
    }
  };

  return (
    <>
      <Layout>
        <div className="flex">
          <div className="bg-white p-4 rounded shadow mt-[85px] px-8 hidden sm:block">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button className="text-gray-600">Clear all</button>
            </div>

            <div className="mb-4">
              <h3 className="text-gray-800 font-medium mb-2">Color</h3>
              <ul className="space-y-1">
                <li>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-indigo-500"
                      value="brown"
                      onChange={handleColorChange}
                    />
                    <span className="ml-2 text-gray-700">Brown</span>
                  </label>
                </li>
                <li>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      value="orange"
                      className="form-checkbox text-indigo-500"
                      onChange={handleColorChange}
                    />
                    <span className="ml-2 text-gray-700">Orange</span>
                  </label>
                </li>
                <li>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      value="white"
                      className="form-checkbox text-indigo-500"
                      onChange={handleColorChange}
                    />
                    <span className="ml-2 text-gray-700">White</span>
                  </label>
                </li>
                <li>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      value="blue"
                      className="form-checkbox text-indigo-500"
                      onChange={handleColorChange}
                    />
                    <span className="ml-2 text-gray-700">Blue</span>
                  </label>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-800 font-medium mb-2">Price Range</h3>
              <div className="flex items-center">
                <input
                  type="text"
                  className="w-20 border border-gray-300 rounded-l px-2 py-1"
                  placeholder="Min"
                />
                <span className="mx-2">-</span>
                <input
                  type="text"
                  className="w-20 border border-gray-300 rounded-r px-2 py-1"
                  placeholder="Max"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center md:mt-16 mt-16">
            <div className="p-8 lg:py-8 lg:pr-8">
              <h1 className="text-2xl font-bold">{title}</h1>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-16 gap-6 pt-6">
                {colors.map((product) => (
                  <>
                    <ul>
                      <li>
                        <div>
                          <Link href={`/product/${product.slug}`}>
                            <Image
                              src={product.img}
                              width={300}
                              height={300}
                              alt="product image"
                              className="flec justify-center"
                            />
                            <div className="pt-3">
                              <h1 className="text-lg">{product.name}</h1>
                              <p className="font-medium mb-2">
                                ₹{product.price}
                              </p>
                            </div>
                          </Link>
                          <Link
                            className="px-3 py-1 border-[1px] border-black"
                            href={`/product/${product.slug}`}
                          >
                            Buy Now
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default CategoryPage;
