import React, { useState } from 'react';
import { ProductsData } from '../Data/ProductsData';
import { MdDelete } from 'react-icons/md';
import { AiFillEye } from 'react-icons/ai';
import ProductModal from './Modals/ProductModal';

function OrderSummary({ order }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [product, setProduct] = useState();
  const Totals = [
    {
      name: 'Subtotal',
      cost: 34,
    },
    {
      name: 'Tax',
      cost: 4,
    },
    {
      name: 'Shipping',
      cost: 45,
    },
    {
      name: 'Discount',
      cost: 23,
    },
  ];
  return (
    <>
      <ProductModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        product={product}
      />
      <h2 className="font-semibold text-lg">Order Summary</h2>
      <div className="overflow-y-scroll flex-grow scrollbar-hide w-full h-72">
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
            </div>
            <div className="col-span-1 flex-colo ">
              {order ? (
                <button
                  onClick={() => {
                    setProduct(p);
                    setModalOpen(!modalOpen);
                  }}
                  className="flex-colo text-white p-2 text-lg bg-main rounded"
                >
                  <AiFillEye />
                </button>
              ) : (
                <button className="flex-colo p-2 text-lg bg-flash rounded text-white hover:bg-main hover:text-white">
                  <MdDelete />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      {!order && (
        <div className="grid w-full gap-3 grid-cols-3 justify-between items-center">
          <input
            type="text"
            placeholder="Input your coupon code"
            className="col-span-2 py-4 px-3 text-main font-semibold text-sm rounded border border-main"
          />
          <button className="bg-main py-4 rounded text-white flex-colo">
            Apply
          </button>
        </div>
      )}

      {Totals.map((t, i) => (
        <div
          key={i}
          className="flex items-center justify-between text-sm w-full font-semibold text-gray-500"
        >
          {t.name}
          <span className=" text-gray-800 font-bold">${t.cost}.00</span>
        </div>
      ))}
      <div className="p-1 pl-4 items-center bg-deepGray rounded w-full flex justify-between">
        <h2 className="font-semibold text-sm text-gray-500">Total</h2>
        <button
          type="button"
          className="px-8 border border-text py-4 font-bold flex-colo text-sm rounded bg-white"
        >
          $567.90
        </button>
      </div>
    </>
  );
}

export default OrderSummary;
