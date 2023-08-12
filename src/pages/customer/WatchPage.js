import React, { useState } from 'react'
import Layout from '../../layout/Layout'
import { Link, useParams } from 'react-router-dom'
import { Movies } from './../../Data/MovieData';
import {BiArrowBack} from 'react-icons/bi';
import { FaCloudDownloadAlt, FaHeart, FaPlay } from 'react-icons/fa';
import ReactPlayer from 'react-player';

function WatchPage() {
  let {id} = useParams();
  const movie = Movies.find((movie)=> movie.name===id);
  const [play,setPlay] = useState(false);
  const [timeStamp,setTimeStamp] = useState(null)
  return (
    <Layout>
      <div className='container mx-auto bg-dry p-6 mb-12'>
        <div className='flex-btn flex-wrap mb-6 gap-2 bg-main rounded border border-gray-800 p-6'>
          <Link to={`/movies/${movie?.name}`} className='md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray'>
            <BiArrowBack/> {movie?.name}
          </Link>
          <div className='flex-btn sm:w-auto w-full gap-5'>
            <button className='bg-white hover:text-subMain transitions bg-opacity-30 text-white rounded px-4 py-3 text-sm'>
              <FaHeart/>
            </button>
            <button className='bg-subMain border border-subMain hover:bg-dry flex-rows gap-2 hover:text-subMain transitions text-white rounded px-4 font-medium py-3 text-sm'>
              <FaCloudDownloadAlt/>
            </button>
          </div>
        </div>
        {/*Watch Video*/}
        {
          play?(
            // <video controls autoPlay={play} className="w-full h-full rounded">
            //   <source src="/image/movie.mp4" type='video/mp4' title={movie?.name}/>
            // </video>
            <div>
              <ReactPlayer
                url={`https://res.cloudinary.com/dlg00ljfz/video/upload/v1691479905/zyglakxfmzrwxsjlrn5x.mp4`}
                playing={play}
                controls={true}
                height="auto"
                width="100%"
                />
            </div>
          ):(
            <div className='w-full h-full rounded-lg overflow-hidden relative'>
              <div className='absolute top-0 left-0 bottom-0 right-0 bg-main bg-opacity-30 flex-colo'>
                <button onClick={()=>setPlay(true)} className='bg-white text-subMain flex-colo border border-subMain rounded-full w-20 h-20 font-medium text-xl'>
                  <FaPlay/>
                </button>
              </div>
              <img
                src={movie?.image ? `/image/movies/${movie.image}`: "/image/user/6.jpg"}
                alt={movie.name}
                className='w-full h-full object-cover rounded-lg'/>
            </div>
          )
        }
      </div>
    </Layout>
  )
}

export default WatchPage