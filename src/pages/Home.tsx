import React from 'react'
import Hero from '@/components/home/Hero'
import TopMentors from '@/components/home/TopMentors'
import WhatWeOffer from '@/components/home/WhatWeOffer'
import HireMentorSection from '@/components/home/HireMentore'
import ClientTestimonials from '@/components/home/ClientTestimonials'
export default function Home() {
  return (
    <div>
      <Hero />
      <TopMentors />
      <WhatWeOffer />
      <HireMentorSection />
      <ClientTestimonials />
    </div>
  )
}
