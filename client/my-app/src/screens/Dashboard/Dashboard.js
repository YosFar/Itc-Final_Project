import React from 'react';
import SideBar from './SideBar';
import { FaRegListAlt } from 'react-icons/fa';
import { ImCancelCircle } from 'react-icons/im';
import { FiTruck } from 'react-icons/fi';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import Table from '../../components/Table';

function Dashboard() {
  const Status = [
    {
      bg: 'bg-orange-100',
      icon: FaRegListAlt,
      color: 'text-star',
      title: 'Total Order',
      total: 45,
    },
    {
      bg: 'bg-red-100',
      icon: ImCancelCircle,
      color: 'text-flash',
      title: 'Cancel Order',
      total: 2,
    },
    {
      bg: 'bg-blue-100',
      icon: FiTruck,
      color: 'text-blue-700',
      title: 'Processing Order',
      total: 0,
    },
    {
      bg: 'bg-green-100',
      icon: BsFillCheckCircleFill,
      color: 'text-main',
      title: 'Complete Order',
      total: 12,
    },
  ];
  return (
    <SideBar>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-3">
          {Status.map((status, i) => (
            <div className="p-4 rounded border grid grid-cols-4 gap-2">
              <div
                className={`rounded-full col-span-1 text-lg w-12 h-12 flex-colo ${status.bg} ${status.color}`}
              >
                <status.icon />
              </div>
              <div className=" col-span-3">
                <h2>{status.title}</h2>
                <p className="font-bold mt-2">{status.total}</p>
              </div>
            </div>
          ))}
        </div>
        <Table number={4} />
      </div>
    </SideBar>
  );
}

export default Dashboard;
