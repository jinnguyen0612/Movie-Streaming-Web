import React from 'react'
import Layout from '../../layout/Layout'
import Banner from '../../components/customer/Banner'
import PopularMovies from '../../components/customer/PopularMovies'
import TopRated from '../../components/customer/TopRated'
import Promos from '../../components/customer/Promos';

function Home() {
  return (
    <Layout>
      <div className='container mx-auto min-h-screen px-2 mb-6'>
        <Banner/>
        <PopularMovies/>
        <Promos/>
        <TopRated/>
      </div>
    </Layout>
  )
}

export default Home