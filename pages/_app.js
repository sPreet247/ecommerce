import React from "react";
import { Toaster } from "react-hot-toast";
import Layout from "../components/Layout.jsx";
import { StateContext } from "../context/StateContext.js";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
