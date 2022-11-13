import { KEY_APP_NAME } from "@/config/keys";
import LayoutWithSidebar from "@/layouts/LayoutWithSidebar";
import HomeComponent from "@/modules/home/components/HomeComponent";
// import type { NextPage } from "next";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>{KEY_APP_NAME} | Home</title>
      </Head>
      <main>
        <HomeComponent />
      </main>
    </>
  );
};

Home.Layout = LayoutWithSidebar;

export default Home;
