import React, { useState } from 'react';
import { IoBagCheckOutline, IoClose } from 'react-icons/io5';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { ProductsData } from './../../Data/ProductsData';
import { Link } from 'react-router-dom';
import MainDrawer from './MainDrawer';

function Cart({ cartDrawerOpen, closeCartDrawer }) {
  const [item, setItem] = useState(1);
  return (
    <MainDrawer DrawerOpen={cartDrawerOpen} closeDrawer={closeCartDrawer}>
      <div className="flex flex-col w-full h-full justify-between items-middle bg-white rounded cursor-pointer">
        <div className="w-full flex justify-between items-center relative px-5 py-4 border-b bg-deepest border-deepGray">
          <h2 className="font-semibold text-lg m-0 text-heading flex items-center">
            <span className="text-xl mr-2 mb-1">
              <IoBagCheckOutline />
            </span>
            Shopping Cart
          </h2>
          <button
            onClick={closeCartDrawer}
            className="flex-colo p-2 font-medium text-flash bg-white rounded-full hover:bg-main hover:text-white"
          >
            <IoClose />
          </button>
        </div>

        {/* cart items */}
        <div className="overflow-y-scroll flex-grow scrollbar-hide w-full max-h-full">
          {ProductsData.slice(0, 4).map((p, i) => (
            <div key={i} className="grid grid-cols-8 gap-2 my-6 items-center">
              <div className="col-span-2 bg-deepGray rounded p-2 h-24">
                <img
                  alt={p.title}
                  src={`/images/${p.image}`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="col-span-5 flex flex-col text-sm gap-2">
                <h3 className="font-medium truncate">{p.title}</h3>
                <h2 className=" font-bold">$567.00</h2>
                <div className="grid grid-cols-3 text-xs gap-1 border border-main w-32">
                  <button
                    onClick={() => setItem(item - 1)}
                    disabled={item === 1}
                    className="flex-colo py-1 hover:bg-main hover:text-white"
                  >
                    <FiMinus />
                  </button>
                  <p className="flex-colo py-1">{item}</p>
                  <button
                    onClick={() => setItem(item + 1)}
                    className="flex-colo py-1 hover:bg-main hover:text-white"
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>
              <div className="col-span-1 flex-colo ">
                <button className="flex-colo p-2 text-lg bg-flash rounded text-white hover:bg-main hover:text-white">
                  <MdDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* checkout Button */}
        <Link
          to="/checkout"
          onClick={closeCartDrawer}
          className="w-full hover:bg-subMain transitions py-3 px-3 bg-main flex items-center justify-between text-sm sm:text-base text-white"
        >
          <span className="align-middle font-medium">Proceed To Checkout</span>
          <span className="rounded-md font-bold py-2 px-3 bg-white text-subMain">
            $456
          </span>
        </Link>
      </div>
    </MainDrawer>
  );
}

export default Cart;
