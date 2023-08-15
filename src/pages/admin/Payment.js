import React from 'react'
import { useState } from 'react';
import AdminLayout from '../../layout/AdminLayout';
import { MdAddCircle } from 'react-icons/md';

function Payment() {

  const [title, setTitle] = useState("");
  const Head = "text-xs text-center text-main font-semibold px-6 py-2 uppercase";
  const Text = "text-sm text-center leading-6 whitespace-nowrap px-5 py-3";

  return (
    <AdminLayout>
        <>
        <div className='col-span-6 rounded-md bg-dry border border-gray-800 p-6'>
            <div className='flex flex-col gap-6'>
                <div className='flex-btn gap-2'>
                    <h2 className='text-xl font-bold'>Payment</h2>
                    <div className='flex flex-row'>
                        
                    </div>
                </div>
            </div>
        </div>
          
        <div className='p-5 my-5'>
          <div className='overflow-x-scroll overflow-hidden relative w-full rounded-lg'>
              <table className='w-full table-auto border border-border divide-y divide-border'>
                  <thead>
                      <tr className='bg-dryGray'>
                          <th scope='col' className={`${Head}`}>
                              Ordinal
                          </th>
                          <th scope='col' className={`${Head}`}>
                              Email
                          </th>
                          <th scope='col' className={`${Head}`}>
                              Pricing/Film Name
                          </th>
                          <th scope='col' className={`${Head}`}>
                              Paid
                          </th>
                          <th scope='col' className={`${Head}`}>
                              Created At
                          </th>
                          <th scope='col' className={`${Head}`}>
                              End Date
                          </th>
                          <th scope='col' className={`${Head}`}>
                              Status
                          </th>
                      </tr>
                  </thead>
                  <tbody className='bg-main divide-y divide-gray-800'>
                        <tr>
                          <td className={`${Text} truncate`}>1</td>
                          <td className={`${Text}`}>email</td>
                          <td className={`${Text}`}>pricing/film</td>
                          <td className={`${Text}`}>Paid</td>
                          <td className={`${Text}`}>Created</td>
                          <td className={`${Text}`}>End</td>
                          <td className={`${Text}`}>Status</td> 
                        </tr>
                  </tbody>
              </table>
          </div>
        </div>
        
        </>
    </AdminLayout>
  )
}

export default Payment