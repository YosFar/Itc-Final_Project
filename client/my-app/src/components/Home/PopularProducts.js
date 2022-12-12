import React from 'react';
import Titles from '../Titles';
import { BsCollectionFill } from 'react-icons/bs';
import { ProductsData } from '../../Data/ProductsData';
import Products from '../Products';

function PopularProducts() {
  const Product = ProductsData.sort(() => Math.random() - Math.random()).slice(
    0,
    8
  );
  return (
    <div className="sm:my-20 my-8  bg-deepest xl:py-16 py-10 sm:px-10 px-6">
      <Titles title="Popular Products" Icon={BsCollectionFill} />
      <div
        data-aos="zoom-in-up"
        data-aos-offset="200"
        data-aos-delay="10"
        data-aos-duration="1000"
        className="grid sm:mt-10 mt-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10"
      >
        {Product.map((p) => (
          <Products bg={false} key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default PopularProducts;
