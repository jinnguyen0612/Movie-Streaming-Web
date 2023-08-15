import React from 'react'
import Layout from '../../layout/Layout'
import { useLocation, useParams } from 'react-router-dom'
import { Movies } from '../../Data/MovieData';
import MovieInfo from '../../components/customer/MovieInfo';
import Titles from '../../components/customer/Title';
import {BsCollectionFill } from 'react-icons/bs';
import MovieCard from './../../components/customer/MovieCard';
import { useState } from 'react';
import axios from '../../api/axios';
import axiosApiInstance from '../../context/intercepter';
import AuthContext from '../../context/AuthProvider';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Autoplay } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import { User } from './../../Data/UserData';
import { FaUserFriends } from 'react-icons/fa'
import { CgSpinner } from 'react-icons/cg';


function SingleMovie() {
  const {id} = useParams();
  const param = useLocation();
  const {user}= useContext(AuthContext);
  const [movie, setMovie] = useState();
  const [checkFavorite, setCheckFavorite] = useState(false);
  const [actors, setActors] = useState([]);

  async function checkFilmFavorite(){
      try{
        const response = await axiosApiInstance.get(axiosApiInstance.defaults.baseURL + `/films/getFavoriteFilms`);
        {
          const favoriteIds = response.data.map(film => film.id);
          if(favoriteIds.includes(movie.id)) setCheckFavorite(true);
        }
      } catch(error){

      }
  }

  async function getMovie(){
    const result = await axios.get(axios.defaults.baseURL + `/films/getFilm/${id}`);
    setMovie(result?.data);
  }

  async function getActors(){
    if(movie){
      const result = await axios.get(axios.defaults.baseURL + `/actors/getFromFilm/${movie.id}`);
      setActors(result?.data);
    }
  }

  useEffect(() => {
    getMovie();
    getActors();
    console.log(actors);
    if (user != null) {
      checkFilmFavorite();
    }
  }, [param,movie]);


  return (
    <Layout>
      {
        movie?
        (
          <>
            <MovieInfo movie={movie} user={user} checkFavorite={checkFavorite} setCheckFavorite={setCheckFavorite}/>
            <div className='container mx-auto min-h-screen px-2 my-6'>
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
                                                  src={`${user.photo}`} 
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
            </div>
          </>
        ):
        (
          <div>
            Loading More <CgSpinner className='animate-spin'/>
          </div>
        )
      }
      
    </Layout>
  )
}

export default SingleMovie