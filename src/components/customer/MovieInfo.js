import React from 'react'
import FlexMovieItems from './FlexMovieItems'
import { FaHeart, FaPlay, FaShareAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Rating from './Star';
import { toast } from 'react-toastify';
import axiosApiInstance from '../../context/intercepter';

function MovieInfo({movie , checkFavorite, setCheckFavorite,user}) {
    

    const handleFavorite = async (id) => {
        if (checkFavorite) {
          try {
            await axiosApiInstance.delete(`/films/deleteFavoriteFilm/${id}`);
            setCheckFavorite(false);
            toast.success('Remove from favorite');
          } catch (error) {
            toast.error('Error removing film from favorite');
            console.log(error);
          }
        } else {
          try {
            await axiosApiInstance.post(`/films/addFavoriteFilm/${id}`);
            setCheckFavorite(true);
            toast.success('Add to favorite');
          } catch (error) {
            toast.error('Error adding film to favorite');
            console.log(error);
          }
        }
      };

  return (
    <div className='w-full xl:h-screen relative text-white'>
        <img 
            src={`${movie?.poster}`}
            alt={movie?.title}
            className='w-full hidden xl:inline-block h-full object-cover'/>
        <div className='xl:bg-main bg-dry flex-colo xl:bg-opacity-90 xl:absolute top-0 left-0 right-0 bottom-0'>
            <div className='container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-colo py-10 lg:py-20 gap-8'>
                <div className='xl:col-span-1 w-full xl:order-none order-last h-header bg-dry border border-gray-800 rounded-lg overflow-hidden'>
                    <img 
                        src={`${movie?.poster}`} 
                        alt={movie.title} 
                        className='w-full h-full object-cover'/>
                </div>
                <div className='col-span-2 md:grid grid-cols-5 gap-4 items-center'>
                    <div className='col-span-3 flex flex-col gap-10'>
                        {/*Title*/}
                        <h1 className='xl:text-4xl capitalize font-sans text-2xl font-bold'>
                            {movie?.title}
                        </h1>
                        {/*Rating*/}
                        <div className='flex items-center gap-4 font-medium text-star'>
                            <Rating value={5}/>
                        </div>
                        {/*Flex items*/}
                        <div className='flex items-center gap-4 font-medium text-dryGray'>
                            <div className='flex-colo bg-subMain text-xs px-2 py-1'>
                                {movie.genre.name}
                            </div>
                            <div className='flex-colo bg-subMain text-xs px-2 py-1'>
                                HD 4K
                            </div>
                            {/* <FlexMovieItems movie={movie && movie}/> */}
                        </div>
                        {/*Desciption*/}
                        <p className='text-text text-sm leading-7'>{movie?.description}</p>
                        <div className='grid sm:grid-cols-4 grid-cols-3 gap-4 p-6 bg-main border border-gray-800 rounded-lg'>
                            {/*Favorite*/}
                            <div className='col-span-1 flex-colo'>
                                {user?
                                    <button onClick={(e)=>handleFavorite(movie?.id)} className={`w-10 h-10 flex-colo rounded-lg bg-white bg-opacity-20 hover:text-subMain`}>
                                        <FaHeart/>
                                    </button>:
                                    <Link to={`/login`} className={`w-10 h-10 flex-colo rounded-lg bg-white bg-opacity-20 hover:text-subMain`}>
                                        <FaHeart/>
                                    </Link>
                                }
                            </div>
                            {/*Share*/}
                            <div className='col-span-1 flex-colo border-r border-border'>
                                <button className='w-10 h-10 flex-colo rounded-lg bg-white bg-opacity-20'>
                                    <FaShareAlt/>
                                </button>
                            </div>
                            {/*Language*/}
                            <div className='col-span-2 flex-colo font-medium text-sm'>
                                <p>
                                  Language:{" "}
                                  <span className='ml-2 truncate'>ENGLISH</span>  
                                </p>
                            </div>
                            {/*Watch button*/}
                            <div className='sm:hidden md:block col-span-4 flex justify-end font-medium text-sm'>
                                {user?
                                    <Link to={`/watch/${movie?.title}`} className='bg-subMain py-4 hover:bg-dry transitions border-2 border-subMain rounded-full flex-rows gap-4 w-full sm:py-3'>
                                        <FaPlay className='h-3 w-3'/> Watch
                                    </Link>:
                                    <Link to={`/login`} className='bg-subMain py-4 hover:bg-dry transitions border-2 border-subMain rounded-full flex-rows gap-4 w-full sm:py-3'>
                                        <FaPlay className='h-3 w-3'/> Watch
                                    </Link>
                                }
                            </div>
                        </div>
                    </div>
                    {/*Download button*/}
                    {/* <div className='col-span-2 md:mt-0 mt-2 flex justify-end'>
                        <button className='md:w-1/4 w-full relative flex-colo bg-subMain hover:bg-transparent border-2 border-subMain transitions md:h-64 h-20 rounded font-medium'>
                            <div className='flex-rows gap-6 text-md uppercase tracking-widest absolute md:rotate-90'>
                                Download <FiLogIn className='w-6 h-6'/>
                            </div>
                        </button>
                    </div> */}
                    {/*Play button*/}
                    <div className='col-span-2 md:mt-0 mt-2 flex justify-end'>
                        {user?
                            <Link to={`/watch/${movie?.title}`} className='md:w-1/4 w-full relative flex-colo bg-subMain hover:bg-transparent border-2 border-subMain transitions md:h-64 h-20 rounded font-medium'>
                                <div className='flex-rows gap-6 text-md uppercase tracking-widest absolute md:rotate-90'>
                                    Watch <FaPlay className='w-6 h-6'/>
                                </div>
                            </Link>:
                            <Link to={`/login`} className='md:w-1/4 w-full relative flex-colo bg-subMain hover:bg-transparent border-2 border-subMain transitions md:h-64 h-20 rounded font-medium'>
                                <div className='flex-rows gap-6 text-md uppercase tracking-widest absolute md:rotate-90'>
                                    Watch <FaPlay className='w-6 h-6'/>
                                </div>
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieInfo