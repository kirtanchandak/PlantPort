import Categories from "@/components/Categories";
import Layout from "@/components/Layout";
import Products from "@/components/Products";
import { data } from "@/utils/data";
import heroimg from "../assets/plan-hero.webp";
import Image from "next/image";

export default function Home() {
  const indoorPlanters = data.products.filter((product) =>
    product.category.includes("indoor-planters")
  );

  const fancyPlanters = data.products.filter((product) =>
    product.category.includes("fancy-planters")
  );
  return (
    <>
      <Layout title="Home Page">
        <div className="md:flex font-playfair md:px-12 md:pt-6 px-4">
          <div className="w-[50%] md:mt-24">
            <p className="md:text-5xl text-5xl font-extrabold text-[#4FA06D] whitespace-normal">
              Reserving Deforestation is&nbsp;complicated;
              <br />
              planting&nbsp;a tree is&nbsp;simple
            </p>
          </div>
          <div className="md:w-[580px] px-4 pt-8">
            <Image src={heroimg} alt="hero-img" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:mt-4 mt-6">
          <div className="md:px-12 px-6">
            <h1 className="text-2xl font-bold">Top Categories</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:gap-16 gap-8  pt-6">
              {data.categories.map((category) => (
                <Categories category={category} key={category.slug} />
              ))}
            </div>
          </div>
          <div className="pt-5">
            <h1 className="text-2xl font-bold">Indoor Planters</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-6">
              {indoorPlanters.map((product) => (
                <Products product={product} key={product.slug} />
              ))}
            </div>
          </div>
          <div className="pt-8">
            <h1 className="text-2xl font-bold">Fancy Planters</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-6">
              {fancyPlanters.map((product) => (
                <Products product={product} key={product.slug} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
