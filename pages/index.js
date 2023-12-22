import Categories from "@/components/Categories";
import Layout from "@/components/Layout";
import Products from "@/components/Products";
import { data } from "@/utils/data";
import heroimg from "../assets/plan-hero.webp";
import Image from "next/image";
import customize from "../assets/customized-planter.webp";
import sharuh from "../assets/sharukh.jpg";
import tapsee from "../assets/taapsee.jpg";
import anushka from "../assets/anushka.jpg";
import star from "../assets/star.png";
import coconuct from "../assets/tree.png";
import ContactUs from "@/components/ContactUs";

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
            <div>
              <p className="md:text-5xl text-5xl font-extrabold text-[#4FA06D] whitespace-normal">
                Reserving Deforestation is&nbsp;complicated;
                <br />
                planting&nbsp;a tree is&nbsp;simple
              </p>
            </div>
            <div className="flex gap-6 mt-8 font-[600] text-lg">
              <button className="bg-[#4FA06D] p-2 rounded-full">
                Shop Now
              </button>
              <button className="">View Offers</button>
            </div>
          </div>
          <div className="md:w-[580px] px-4 pt-8">
            <Image src={heroimg} alt="hero-img" />
          </div>
        </div>
        <div className="text-center md:mt-16 mt-4 md:px-44 px-4">
          <div>
            <h1 className="text-4xl font-extrabold ">About</h1>
            <p className="md:text-3xl text-xl mt-4">
              Are you confused in choosing yout plant to fill space in your
              home, office etc, here is the soultion to choose your planters
              according to your space. This platform guides you to choose the
              right planters for your space with lots of varities.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:mt-16 mt-6">
          <div className="md:px-12 px-6">
            <h1 className="text-4xl font-bold text-center mt-4">
              What does your style suits?
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:gap-16 gap-8  md:mt-16 mt-4">
              {data.categories.map((category) => (
                <Categories category={category} key={category.slug} />
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-center mt-4 md:mt-16">
              What does your space need?
            </h1>
            <div className="flex md:gap-8 gap-2 md:mt-16 mt-4 px-4">
              <div>
                <Image
                  src="https://ik.imagekit.io/kirtanchandak/Plant_Port_/plant-box.webp?updatedAt=1687069364296"
                  width={300}
                  height={700}
                  className="rounded-3xl"
                />
                <p className="text-xs md:text-2xl text-center mt-1 md:mt-3">
                  Indoor Planter
                </p>
              </div>
              <div>
                <Image
                  src="https://ik.imagekit.io/kirtanchandak/Plant_Port_/fancy_planters/download.webp?updatedAt=1687426981587"
                  width={300}
                  height={700}
                  className="rounded-3xl"
                />
                <p className="text-xs md:text-2xl text-center mt-1 md:mt-3">
                  Fancy Planter
                </p>
              </div>
              <div>
                <Image
                  src="https://ik.imagekit.io/kirtanchandak/Plant_Port_/trunk.webp?updatedAt=1687069364173"
                  width={300}
                  height={700}
                  className="rounded-3xl"
                />
                <p className="text-xs md:text-2xl text-center mt-1 md:mt-3">
                  Trunk Planter
                </p>
              </div>
            </div>
          </div>

          <div className="flex md:gap-8 gap-2 md:mt-16 mt-4 px-4">
            <button className="p-5 bg-[#4FA06D] rounded-2xl mt-3 text-2xl font-bold">
              View All Plants
            </button>
          </div>

          <div className="md:flex gap-16 md:mt-16 mt-14 px-4">
            <div>
              <Image
                src={customize}
                width={300}
                height={300}
                className="rounded-2xl"
              />
            </div>
            <div className="md:mt-16 mt-6">
              <p className="md:text-3xl text-2xl">
                We will customize your pots based on your <br />
                needs like paintings, shape of pot, colour,
                <br /> etc. Which you can present to your loves ones.
              </p>
            </div>
          </div>

          <div className="md:px-12 px-6 md:mt-16 mt-4">
            <h1 className="text-4xl font-bold text-center mt-4">
              Our Happy Clients
            </h1>
            <div className="md:flex gap-16 mt-12">
              <div>
                <Image
                  src={sharuh}
                  width={300}
                  height={300}
                  className="rounded-full"
                />
                <p className="text-xl text-center mt-3">
                  Planter was good like me,
                  <br /> a superstar and best!!
                </p>
                <div className="flex items-center justify-center gap-1 mt-4">
                  <Image src={star} width={40} height={40} />
                  <Image src={star} width={40} height={40} />
                  <Image src={star} width={40} height={40} />
                  <Image src={star} width={40} height={40} />
                  <Image src={star} width={40} height={40} />
                </div>
              </div>
              <div>
                <Image
                  src={tapsee}
                  width={300}
                  height={300}
                  className="rounded-full"
                />
                <p className="text-xl text-center mt-3">
                  Thanks greenery I got by the planter
                  <br /> suits my home apce and environment.
                </p>
                <div className="flex items-center justify-center gap-1 mt-4">
                  <Image src={star} width={40} height={40} />
                  <Image src={star} width={40} height={40} />
                  <Image src={star} width={40} height={40} />
                  <Image src={star} width={40} height={40} />
                  <Image src={star} width={40} height={40} />
                </div>
              </div>
              <div>
                <Image
                  src={anushka}
                  width={300}
                  height={300}
                  className="rounded-full"
                />
                <p className="text-xl text-center mt-3">
                  Thanks greenery I got by the planter
                  <br /> good to see my plant customized.
                </p>
                <div className="flex items-center justify-center gap-1 mt-4">
                  <Image src={star} width={40} height={40} />
                  <Image src={star} width={40} height={40} />
                  <Image src={star} width={40} height={40} />
                  <Image src={star} width={40} height={40} />
                </div>
              </div>
            </div>
          </div>
          <div className="md:mt-16 mt-4">
            <ContactUs />
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
