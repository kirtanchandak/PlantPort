import Layout from "@/components/Layout";
import Products from "@/components/Products";

export default function Home() {
  return (
    <>
      <Layout title="Home Page">
        <div className="flex flex-col justify-center items-center mt-32">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <Products />
          </div>
        </div>
      </Layout>
    </>
  );
}
