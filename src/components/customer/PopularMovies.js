import React, { useContext } from 'react'
import Title from './Title'
import {BsCollectionFill} from 'react-icons/bs'
import { Movies } from '../../Data/MovieData';
import MovieCard from './MovieCard';
import axios from '../../api/axios';
import { useLocation } from 'react-router-dom';
import AuthContext from '../../context/AuthProvider';
import axiosApiInstance from '../../context/intercepter';
import { useEffect } from 'react';
import { useState } from 'react';

function PopularMovies() {
  const param = useLocation();
  const {user}= useContext(AuthContext);
  const [filmPopular, setFilmPopular] = useState([]);
  const [favoriteFilm, setFavoriteFilm] = useState([]);
  
  async function getFavoriteId(){
    try {
      const response = await axiosApiInstance.get(axiosApiInstance.defaults.baseURL + `/films/getFavoriteFilms`);
      const favoriteIds = response.data.map(film => film.id);
      setFavoriteFilm(favoriteIds);
    } catch (error) {
      console.error('Error fetching favorite films:', error);
    }
  }

  async function getPopularFilm() {
    const result = await axios.get(axios.defaults.baseURL + `/films/topFavoriteFilms`);
    setFilmPopular(result?.data);
  }

  useEffect(() => {
    getPopularFilm();
    if (user != null) {
      getFavoriteId();
    }
  }, [param,favoriteFilm,filmPopular]);
  return (
    <div className='my-16'>
      <Title title="Popular Movies" Icon={BsCollectionFill}/>
      <div className='grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
        {
          filmPopular.map((movie,index)=>(
            <MovieCard 
              key={index} 
              movie={movie} 
              favoriteFilm={favoriteFilm}
              setFavoriteFilm={setFavoriteFilm}
              user={user}/>
          ))
        }
      </div>
    </div>
  )
}

export default PopularMovies