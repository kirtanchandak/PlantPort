import React from "react";
import { useRouter } from "next/router";
import { data } from "@/utils/data";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";

function CategoryPage() {
  const router = useRouter();
  const { slug } = router.query;

  const categoryProducts = data.products.filter((product) =>
    product.category.includes(slug)
  );
  if (!categoryProducts) {
    return <div>Not Found</div>;
  }

  const getCategoryName = (slug) => {
    const category = data.categories.find((cat) => cat.slug === slug);
    return category ? category.name : "";
  };
  const title = getCategoryName(slug);
  return (
    <>
      <Layout>
        <div className="flex flex-col justify-center items-center md:mt-16 mt-16">
          <div className="p-8">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-16 gap-8  pt-6">
              {categoryProducts.map((product) => (
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
                            <p className="font-medium mb-2">₹{product.price}</p>
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
      </Layout>
    </>
  );
}

export default CategoryPage;
