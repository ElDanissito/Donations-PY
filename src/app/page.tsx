import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProgressBar from '@/components/ProgressBar';
import DonationButtons from '@/components/DonationButtons';
import QRDonation from '@/components/QRDonation';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import ThanksModal from '@/components/ThanksModal';

export default function Home() {
  return (
    <main className="min-h-screen">
      <ThanksModal />
      <Header />
      <Hero />
      <ProgressBar />
      <DonationButtons />
      <QRDonation />
      <AboutSection />
      <Footer />
    </main>
  );
}
