import React from 'react'
import Layout from '../../layout/Layout'
import { useParams } from 'react-router-dom'
import { Movies } from '../../Data/MovieData';
import MovieInfo from '../../components/customer/MovieInfo';
import MovieCasts from '../../components/customer/MovieCasts';
import MovieRating from '../../components/customer/MovieRating';
import Titles from '../../components/customer/Title';
import {BsCollectionFill } from 'react-icons/bs';
import MovieCard from './../../components/customer/MovieCard';

function SingleMovie() {
  const {id} = useParams();
  const movie = Movies.find((movie)=> movie.name ===id);
  const RelatedMovies = Movies.filter(
    (m) => m.category === movie.category
  )
  return (
    <Layout>
      <MovieInfo movie={movie}/>
      <div className='container mx-auto min-h-screen px-2 my-6'>
        <MovieCasts/>
        {/*Rate*/}
        <MovieRating movie={movie}/>
        {/*Related*/}
        <div className='my-16'>
          <Titles title="Related Movies" Icon={BsCollectionFill}/>
          <div className='grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
            {
              RelatedMovies.slice(0,8).map((movie,index)=>(
                <MovieCard key={index} movie={movie}/>
              ))
            }
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SingleMovie