import React from 'react'
import Navbar from '../components/Navbar';

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="relative h-screen w-screen opacity-0.75 overflow-x-hidden" style={{ backgroundImage: "url('https://tse1.mm.bing.net/th?id=OIP.pCyS2intswItJtjh7F_AFwHaEo&pid=Api&P=0&h=180')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Navbar />
        {children}
      </div>
    </>
  )
}

export default MainLayout;