import React from "react";
import Head from "next/head";
import Navbar from "./Header";
import Footer from "./Footer";
import dynamic from "next/dynamic";

function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + "- Plant Port" : "Plant Port"}</title>
        <meta name="description" content="Buy planters for your cute plants!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <div>
          <Navbar />
        </div>
        <main className="flex-grow">{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default dynamic(() => Promise.resolve(Layout), { ssr: false });
