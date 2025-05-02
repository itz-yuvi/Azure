"use client";

import FAQSection from "../components/FAQSection";
import HeroSection from "../components/HeroSection";
import PackagesAndOffers from "../components/PackagesAndOffers";
import SignatureExperiences from "../components/SignatureExperiences";
import Testimonials from "../components/Testimoniols";
import Villas from "../components/Villas";


export default function Footer() {
  return (
    
 <div>
    <HeroSection/>
    <SignatureExperiences/>
    <Villas/>
    
    <PackagesAndOffers/>
    <Testimonials/>
    <FAQSection/>
 </div>
  );
}
