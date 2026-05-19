"use client"
import React from 'react';
import Image from '@/compnents/Image';
import { motion } from 'framer-motion';
import SectionTitle from "@/compnents/SectionTitle";

const steps = [
    {
        number: 1,
        title: "Tell us what matters to you.",
        description: "Your goals. Your dreams. Your future. We'll take it from there.",
        isFilled: false,
    },
    {
        number: 2,
        title: "Get a personalized portfolio",
        description: "Whether it's a trip to Spain or building long-term wealth, finc creates a portfolio just for you.",
        isFilled: true,
    },
    {
        number: 3,
        title: "Invest ethically. Grow confidently.",
        description: "Our portfolios are clean, values-aligned and have outperformed traditional investments in many markets.",
        isFilled: false,
    },
    {
        number: 4,
        title: "Hands-off. Worry-free. Always working.",
        description: "You set the amount and frequency. We handle the rest with secure, transparent AI built for smarter investing.",
        isFilled: true,
    },
];

export default function StepperSection() {
    return (
        <section className="bg-white md:py-24 py-12 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionTitle title="Let your money work - automatically" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start mt-16">

                    {/* Left: Sticky Phone Image */}
                    {/* 'sticky top-24' keeps the image in view as you scroll through the steps */}
                    <div className="lg:sticky lg:top-24 flex justify-center lg:justify-start px-8 md:px-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full max-w-[450px]"
                        >
                            <Image
                                src="/newMobImg.svg"
                                alt="finc app interface"
                                width={800}
                                height={1000}
                                className="w-full h-auto object-contain"
                                priority
                            />
                        </motion.div>
                    </div>

                    {/* Right: Vertical Stepper */}
                    <div className="flex flex-col">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                // Each step triggers its own animation when it enters 30% of the viewport
                                initial={{ opacity: 0.3, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ amount: 0.6, once: false }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="flex items-stretch gap-6 md:gap-8 group"
                            >
                                {/* Left Column: Number and Line */}
                                <div className="flex flex-col items-center">
                                    <motion.div
                                        // Number pops when in view
                                        initial={{ scale: 0.8 }}
                                        whileInView={{ scale: 1 }}
                                        className={`
                                            flex-shrink-0 w-12 h-12 md:w-14 md:h-14 
                                            flex items-center justify-center 
                                            rounded-md text-xl font-bold border-2 z-10
                                            ${step.isFilled
                                            ? 'bg-[#5B21B6] border-[#5B21B6] text-white'
                                            : 'bg-white border-[#5B21B6] text-[#5B21B6]'
                                        }
                                        `}
                                    >
                                        {step.number}
                                    </motion.div>

                                    {/* Vertical Line Animation */}
                                    {index !== steps.length - 1 && (
                                        <div className="relative w-px h-full min-h-[100px] my-2">
                                            <div className="absolute inset-0 border-l-2 border-dashed border-gray-200"></div>
                                            <motion.div
                                                className="absolute inset-0 border-l-2 border-dashed border-[#5B21B6]"
                                                initial={{ height: 0 }}
                                                whileInView={{ height: "100%" }}
                                                viewport={{ amount: 0.5 }}
                                                transition={{ duration: 0.8, delay: 0.2 }}
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* Right Column: Text Content */}
                                <div className={`flex-1 pt-1 md:pt-2 ${index !== steps.length - 1 ? 'pb-16 md:pb-24' : ''}`}>
                                    <h3 className="text-xl md:text-3xl font-bold text-black mb-3 leading-snug">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 text-base md:text-xl leading-relaxed max-w-md">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}