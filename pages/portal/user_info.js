import React from 'react'
import PortalHeader from '../../components/Portal/header'
import Layout from '../../components/Portal/layout'
import UserInfo from '../../components/Portal/UserInfo'

export default function User_info() {
  return (
    <div className='ptl'>
        <Layout/>
        <PortalHeader/>
        <UserInfo/>
    </div>
  )
}
