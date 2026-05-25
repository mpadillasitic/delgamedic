// DelgaMedic — App root
import React, { useState } from 'react'
import './styles.css'
import './data.js'

import { Header, Footer, BookingModal, useReveal } from './chrome.jsx'
import {
  Hero, CredentialsBar, Specialists, FeaturedTreatments,
  Benefits, Process, Testimonials, HealthQuiz, BlogTeaser, FinalCTA,
} from './sections-home.jsx'
import {
  TreatmentsPage, TreatmentDetailPage, AboutPage, ContactPage, BlogPage,
} from './pages.jsx'

function HomePage({ navigate, onCta, onTreatment }) {
  return (
    <>
      <Hero onCta={onCta} navigate={navigate} />
      <CredentialsBar />
      <Specialists />
      <FeaturedTreatments navigate={navigate} onTreatment={onTreatment} />
      <Benefits />
      <Process />
      <Testimonials />
      <HealthQuiz onCta={onCta} />
      <BlogTeaser navigate={navigate} />
      <FinalCTA onCta={onCta} />
    </>
  )
}

function App() {
  const [page, setPage] = useState('home')
  const [slug, setSlug] = useState(null)
  const [modal, setModal] = useState(false)

  useReveal()

  const navigate = (id, s) => {
    setPage(id)
    if (s !== undefined) setSlug(s)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const handleTreatment = (s) => navigate('tratamiento', s)
  const openModal = () => setModal(true)
  const closeModal = () => setModal(false)

  return (
    <>
      <Header page={page} navigate={navigate} onCta={openModal} />
      <main>
        {page === 'home' && (
          <HomePage navigate={navigate} onCta={openModal} onTreatment={handleTreatment} />
        )}
        {page === 'tratamientos' && (
          <TreatmentsPage navigate={navigate} onCta={openModal} onTreatment={handleTreatment} />
        )}
        {page === 'tratamiento' && (
          <TreatmentDetailPage slug={slug} navigate={navigate} onCta={openModal} onTreatment={handleTreatment} />
        )}
        {page === 'nosotros' && (
          <AboutPage navigate={navigate} onCta={openModal} />
        )}
        {page === 'contacto' && (
          <ContactPage onCta={openModal} />
        )}
        {page === 'blog' && (
          <BlogPage navigate={navigate} onCta={openModal} />
        )}
      </main>
      <Footer navigate={navigate} onCta={openModal} />
      <BookingModal open={modal} onClose={closeModal} />
    </>
  )
}

export default App
