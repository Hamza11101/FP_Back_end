import React from 'react'
import WelcomImg from '../../assets/concert-2527495_640.jpg'
import {
  CCard,
  CCardBody,
 } from '@coreui/react'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
const Dashboard = () => {
  return (
    <>
      <WidgetsDropdown />
      <CCard className="m-0 p-0">
        <CCardBody className="m-0 p-0">
       <img src={WelcomImg} alt='eventimg' className="d-block w-100 h-25 "/>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Dashboard
