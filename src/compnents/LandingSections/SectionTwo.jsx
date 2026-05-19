"use client"
import SectionTitle from "../SectionTitle";
import Image from '@/compnents/Image';
import img1 from './../../../public/section2img1.png';
import img2 from './../../../public/section2img2.png';
import img3 from './../../../public/section2img3.png';
import img4 from './../../../public/section2img4.png';
import React, { useState, useEffect, useRef } from 'react';

// Reusable FeatureCard component
const FeatureCard = ({ 
  icon, 
  title,
  subtitle, 
  description, 
  className = "",
  index = 0,
  style,
  note
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add a staggered delay based on index
            setTimeout(() => {
              setIsVisible(true);
            }, index * 150);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  const renderIcon = () => {
    // If icon is a React element (JSX), render it directly
    if (React.isValidElement(icon)) {
      return icon;
    }
    // If icon is an imported image (default, named, or string path)
    else if (icon) {
      return (
        <div className="w-26 h-26 md:w-32 md:h-32 flex items-center justify-center">
          <Image 
            src={icon} 
            alt={title} 
            className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
            width={250}
            height={250}
            priority
          />
        </div>
      );
    }
    // Fallback if no icon is provided
    return null;
  };

  return (
    <div 
      ref={cardRef}
      className={`bg-white rounded-3xl p-6 md:p-10 shadow-sm transition-all duration-700 hover:shadow-xl border border-[#EAD4F0] group relative overflow-hidden ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-12 scale-95'
      } ${style}`}
    >
      {/* Animated background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
      
      {/* Floating orb effect */}
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-700 group-hover:scale-150 blur-xl"></div>
      
      <div className="relative z-10">
        <div className={`   ${note?'md:mb-8 -mb-6 mt-10':'mb-8'}  transition-transform duration-500 group-hover:scale-105 ${note?'md:rotate-0 rotate-18':''}`}>
          {renderIcon()}
        </div>
        
        <div className="space-y-4 ">
          <h3 className="text-xl md:text-2xl max-w-lg font-bold text-gray-900 transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text leading-tight">
            {title}
          </h3>
          {subtitle && (
            <p className="text-lg md:text-xl font-semibold text-gray-700 transition-colors duration-300 group-hover:text-purple-600">
              {subtitle}
            </p>
          )}
          <p className="text-gray-500 text-sm md:text-lg leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
            {description}
          </p>
          
          {/* Note displayed at the bottom with subtle styling */}
          {note && (
            <div className='md:h-[6vh] flex  items-end  justify-center md:justify-start '>
               <p className="text-xs text-gray-400 pt-2 transition-colors duration-300">
                {note}
              </p>  
            </div>
             
          )}
        </div>
      </div>

      {/* Animated border effect */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-500"></div>
      
    </div>
  );
};

// Main component
const SectionTwo = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeaderVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '100px'
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  const features = [
    {
      id: 1,
      icon: img1,
      title: "Tell us what matters to you.",
      description: "Your goals, Your dreams, Your future, We'll take it from there.",
      style: "md:col-span-1  col-span-2"
    },
    {
      id: 2,
      icon: img2,
      title: "Get a personalized portfolio - built for your life.",
      subtitle: "",
      description: "Whether it's a trip to Spain or building long-term wealth - finc creates a portfolio just for you. It auto-adjusts in the background to keep you on track. No stress, just progress.",
      style: "col-span-2"
    },
    {
      id: 3,
      icon: img3,
      title: "Invest ethically. Grow confidently.",
      description: "Our portfolios are clean, values-aligned and have outperformed traditional investing in many markets.* No compromise on growth. No compromise on values.",
      note: "*Based on global Sharia-compliant index performance",
      style: "col-span-2"
    },
    {
      id: 4,
      icon: img4,
      title: "Hands-off, Worry-free, Always working",
      description: "You set the amount and frequency. We handle the rest with secure, transparent AI built for smarter investing.",
      style: "md:col-span-1  col-span-2"
    }
  ];

  return (
    <div  className="md:pt-1  pt-10 overflow-hidden w-full">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Section Title */}
      <div 
        ref={headerRef}
        className={`w-full px-4 transition-all duration-1000 ${
          headerVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
        <SectionTitle
          subTitle="INVESTING THE SMART, STRESS-FREE WAY"
          title="Let your money work - automatically."
        />
      </div>
      
      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16 relative mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              subtitle={feature.subtitle}
              description={feature.description}
              index={index}
              style={feature.style}
              note={feature.note}
            />
          ))}
        </div>
      </div>
        <div className="w-full py-8 bg-gradient-to-t from-purple-900 to-white opacity-20"></div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
};

export default SectionTwo;