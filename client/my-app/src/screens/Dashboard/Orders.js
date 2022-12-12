import React from 'react';
import Table from '../../components/Table';
import SideBar from './SideBar';

function Orders() {
  return (
    <SideBar>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center gap-2">
          <h2 className="text-xl font-bold">Order History</h2>
          <button className="bg-flash font-medium text-white py-2 px-6 rounded">
            Delete All
          </button>
        </div>

        <Table number={null} />
      </div>
    </SideBar>
  );
}

export default Orders;
