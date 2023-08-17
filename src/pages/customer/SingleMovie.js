import React from 'react'
import Layout from '../../layout/Layout'
import { useLocation, useParams } from 'react-router-dom'
import MovieInfo from '../../components/customer/MovieInfo';
import Titles from '../../components/customer/Title';
import { useState } from 'react';
import axios from '../../api/axios';
import axiosApiInstance from '../../context/intercepter';
import AuthContext from '../../context/AuthProvider';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Autoplay } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import { FaUserFriends } from 'react-icons/fa'
import { CgSpinner } from 'react-icons/cg';
import MovieRating from '../../components/customer/MovieRating';
import PopularMovies from '../../components/customer/PopularMovies';


function SingleMovie() {
  const {id} = useParams();
  const param = useLocation();
  const {user}= useContext(AuthContext);
  const [load,setLoad] = useState(false);
  const [loadFavorite,setLoadFavorite] = useState(false);
  const [loadActor,setLoadActor] = useState(false);
  const [loadRate,setLoadRate] = useState(false);
  const [movie, setMovie] = useState();
  const [checkFavorite, setCheckFavorite] = useState(false);
  const [actors, setActors] = useState([]);
  const [rate, setRate] = useState();
  

  async function checkFilmFavorite(){
      try{
        const response = await axiosApiInstance.get(axiosApiInstance.defaults.baseURL + `/films/getFavoriteFilms`);
        {
          const favoriteIds = response.data.map(film => film.id);
          if(favoriteIds.includes(movie.id)) setCheckFavorite(true);
        }
      } catch(error){

      }
      setLoadFavorite(true);
  }

  async function getMovie(){
    const result = await axios.get(axios.defaults.baseURL + `/films/getFilm/${id}`);
    setMovie(result?.data);
    setLoad(true);
  }

  async function getActors(){
      const result = await axios.get(axios.defaults.baseURL + `/actors/getFromFilm/${movie.id}`);
      setActors(result?.data);
      setLoadActor(true);
  }

  async function getRate(){
    const result = await axios.get(axios.defaults.baseURL + `/films/averageRating/${movie.id}`);
    setRate(result?.data.average_rating);
    setLoadRate(true);
  }

  useEffect(() => {
    getMovie();

  }, [param,load]);
  useEffect(() => {
    if(movie!=null) {
      getActors();
    }
  }, [param,loadActor]);
  useEffect(() => {
    if(movie!=null) {
      getRate();
    }
  }, [param,loadRate]);
  useEffect(() => {
    if (user != null) {
      checkFilmFavorite();
    }
  }, [param,loadFavorite]);


  return (
    <Layout>
      {
        movie?
        (
          <>
            <MovieInfo movie={movie} user={user} checkFavorite={checkFavorite} setCheckFavorite={setCheckFavorite} rate={rate} setLoadFavorite={setLoadFavorite}/>
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
                                  actors.map((actor,i)=>(
                                      <SwiperSlide key={i}>
                                          <div className='w-full p-3 italic text-text rounded flex-colo bg-dry border border-gray-800'>
                                              <img 
                                                  src={`${actor.photo}`} 
                                                  alt={actor.name} 
                                                  className='w-full h-64 object-cover rounded mb-2'/>
                                              <p>{actor?.name}</p>
                                          </div>
                                      </SwiperSlide>
                                  ))
                              }
                      </Swiper>
                  </div>
              </div>
            <MovieRating movie={movie} setLoadRate={setLoadRate} user={user}/>
            <PopularMovies/>
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