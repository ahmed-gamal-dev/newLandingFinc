'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from '@/compnents/Image';
import img6 from './../../../public/sectionSixImg.png';
import SectionTitle from "../SectionTitle";
import MarketAccessSection from "../MarketAccessSection";
import FincScoreSection from "../FincScoreSection";
import PortfolioInsights from "../PortfolioInsights";

export default function SectionThree() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [portfolioVisible, setPortfolioVisible] = useState(false);
  const [marketAccessVisible, setMarketAccessVisible] = useState(false);
  const [fincScoreVisible, setFincScoreVisible] = useState(false);
  
  const headerRef = useRef(null);
  const portfolioRef = useRef(null);
  const marketAccessRef = useRef(null);
  const fincScoreRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '50px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === headerRef.current) {
            setHeaderVisible(true);
          } else if (entry.target === portfolioRef.current) {
            setTimeout(() => setPortfolioVisible(true), 200);
          } else if (entry.target === marketAccessRef.current) {
            setTimeout(() => setMarketAccessVisible(true), 400);
          } else if (entry.target === fincScoreRef.current) {
            setTimeout(() => setFincScoreVisible(true), 600);
          }
        }
      });
    }, observerOptions);

    const refs = [headerRef, portfolioRef, marketAccessRef, fincScoreRef];
    refs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="relative">
      {/* Background blur div - positioned behind the main container */}
      <div className="absolute inset-0 w-full h-10 bg-purple-900 opacity-20"></div>
      
      <div className="min-h-screen bg-white relative z-10 border-t border-white lg:rounded-t-[50px] md:rounded-t-[30px] rounded-t-[25px] px-4 pb-4 lg:pt-32 pt-16 lg:pb-8 lg:px-8">
        {/* Section Title */}
        <div 
          ref={headerRef}
          className={`w-full px-4 transition-all duration-1000 ease-out ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <SectionTitle
            subTitle="FOR WHEN YOU WANT MORE CONTROL, WITHOUT THE CHAOS"
            title="Take the lead - with the right tools"
          />
        </div>

        {/* Container */} 
        <div className='max-w-7xl mx-auto md:px-6 mt-7 px-2'>
          {/* Portfolio Insights Card */}
          <div 
            ref={portfolioRef}
            className={`rounded-xl shadow-md border border-gray-200 transition-all duration-800 ease-out ${
              portfolioVisible 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-12 scale-95'
            }`}
          >
            <PortfolioInsights/>
          </div>

          {/* Grid Section */}
          <div className='grid lg:grid-cols-3 gap-5 md:pb-16 pb-7 relative mt-6'>
            {/* Market Access Section */}
            <div 
              ref={marketAccessRef}
              className={`rounded-xl lg:col-span-2 shadow-md border border-gray-200  transition-all duration-800 ease-out ${
                marketAccessVisible 
                  ? 'opacity-100 translate-x-0 scale-100' 
                  : 'opacity-0 -translate-x-8 scale-95'
              }`}
            >
              <MarketAccessSection/>
            </div>

            {/* Finc Score Section */}
            <div 
              ref={fincScoreRef}
              className={`lg:col-span-1 h-full transition-all duration-800 ease-out ${
                fincScoreVisible 
                  ? 'opacity-100 translate-x-0 scale-100' 
                  : 'opacity-0 translate-x-8 scale-95'
              }`}
            >
              <FincScoreSection 
                icon={true}
                title="Your finc Score = a stock's health check"
                desc="Think of it like a fitness tracker but for stocks."
                desc2=" We analyze key signals so you know exactly where a stock stands before making a move."              
              />
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
}