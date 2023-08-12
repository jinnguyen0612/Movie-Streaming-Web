import React, { useState } from "react";
import AdminLayout from '../../layout/AdminLayout'
import {MdAddCircle} from 'react-icons/md'
import {GiCancel} from 'react-icons/gi'
import { FaEdit } from "react-icons/fa";

function Genres() {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const Head = "text-xs text-center text-main font-semibold px-6 py-2 uppercase";
  const Text = "text-sm text-center leading-6 whitespace-nowrap px-5 py-3";

  const Create = () =>{
    setShowModal(true); 
    setTitle("Create Genre");
  };
  const Edit = () =>{
    setShowModal(true); setTitle("Edit Genre");
  };
  const Submit = () =>{
    setShowModal(false);
  };

    const DataG = [
        {
          id: '1',
          name: 'Romantic',
        },
        {
          id: '2',
          name: 'Action',
        },
        {
          id: '3',
          name: 'Horror',
        },
        {
          id: '4',
          name: 'Comedy',
        },
        {
          id: '5',
          name: 'Adventure',
        },
        {
          id: '6',
          name: 'Sports',
        },
        {
          id: '7',
          name: 'Fantasy',
        },
        {
          id: '8',
          name: 'Musicals',
        },
        {
          id: '9',
          name: 'Drama',
        },
        {
          id: '10',
          name: 'Thriller',
        },
        {
          id: '11',
          name: 'Western',
        },
        {
          id: '12',
          name: 'Historical',
        },
        {
          id: '13',
          name: 'Science',
        },
        {
          id: '14',
          name: 'Mystery',
        },
        {
          id: '15',
          name: 'Anime',
        },
      
      ];
  return (
    <AdminLayout>
        <>
        <div className='col-span-6 rounded-md bg-dry border border-gray-800 p-6'>
            <div className='flex flex-col gap-6'>
                <div className='flex-btn gap-2'>
                    <h2 className='text-xl font-bold'>Genres</h2>
                    <div className='flex flex-row'>
                        <button type="button" onClick={Create} className='bg-main font-medium transitions hover:bg-green-400 border border-green-400 text-green-400 hover:text-white py-3 px-6 rounded ml-2 flex flex-row'>
                            <MdAddCircle className='w-6 h-6 mr-1'/> Add Genre
                        </button>
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
                              Genre ID
                          </th>
                          <th scope='col' className={`${Head}`}>
                              Genre Name
                          </th>
                          <th scope='col' className={`${Head}`}>
                              Action
                          </th>
                      </tr>
                  </thead>
                  <tbody className='bg-main divide-y divide-gray-800'>
                      {DataG.map((genre,index)=> (
                        <tr key={index}>
                          <td className={`${Text} truncate`}>{genre.id}</td>
                          <td className={`${Text}`}>{genre.name}</td>
                          <td className={`${Text} flex-rows gap-2 mt-2`}>
                              <button type='button' onClick={Edit} className='border border-white bg-yellow-200 flex-rows gap-2 text-main rounded py-1 px-2'>
                                  <FaEdit/> Edit
                              </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
              </table>
          </div>
        </div>
        {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border border-white rounded-lg shadow-lg relative flex flex-col w-full bg-dry outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 rounded-t ">
                  <h3 className="text-3xl font=semibold">{title}</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <GiCancel className="text-white h-6 w-6 text-xl blockpy-0"/>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-dryGray text-sm font-medium mb-1">
                      Genre Name
                    </label>
                    <input className="shadow bg-main appearance-none rounded w-full py-2 px-1 border border-border text-white" />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-green-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={Submit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
        </>
    </AdminLayout>
  )
}

export default Genres