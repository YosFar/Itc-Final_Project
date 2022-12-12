import React from 'react';
import { OrdersData } from '../Data/OrdersData';
import { Link } from 'react-router-dom';
import { GoEye } from 'react-icons/go';
import { RiDeleteBinLine } from 'react-icons/ri';

function Table({ number }) {
  const Head = 'text-xs font-semibold px-6 py-2 uppercase';
  const Text = 'px-5 text-sm py-3 leading-6 whitespace-nowrap';
  const badge = ' py-1 px-2 rounded-full text-xs font-semibold';

  const OrdersDash = OrdersData?.slice(0, number);

  const Rows = ({ order }, number) => {
    return (
      <tr key={order.id}>
        <td className={`${Text} font-medium`}>{order.id}</td>
        <td className={`${Text} text-center`}>{order.date}</td>

        <td className={`${Text} text-center`}>{order.payment}</td>
        <td className={`${Text} text-center`}>
          {order.status === 'Complete' && (
            <span className={`${badge} text-subMain bg-green-100`}>
              {order.status}
            </span>
          )}
          {order.status === 'Pending' && (
            <span className={`${badge} text-star bg-orange-100`}>
              {order.status}
            </span>
          )}
          {order.status === 'Canceled' && (
            <span className={`${badge} text-flash bg-red-100`}>
              {order.status}
            </span>
          )}
        </td>
        <td className={`${Text} font-bold text-center`}>${order.amount}.00</td>
        <td className={`${Text} float-right flex gap-2`}>
          {!number && (
            <button className="border text-flash border-flash rounded flex-colo w-6 h-6">
              <RiDeleteBinLine />
            </button>
          )}

          <Link
            to={`/order`}
            className="border text-main border-main rounded flex-colo w-6 h-6"
          >
            <GoEye />
          </Link>
        </td>
      </tr>
    );
  };

  return (
    <div className="w-full relative overflow-hidden overflow-x-scroll">
      <table className="table-auto min-w-full border border-deepest divide-y divide-gray-200">
        <thead>
          <tr className="bg-deepest">
            <th scope="col" className={`${Head} text-left`}>
              ID
            </th>
            <th scope="col" className={`${Head} text-center`}>
              Date
            </th>

            <th scope="col" className={`${Head} text-center`}>
              Method
            </th>
            <th scope="col" className={`${Head} text-center`}>
              Status
            </th>
            <th scope="col" className={`${Head} text-center`}>
              Total
            </th>
            <th scope="col" className={`${Head} text-end`}>
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-deepest">
          {number
            ? OrdersDash.map((order) => Rows({ order }, number))
            : OrdersData.map((order) => Rows({ order }, number))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
