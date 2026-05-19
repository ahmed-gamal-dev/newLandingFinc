"use client"
import React, { useEffect } from 'react';
import Image from '@/compnents/Image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionTitle from "@/compnents/SectionTitle";

export default function PoweredBy() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: true,
            // Removed disable: 'mobile' to allow animations on all screens
            disable: false,
        });

        // Optional: Refresh AOS to ensure positions are calculated correctly
        // after the initial render (helpful for responsive layouts)
        AOS.refresh();
    }, []);

    return (
        // overflow-x-hidden is crucial here to prevent horizontal scroll on mobile
        // when elements fade in from the sides
        <section className="bg-white md:py-20 pb-10 pt-20 overflow-x-hidden">
            <div className="mx-auto max-w-7xl px-4 md:px-6">

                {/* Branding & Main Title Section */}
                <div data-aos="fade-up" className="flex flex-col items-center mb-16 md:mb-24">
                    <div className="flex items-center md:gap-10 gap-4 mb-8">
                        <span className="text-xl md:text-5xl font-medium text-gray-800">
                            Powered by
                        </span>
                        <Image
                            src="/PoweredBy.svg"
                            alt="Partner Logo"
                            width={160}
                            height={60}
                            className="sm:w-28 md:w-24 w-20 h-auto object-contain"
                        />
                    </div>

                    <SectionTitle
                        title={
                            <>
                                You were never the problem. <br className="hidden sm:block" />
                                <span className="text-black">The system was.</span>
                            </>
                        }
                    />
                </div>

                {/* Content Section: Grid Layout */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">

                    {/* Left: Text Content */}
                    <div className='order-1'>
                        {/* Works on all screens now */}
                        <div className="flex flex-col items-center text-center lg:text-left" data-aos="fade-right">
                            <h2 className="text-3xl md:text-5xl lg:text-6xl  text-black mb-6">
                                finc flips the script
                            </h2>
                            <p className="text-sm md:text-lg text-gray-600 max-w-md mx-auto lg:mx-0 leading-relaxed font-medium">
                                We built a platform that works for you.
                                No stress. No pressure. Just intelligent,
                                automated investing that finally makes sense.
                            </p>
                        </div>
                    </div>


                    {/* Right: Image Container */}
                    <div
                        className="order-2 flex justify-end"
                        data-aos="fade-left"
                    >
                        <div className="relative w-full flex justify-end
                                      -mr-4 md:-mr-6
                                      lg:-mr-[calc((100vw-1280px)/2+1.5rem)]">
                            <Image
                                src="/PoweredByMobile.svg"
                                alt="finc app interface"
                                width={900}
                                height={600}
                                priority
                                className="w-full h-auto max-w-[500px] md:max-w-none object-contain object-right"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}