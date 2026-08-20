import React from 'react';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import Problem from '../components/landing/Problem';
import WhyItMatters from '../components/landing/WhyItMatters';
import Differentiation from '../components/landing/Differentiation';
import WhoBenefits from '../components/landing/WhoBenefits';
import BusinessModel from '../components/landing/BusinessModel';
import Traction from '../components/landing/Traction';
import Team from '../components/landing/Team';
import Compliance from '../components/landing/Compliance';
import Impact from '../components/landing/Impact';
import FinalCta from '../components/landing/FinalCta';
import Footer from '../components/landing/Footer';
import '../components/landing/Landing.css';

const LandingPage = () => (
  <div className="landing">
    <Navbar />
    <Hero />
    <Problem />
    <WhyItMatters />
    <Differentiation />
    <WhoBenefits />
    <BusinessModel />
    <Traction />
    <Team />
    <Compliance />
    <Impact />
    <FinalCta />
    <Footer />
  </div>
);

export default LandingPage;
