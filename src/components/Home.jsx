// eslint-disable-next-line no-unused-vars
import React from 'react'
import Topnav from './Topnav'
import Card from './Card'
import img from './background.png'


function Home() {
  return (
    <>
        <Topnav
        coins={30}
        userName='Anish P.'/>
        <Card
        title='Astronomy and Space quiz'
        question={15}
        time={30}
        tags = {['Stars','Space','Earth','Paid']}
        image = {img}
        />
    </>
  )
}

export default Home