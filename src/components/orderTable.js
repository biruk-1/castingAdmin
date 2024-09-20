import React from 'react';
import '../styles/orderTable.css'

const data = [
  {
    id: 1,
    code: 'IVR/20240301/IV/II/7847202189',
    category: 'Furniture',
    customerName: 'Tom Hanks',
    purchasedItems: [
      {
        title: 'High-Performance Laptop',
        src: 'images/products/product1-400x400.jpg'
      },
      {
        title: 'Smartphone Charging Dock',
        src: 'images/products/product9-400x400.jpg'
      },
      {
        title: '8-Cup Coffee Maker',
        src: 'images/products/product5-400x400.jpg'
      }
    ],
    status: 'On Hold',
    date: 'Sat Aug 2020'
  },
  {
    id: 2,
    code: 'IVR/20240301/IV/II/7847202190',
    category: 'Electronics',
    customerName: 'Jane Doe',
    purchasedItems: [
      {
        title: 'High-Performance Laptop',
        src: 'images/products/product2-400x400.jpg'
      },
      {
        title: 'Wireless Earbuds with Mic',
        src: 'images/products/product6-400x400.jpg'
      },
      {
        title: 'Professional DSLR Camera',
        src: 'images/products/product8-400x400.jpg'
      }
    ],
    status: 'Completed',
    date: 'Tue Jun 2022'
  }
];

const OrderTable = () => {
  return (
    <div className="overflow-x-auto">
      <h1>Hello world</h1>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b dark:border-darkmode-300">Order Code</th>
            <th className="px-5 py-3 border-b dark:border-darkmode-300">Customer Name</th>
            <th className="px-5 py-3 border-b dark:border-darkmode-300">Purchased Items</th>
            <th className="px-5 py-3 border-b dark:border-darkmode-300">Status</th>
            <th className="px-5 py-3 border-b dark:border-darkmode-300">Date</th>
            <th className="px-5 py-3 border-b dark:border-darkmode-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((order) => (
            <tr key={order.id} className="border-b dark:border-darkmode-300">
              <td className="px-5 py-3 border-b dark:border-darkmode-300">
                <div className="flex items-center">
                  <i className="h-6 w-6 fill-primary/10 stroke-[0.8] text-theme-1" />
                  <div className="ml-3.5">
                    <a href="" className="whitespace-nowrap font-medium">
                      {order.code}
                    </a>
                    <div className="mt-1 whitespace-nowrap text-xs text-slate-500">
                      {order.category}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-5 py-3 border-b dark:border-darkmode-300">
                <div className="mb-1 whitespace-nowrap text-xs text-slate-500">Customer Name</div>
                <a href="" className="flex items-center text-primary">
                  <i className="h-3.5 w-3.5 stroke-[1.7]" />
                  <div className="ml-1.5 whitespace-nowrap">{order.customerName}</div>
                </a>
              </td>
              <td className="px-5 py-3 border-b dark:border-darkmode-300">
                <div className="mb-1.5 whitespace-nowrap text-xs text-slate-500">Purchased Items</div>
                <div className="mb-1 flex">
                  {order.purchasedItems.map((item, index) => (
                    <div key={index} className={`image-fit zoom-in ${index > 0 ? '-ml-1.5' : ''} h-5 w-5`}>
                      <img
                        data-placement="top"
                        title={item.title}
                        src={item.src}
                        alt={item.title}
                        className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                      />
                    </div>
                  ))}
                </div>
              </td>
              <td className="px-5 py-3 border-b dark:border-darkmode-300">
                <div className="mb-1 whitespace-nowrap text-xs text-slate-500">Status</div>
                <div className={`flex items-center ${order.status === 'Completed' ? 'text-success' : 'text-warning'}`}>
                  <i className={`h-3.5 w-3.5 stroke-[1.7] ${order.status === 'Completed' ? 'text-success' : 'text-warning'}`} />
                  <div className="ml-1.5 whitespace-nowrap">{order.status}</div>
                </div>
              </td>
              <td className="px-5 py-3 border-b dark:border-darkmode-300">
                <div className="mb-1 whitespace-nowrap text-xs text-slate-500">Date</div>
                <div className="whitespace-nowrap">{order.date}</div>
              </td>
              <td className="px-5 border-b dark:border-darkmode-300">
                <div className="flex items-center justify-center">
                  <div className="dropdown relative h-5">
                    <button className="cursor-pointer h-5 w-5 text-slate-500">
                      <i className="stroke-[1] w-5 h-5 fill-slate-400/70 stroke-slate-400/70" />
                    </button>
                    <div className="dropdown-menu absolute z-[9999] hidden">
                      <div className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40">
                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400">
                          <i className="stroke-[1] mr-2 h-4 w-4" /> View Details
                        </a>
                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400">
                          <i className="stroke-[1] mr-2 h-4 w-4" /> Edit Order
                        </a>
                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400">
                          <i className="stroke-[1] mr-2 h-4 w-4" /> Print Invoice
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex-reverse mt-3 flex flex-col-reverse flex-wrap items-center gap-y-2 sm:flex-row">
        <nav className="mr-auto w-full flex-1 sm:w-auto">
          <ul className="flex w-full mr-0 sm:mr-auto sm:w-auto">
            <li className="flex-1 sm:flex-initial">
              <a className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3">
                <i className="stroke-[1] h-4 w-4" />
              </a>
            </li>
            <li className="flex-1 sm:flex-initial">
              <a className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3">
                <i className="stroke-[1] h-4 w-4" />
              </a>
            </li>
            <li className="flex-1 sm:flex-initial">
              <a className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3">
                <i className="stroke-[1] h-4 w-4" />
              </a>
            </li>
            <li className="flex-1 sm:flex-initial">
              <a className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3">
                <i className="stroke-[1] h-4 w-4" />
              </a>
            </li>
            <li className="flex-1 sm:flex-initial">
              <a className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3">
                <i className="stroke-[1] h-4 w-4" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default OrderTable;
