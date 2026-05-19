import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navebar } from '../component/Navebar'
import { Footer } from '../component/Footer'
import { WhatsAppWidget } from '../component/WhatsAppWidget'

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navebar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  )
}

export default MainLayout

