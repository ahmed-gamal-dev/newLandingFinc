"use client"
import React, { useEffect } from 'react';
import SectionTitle from "../SectionTitle";
import Image from '@/compnents/Image';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function SectionOne() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 120,
    });
    // Refresh AOS on component mount
    AOS.refresh();
  }, []);

  return (
    <section className="min-h-screen md:pt-32 pt-10  overflow-hidden w-full">
      {/* Section Title */}
      <div className="w-full px-4 " data-aos="fade-up" data-aos-delay="200">
        <SectionTitle
          subTitle="IT WASN'T YOUR FAULT — UNTIL NOW"
          title="You were never the problem. The system was."
        />
      </div>
      <div className="w-full mx-auto relative lg:pl-12 pl-0 z-10">
        <div className="grid lg:grid-cols-2 w-full md:gap-16 gap-6 items-start  py-10">
          {/* Left Content */}
          <div className="space-y-1 md:px-4 px-10 order-2 md:order-1 lg:pl-32  flex flex-col   h-full md:pt-50 pt-1">
            {/* Subheading */}
            <div data-aos="fade-right" data-aos-delay="400">
              <h2 className="text-3xl  sm:text-5xl lg:text-6xl font-semibold mb-4 leading-tight ">
                finc flips the script
              </h2>
            </div>
            {/* Description */}
            <div data-aos="fade-right" data-aos-delay="600">
              <p className="text-sm sm:text-xl text-gray-600 max-w-md leading-relaxed	  mx-auto lg:mx-0">
We built a platform that works for you. <br/>
No stress. No pressure. Just intelligent,<br/> automated investing that finally makes sense.
              </p>
            </div>
          </div>
          {/* Right Content - Image */}
          <div className="relative flex justify-end order-1 md:order-2 lg:justify-end" data-aos="fade-left" data-aos-delay="800">
            {/* Hand holding phone animation wrapper */}
            <div className="w-full h-full max-w-lg lg:max-w-none lg:pr-0">
              {/* Image container - positioned to extend to right border */}
              <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] -lg:translate-x-6">
                <Image
                  src="/sectionOneImg.png"
                  alt="Hand holding phone with finc app"
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'right' }}
                  className="animate-float"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}