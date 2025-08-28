import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import DonationButtons from '@/components/DonationButtons';
import QRDonation from '@/components/QRDonation';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <DonationButtons />
      <QRDonation />
      <AboutSection />
      <Footer />
    </main>
  );
}
