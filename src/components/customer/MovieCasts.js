import React from 'react'
import { FaUserFriends } from 'react-icons/fa'
import Titles from './Title';
import { Autoplay } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import { User } from './../../Data/UserData';

function MovieCasts() {
  return (
    <div className='my-12'>
        <Titles title="Casts" Icon={FaUserFriends}/>
        <div className='mt-10'>
            <Swiper autoplay={{
                delay:1000,
                disableOnInteraction:false,
                }} 
                loop={true} 
                speed={1000}
                module={[Autoplay]}
                spaceBetween= {10}
                breakpoints={{
                    0:{
                        slidesPerView:1,
                    },
                    400:{
                        slidesPerView:2,
                    },
                    768:{
                        slidesPerView:3,
                    },
                    1024:{
                        slidesPerView:4,
                    },
                    1280:{
                        slidesPerView:5,
                        spaceBetween:30,
                    },
                }}>
                    {
                        User.map((user,i)=>(
                            <SwiperSlide key={i}>
                                <div className='w-full p-3 italic text-text rounded flex-colo bg-dry border border-gray-800'>
                                    <img 
                                        src={`/image/user/${user.image}`} 
                                        alt={user.name} 
                                        className='w-full h-64 object-cover rounded mb-2'/>
                                    <p>{user?.name}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }
            </Swiper>
        </div>
    </div>
  )
}

export default MovieCasts