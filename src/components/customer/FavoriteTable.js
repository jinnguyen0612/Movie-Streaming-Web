import React from 'react'
import {VscError} from 'react-icons/vsc'
import {AiFillEye} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Head = "text-xs text-center text-main font-semibold px-6 py-2 uppercase";
const Text = "text-sm text-center leading-6 whitespace-nowrap px-5 py-3";

const Rows = (movie,i)=>{
    return(
        <tr key={i}>
            <td className={`${Text}`}>
                <div className='w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden'>
                    <img
                    className='h-16 w-16 object-cover'
                    src={`/image/movies/${movie.titleImage}`}
                    alt={movie?.name}/>    
                </div>
            </td>
            <td className={`${Text} truncate`}>{movie.name}</td>
            <td className={`${Text}`}>{movie.category}</td>
            <td className={`${Text}`}>{movie.year}</td>
            <td className={`${Text}`}>{movie.time}</td>
            <td className={`${Text} flex-rows gap-2 mt-2`}>
                <Link to={`/movies/${movie?.name}`} className='border border-white bg-subInfo flex-rows gap-2 text-white rounded py-1 px-2'>
                    Watch <AiFillEye/>
                </Link>
                <button className='border border-white bg-subMain flex-rows gap-2 text-white rounded py-1 px-2'>
                    Remove <VscError/>
                </button>
            </td>
        </tr>
    )
}

function FavoriteTable({data}) {
  return (
    <div className='overflow-x-scroll overflow-hidden relative w-full'>
        <table className='w-full table-auto border border-border divide-y divide-border'>
            <thead>
                <tr className='bg-dryGray'>
                    <th scope='col' className={`${Head}`}>
                        Image
                    </th>
                    <th scope='col' className={`${Head}`}>
                        Name
                    </th>
                    <th scope='col' className={`${Head}`}>
                        Genre
                    </th>
                    <th scope='col' className={`${Head}`}>
                        Year
                    </th>
                    <th scope='col' className={`${Head}`}>
                        Minutes
                    </th>
                    <th scope='col' className={`${Head}`}>
                        Action
                    </th>
                </tr>
            </thead>
            <tbody className='bg-main divide-y divide-gray-800'>
                {data.map((movie,index)=> Rows(movie,index))}
            </tbody>
        </table>
    </div>
  )
}

export default FavoriteTable