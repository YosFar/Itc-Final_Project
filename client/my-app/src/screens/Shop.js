import React, { useState } from 'react';
import CategoriesSlides from '../components/CategoriesSlides';
import Filter from '../components/Filter';
import Products from '../components/Products';
import Layout from '../layout/Layout';
import { ProductsData } from './../Data/ProductsData';
import { CgSpinner } from 'react-icons/cg';
import Promos from './../components/Promos';

function Shop() {
  const maxPage = 10;
  const [page, setPage] = useState(maxPage);

  const HandleLoadMore = () => {
    setPage(page + maxPage);
  };
  return (
    <Layout>
      <div className="min-h-screen container mx-auto px-4 my-6">
        <CategoriesSlides />
        <Filter total={ProductsData?.length} />
        <div
          className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6"
        >
          {ProductsData.slice(0, page)?.map((p) => (
            <Products bg={true} key={p._id} product={p} />
          ))}
        </div>
        <div className="w-full flex-colo my-12">
          <button
            onClick={HandleLoadMore}
            className="flex-rows gap-3 text-white py-3 px-8 rounded font-semibold bg-subMain"
          >
            Load More <CgSpinner className="animate-spin" />
          </button>
        </div>
        <Promos />
      </div>
    </Layout>
  );
}

export default Shop;
