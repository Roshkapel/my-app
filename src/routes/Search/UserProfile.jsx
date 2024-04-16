import React from 'react';
import { HomeNav } from './HomeNav';
import { UserNav } from './UserNav';
import MenuBar from './MenuBar';
import { UserTableData } from './UserTableData';
export const UserProfile = ({setResults,users}) => {

    const width = 100;
    const height = 100;
  return (
    <>
      <UserNav />
      <MenuBar />
      <div className='profile-box'>
      <div className='side-bar'> 
        <div className='user-profile'>
          <div className='user-profile-data'>
            <h4>User Data</h4>
            <p>Listed</p>
          </div>
        </div>
        <div className='user-profile'>
        <div className='user-profile-data'>
            <h4>User Stats</h4>
            <p>Listed</p>
          </div>
        </div>
        <div className='user-profile'></div>
        <div className='user-profile'></div>
        <div className='user-profile'></div>
        <div className='user-profile'></div>
      </div>

      <div className='data-table'>
        <UserTableData />
      </div>
      </div>
    </>
  )
}