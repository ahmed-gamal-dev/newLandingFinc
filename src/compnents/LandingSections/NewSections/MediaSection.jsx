"use client"
import React, { useState, useEffect, useRef } from 'react';
import SectionTitle from "../../SectionTitle";
import Image from '@/compnents/Image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FincScoreSection from "@/compnents/FincScoreSection";
import MediaCard from "@/compnents/LandingSections/NewSections/MediaCard";
import ChartSection from "@/compnents/LandingSections/NewSections/ChartSection";

export default function MediaSection() {
    const [headerVisible, setHeaderVisible] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        // Updated AOS init: removed disable: 'mobile'
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: true,
            offset: 50, // Triggers animation slightly earlier on mobile
            disable: false // Ensures it runs on all devices
        });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setHeaderVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (headerRef.current) observer.observe(headerRef.current);
        return () => {
            if (headerRef.current) observer.unobserve(headerRef.current);
        };
    }, []);

    return (
        /* overflow-x-hidden is crucial here to prevent side-scrolling during fade-in animations */
        <section className="min-h-screen flex flex-col pt-8 md:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-grow flex flex-col">

                {/* 1. Header Section */}
                <div
                    ref={headerRef}
                    className={`w-full mb-8 md:mb-16 transition-all duration-1000 ease-out flex-shrink-0 ${
                        headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >

                    <SectionTitle
                        subTitle=""
                        title={<span>Take the lead -<br />with the right tools</span>}
                    />
                </div>

                {/* 2. Top Grid: Chart and Brands */}
                {/*<div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8 md:mb-12 flex-shrink-0">*/}
                {/*    <div data-aos="fade-up" data-aos-delay="100" className="w-full md:w-7/12">*/}
                {/*        <ChartSection />*/}
                {/*    </div>*/}
                {/*    <div data-aos="fade-up" data-aos-delay="200" className="w-full md:w-5/12">*/}
                {/*        <MediaCard />*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/* 3. Bottom Grid: Description Box and Phones */}
                <div className="flex-grow flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-8 xl:gap-12 mt-8 md:mt-12 items-stretch">

                    {/* Left: Styled Purple Card */}
                    {/* Changed to fade-up for mobile compatibility, switches to fade-right on lg screens */}
                    <div
                        data-aos="fade-up"
                        data-aos-md="fade-right"
                        className="lg:w-5/12 order-2 lg:order-1"
                    >
                        <div className="h-full md:h-4/7 p-2 md:mt-20 md:p-3 lg:p-4 xl:p-6  group transition-all duration-500 flex flex-col">
                            <div className="flex-grow flex flex-col justify-center ">
                                <FincScoreSection
                                    icon={false}
                                    title="fincr - your smart money buddy"
                                    desc="Ask anything. Learn everything. No confusion. No complexity. Just answers you actually understand and trust."
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right: The Two Phones Image */}
                    <div
                        data-aos="fade-up"
                        data-aos-md="fade-left"
                        className="lg:w-7/12 order-1 lg:order-2 flex justify-center items-center"
                    >
                        <div className="relative w-full h-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-full transition-transform duration-500 hover:scale-[1.02]">
                            <div className="relative w-full h-full flex items-center justify-center">
                                <Image
                                    src="/2iphones.png"
                                    alt="fincr app interface"
                                    width={1100}
                                    height={1100}
                                    priority
                                    className="w-full h-auto max-h-[400px] sm:max-h-[450px] md:max-h-[500px] lg:max-h-[600px] xl:max-h-[600px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style jsx>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob { animation: blob 10s infinite; }
                .animation-delay-2000 { animation-delay: 2s; }
                
                /* Ensure full height on all screen sizes */
                @media (max-width: 1023px) {
                    section {
                        min-height: auto;
                    }
                    .lg\\:w-5\\/12 > div {
                        min-height: 300px;
                    }
                }
                
                @media (max-width: 767px) {
                    .lg\\:w-5\\/12 > div {
                        min-height: 250px;
                    }
                }
            `}</style>
        </section>
    );
}