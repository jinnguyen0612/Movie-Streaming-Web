import React from 'react'
import SideBar from '../../components/nav/SideBar'
import FavoriteTable from '../../components/customer/FavoriteTable'
import { Movies } from './../../Data/MovieData';

function Favorite() {
  return (
    <SideBar>
      <div className='flex flex-col gap-6'>
        <div className='flex-btn gap-2'>
          <h2 className='text-xl font-bold'>Favorite Movies</h2>
          <button className='bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded'>
            Remove All
          </button>
        </div>
        <FavoriteTable data={Movies}/>
      </div>
    </SideBar>
  )
}

export default Favorite