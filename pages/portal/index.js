import React from 'react'
import DashboardIndex from '../../components/Portal/dashboard'
import PortalHeader from '../../components/Portal/header'
import Layout from '../../components/Portal/layout'
import UserInfo from '../../components/Portal/UserInfo'

export default function PortalIndex() {
  return (
    <div className='ptl'>
        <Layout/>
        <PortalHeader/>
        <DashboardIndex/>
    </div>
  )
}
