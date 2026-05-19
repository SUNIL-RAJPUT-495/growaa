import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ServicesPage from './Pages/ServicesPage'
import ProjectsPage from './Pages/ProjectsPage'
import BlogPage from './Pages/BlogPage'
import ContactPage from './Pages/ContactPage'
import ScrollToTop from './component/ScrollToTop'

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
