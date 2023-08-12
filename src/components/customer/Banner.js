import React from 'react'
import { Autoplay } from 'swiper'
import {Swiper,SwiperSlide} from 'swiper/react'
import FlexMovieItems from './FlexMovieItems';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

const Movies = [
  {
    "title": "Thor: Love and Thunder",
    "length": 2,
    "poster": "https://storage.googleapis.com/moviestreaming-a0fc2.appspot.com/pictures/9001bf5ad52caa933b0af420.jpg",
    "production_year": 2022,
    "path": "https://res.cloudinary.com/dlg00ljfz/video/upload/v1691479905/zyglakxfmzrwxsjlrn5x.mp4",
    "description": "Marvel Studios’ “Thor: Love and Thunder” finds the God of Thunder on a journey unlike anything he’s ever faced—one of self-discovery. But his efforts are interrupted by a galactic killer known as Gorr the God Butcher, who seeks the extinction of the gods. To combat the threat, Thor enlists the help of King Valkyrie, Korg and ex-girlfriend Jane Foster, who—to Thor’s surprise—inexplicably wields his magical hammer, Mjolnir, as the Mighty Thor",
    "price": 60000,
    "genre_id": 1,
    "status": true,
    "id": 1,
    "genre": {
      "name": "Action",
      "id": 1
    },
    "add_at": "2023-08-09T12:33:14.142589+07:00"
  },
  {
    "title": "The Flash Movie",
    "length": 2,
    "poster": "https://storage.googleapis.com/moviestreaming-a0fc2.appspot.com/pictures/51397d313e91ece439d70962.jpg",
    "production_year": 2022,
    "path": "https://res.cloudinary.com/dlg00ljfz/video/upload/v1691688241/wksqw43dov0rk9zvmhnv.mp4",
    "description": "Barry Allen uses his super speed to change the past, but his attempt to save his family creates a world without super heroes, forcing him to race for his life in order to save the future.",
    "price": 70000,
    "genre_id": 4,
    "status": true,
    "id": 4,
    "genre": {
      "name": "Adventure",
      "id": 4
    },
    "add_at": "2023-08-11T00:23:45.649477+07:00"
  }
]

function Banner() {
  return (
    <div className='relative w-full'>
      <Swiper 
        direction='horizontal'
        slidesPerView={1} 
        loop={true} 
        speed={1000}
        modules={[Autoplay]}
        autoplay={{delay: 6000, disableOnInteraction:false}}
        className='w-full xl:h-96 bg-dry lg:h-64 h-48'>
          {
            Movies.slice(0,6).map((movie,index)=>(
              <SwiperSlide key={index} className='relative rounded overflow-hidden'>
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className='w-full h-full object-cover'
                />
                <div className='absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4'>
                  <h1 className='xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold'>
                    {movie.title}
                  </h1>
                  <div className='flex gap-5 items-center text-dryGray'>
                    <FlexMovieItems movie={movie}/>
                  </div>
                  <div className='flex gap-5 items-center'>
                    <Link to={`/movies/${movie.title}`} className='bg-subMain hover:text-main transitions text-white px-8 py-3 rounded font-medium sm:text-sm text-xs'>
                      Watch
                    </Link>
                    <button className='bg-white hover:text-subMain transitions text-white px-4 py-3 rounded text-sm bg-opacity-30'>
                      <FaHeart/>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
    </div>
  )
}

export default Banner