import React from "react";

export default function AdminDashboard() {
  return (
      <main className='font-Anton '>

    <div className="flex h-screen bg-red-50">
 
      <div className="flex-1 flex flex-col">
       
        
          <h1 className="text-4xl text-center mt-6 ">ADMIN DASHBOARD</h1>
          
      

        {/* Dashboard Content */}
        <div className="p-6 overflow-y-auto">

          {/* Stats Cards */}
          <div className="grid grid-cols-1  md:grid-cols-2 text-center lg:grid-cols-4 gap-6  mb-6">

            <div className="bg-red-600  rounded-lg p-6 hover:shadow-lg/50 flex items-center justify-between">
              <div className="text-center">
                <p className="text-3xl hover:text-shadow-lg/50 text-amber-400 hover:text-amber-500">TOTAL REVENUE</p>
                <h2 className="text-2xl ">₹ 1,20,000</h2>
              </div>
            </div>

            <div className="bg-red-600 shadow rounded-lg p-6 hover:shadow-lg/50 flex items-center justify-between">
              <div>
                <p className="text-3xl hover:text-shadow-lg/50 text-amber-400 hover:text-amber-500">ORDERS</p>
                <h2 className="text-2xl ">320</h2>
              </div>
            </div>

            <div className="bg-red-600 shadow rounded-lg p-6 hover:shadow-lg/50 flex items-center justify-between">
              <div>
                <p className="text-3xl hover:text-shadow-lg/50 text-amber-400 hover:text-amber-500">PRODUCTS</p>
                <h2 className="text-2xl ">150</h2>
              </div>
            </div>

            <div className="bg-red-600 shadow rounded-lg p-6 hover:shadow-lg/50 flex items-center justify-between">
              <div>
                <p className="text-3xl hover:text-shadow-lg/50 text-amber-400 hover:text-amber-500">USERS</p>
                <h2 className="text-2xl ">85</h2>
              </div>
            </div>

          </div>

          {/* Recent Orders Table */}
          <div className="bg-red-600shadow rounded-lg p-6">
            <h2 className="text-xl  mb-4">Recent Orders</h2>

            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="p-2">Order ID</th>
                  <th className="p-2">Customer</th>
                  <th className="p-2">Product</th>
                  <th className="p-2">Amount</th>
                  <th className="p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-100">
                  <td className="p-2">#1001</td>
                  <td className="p-2">Raj Sharma</td>
                  <td className="p-2">Drill Machine</td>
                  <td className="p-2">₹ 2500</td>
                  <td className="p-2 text-green-600 font-semibold">Delivered</td>
                </tr>

                <tr className="border-b hover:bg-gray-100">
                  <td className="p-2">#1002</td>
                  <td className="p-2">Aman Singh</td>
                  <td className="p-2">Hammer</td>
                  <td className="p-2">₹ 800</td>
                  <td className="p-2 text-yellow-600 font-semibold">Pending</td>
                </tr>

                <tr className="border-b hover:bg-gray-100">
                  <td className="p-2">#1003</td>
                  <td className="p-2">Neha Verma</td>
                  <td className="p-2">Paint Bucket</td>
                  <td className="p-2">₹ 1200</td>
                  <td className="p-2 text-red-600 font-semibold">Cancelled</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
    </main>
  );
}
