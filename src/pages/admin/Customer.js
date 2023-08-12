import React from "react";
import AdminLayout from '../../layout/AdminLayout'

function Customer() {
  const Head = "text-xs text-center text-main font-semibold px-6 py-2 uppercase";
  const Text = "text-sm text-center leading-6 whitespace-nowrap px-5 py-3";
  const DataG = [
        {
          id: '1',
          name: 'John Switch',
          email: 'yuki@gmail.com',
          status: 1
        },
        {
          id: '2',
          name: 'John Switch',
          email: 'yuki@gmail.com',
          status: 0
        },
        {
          id: '3',
          name: 'John Switch',
          email: 'yuki@gmail.com',
          status: 2
        },
        {
          id: '4',
          name: 'John Switch',
          email: 'yuki@gmail.com',
          status: 3
        },
        {
          id: '5',
          name: 'John Switch',
          email: 'yuki@gmail.com',
          status: 1
        },
      ];
  return (
    <AdminLayout>
        <>
        <div className='col-span-6 rounded-md bg-dry border border-gray-800 p-6'>
            <div className='flex flex-col gap-6'>
                <div className='flex-btn gap-2'>
                    <h2 className='text-xl font-bold'>Customer</h2>
                </div>
            </div>
        </div>
          
        <div className='p-5 my-5'>
        <div className='overflow-x-scroll overflow-hidden relative w-full rounded-lg'>
            <table className='w-full table-auto border border-border divide-y divide-border'>
                <thead>
                    <tr className='bg-dryGray'>
                        <th scope='col' className={`${Head}`}>
                            Customer ID
                        </th>
                        <th scope='col' className={`${Head}`}>
                            Name
                        </th>
                        <th scope='col' className={`${Head}`}>
                            Email
                        </th>
                        <th scope='col' className={`${Head}`}>
                            Status
                        </th>
                        <th scope='col' className={`${Head}`}>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className='bg-main divide-y divide-gray-800'>
                    {DataG.map((user,index)=> (
                      <tr key={index}>
                          <td className={`${Text} truncate`}>{user.id}</td>
                          <td className={`${Text}`}>{user.name}</td>
                          <td className={`${Text}`}>{user.email}</td>
                          <td className={`${Text}`}>{user.status==0? "Inactive": (user.status==1?"Active":(user.status==2?"Verify":"ChangePass"))}</td>
                          <td className={`${Text} flex-rows gap-2 mt-2`}>
                              <button type='button' className='border border-white bg-yellow-200 flex-rows gap-2 text-main rounded py-1 px-2'>
                                  Block
                              </button>
                          </td>
                      </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
        
        </>
    </AdminLayout>
  )
}

export default Customer