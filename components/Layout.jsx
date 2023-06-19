import React from "react";
import Head from "next/head";
import Navbar from "./Header";

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
        <header>
          <Navbar />
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="flex items-center justify-center h-10 font-medium shadow-inner mt-5">
          <h1>Copyright @Plant Port 2023</h1>
        </footer>
      </div>
    </>
  );
}

export default Layout;
