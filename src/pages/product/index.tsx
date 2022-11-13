import LayoutWithSidebar from "@/layouts/LayoutWithSidebar";
import Head from "next/head";
import Manage from "@/modules/setAndManageProduct/components/Manage";

const ManageProduct = () => {
  return (
    <>
      <Head>
        <title>Manage a Product</title>
      </Head>
      <main>
        <Manage />
      </main>
    </>
  );
};

ManageProduct.Layout = LayoutWithSidebar;

export default ManageProduct;
