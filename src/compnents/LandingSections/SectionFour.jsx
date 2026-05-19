import Image from '@/compnents/Image';
import { useEffect, useRef, useState } from 'react';
import FincScoreSection from "../FincScoreSection";
import Advice from "../Advice";
import RealTime from "../RealTime";

const SectionFour = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full min-h-screen relative">
      {/* Simple CSS animations */}
      <style jsx>{`
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        
        .animate-fade-in-left {
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.8s ease-out;
        }
        
        .animate-fade-in-right {
          opacity: 0;
          transform: translateX(30px);
          transition: all 0.8s ease-out;
        }
        
        .animate-phone-left {
          opacity: 0;
          transform: translateX(100px) translateY(50px) rotate(-8deg);
          transition: all 0.8s ease-out;
        }
        
        .animate-phone-right {
          opacity: 0;
          transform: translateX(120px) translateY(60px) rotate(10deg);
          transition: all 0.8s ease-out;
        }
        
        .animate-scale {
          opacity: 0;
          transform: translateY(20px) scale(0.95);
          transition: all 0.8s ease-out;
        }
        
        /* When visible, reset transforms */
        .visible .animate-fade-in-up,
        .visible .animate-fade-in-left,
        .visible .animate-fade-in-right,
        .visible .animate-phone-left,
        .visible .animate-phone-right,
        .visible .animate-scale {
          opacity: 1;
          transform: translate(0) scale(1) rotate(0deg);
        }
        
        /* Preserve phone rotations when visible */
        .visible .animate-phone-left {
          transform: rotate(-8deg);
        }
        
        .visible .animate-phone-right {
          transform: rotate(10deg);
        }
        
        /* Stagger delays */
        .delay-100 { transition-delay: 0.1s; }
        .delay-200 { transition-delay: 0.2s; }
        .delay-300 { transition-delay: 0.3s; }
        .delay-400 { transition-delay: 0.4s; }
        .delay-500 { transition-delay: 0.5s; }
        
        .spin-slow {
          animation: spin 60s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* Background overlay */}
      <div className="absolute inset-0 w-full h-full bg-purple-900 opacity-20"></div>

      {/* Main content container with visibility class */}
      <div className={`relative z-10 w-full min-h-screen bg-white md:pb-32 pb-auto overflow-hidden md:rounded-b-[50px] rounded-b-[25px] ${isVisible ? 'visible' : ''}`}>
        
        {/* Desktop Layout */}
        <div className="absolute inset-0 hidden md:block">
          <div className="absolute md:-mr-60 mr-0 md:bottom-12 md:top-auto top-20 transform flex justify-end z-20">
             {/* <img 
              src="/ring.png" 
              alt="ring" 
              className="md:w-9/12 w-full animate-spin"
              style={{
                animation: 'spin 60s linear infinite'
              }}
            /> */}
            <img 
              src="/ring.png" 
              alt="ring" 
              className={`md:w-9/12 w-full  delay-100  animate-spin ${isVisible ? ' animate-spin' : ' animate-spin'}`}
               style={{
                animation: 'spin 60s linear infinite'
              }}
            />
          </div>
          
          {/* FincScoreSection behind the ring */}
          <div className="md:w-md w-full h-fit absolute top-1/4 lg:left-[25rem] left-[16rem] transform -translate-x-1/2 -translate-y-1/2 z-10 animate-fade-in-left delay-200">
            <FincScoreSection 
              icon={false}
              title="fincr - your smart money buddy"
              desc="Ask anything. Learn everything.No confusion. No complexity. Just answers you actually understand and trust."
            />            
          </div>
        </div>
        
        {/* Desktop Content - Main Section */}
        <div className="relative hidden md:block z-30 max-w-7xl mx-auto px-4 h-full pt-20">
          <div className="w-full h-full flex justify-end animate-scale delay-400">
            <img 
              src="/2iphones.png" 
              alt="iphones" 
              className="h-[80vh] max-h-[600px] w-auto object-contain hover:scale-105 transition-transform duration-300 ease-out"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="absolute inset-0 md:hidden block">
          <div className="absolute -mr-60 -top-14 transform flex justify-end">
            <img 
              src="/ring.png" 
              alt="ring" 
              className={`w-full  animate-spin delay-100 `}
             style={{
                animation: 'spin 60s linear infinite'
              }}
            />
          </div>
        </div>
        
        {/* Mobile Content - Main Section */}
        <div className="relative z-20 md:hidden max-w-7xl mx-auto p-4 grid grid-cols-1 gap-4 h-full animate-fade-in-up delay-200">
          <div className="w-full h-full flex justify-center iphone-container">
            {/* Back iPhone */}
            <img 
              src="/backIphone.png" 
              alt="back iphone" 
              className="h-full w-44 -mr-10 animate-phone-left delay-300"
            />
            
            {/* Front iPhone */}
            <img 
              src="/frontIphone.png" 
              alt="front iphone" 
              className="h-full w-44 -ml-12 animate-phone-right delay-400"
            />
          </div>
          
          <div className="w-full h-fit my-auto animate-fade-in-up delay-500">
            <FincScoreSection 
              icon={false}
              title="fincr - your smart money buddy"
              desc="Ask anything. Learn everything.No confusion. No complexity. Just answers you actually understand and trust."
            />            
          </div>
        </div>

        {/* Cards Section */}
        <div className="relative z-20 max-w-7xl mx-auto p-4 flex md:flex-row flex-col md:gap-6 gap-5 h-fit justify-center">
          <div className="md:w-fit w-full h-auto col-span-1 border border-gray-200 rounded-2xl bg-white animate-scale delay-300">
            <RealTime/>
          </div>
          
          <div className="h-auto md:w-fit w-full col-span-1 border border-gray-200 rounded-2xl bg-white animate-scale delay-400">
            <Advice/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;

// import Image from '@/compnents/Image';
// import { useEffect, useRef, useState } from 'react';
// import FincScoreSection from "../FincScoreSection";
// import Advice from "../Advice";
// import RealTime from "../RealTime";

// const SectionFour = () => {
//   const [isVisible, setIsVisible] = useState({
//     main: false,
//     phones: false,
//     cards: false
//   });
  
//   const mainRef = useRef(null);
//   const phonesRef = useRef(null);
//   const cardsRef = useRef(null);

//   useEffect(() => {
//     const observerCallback = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const target = entry.target;
//           if (target === mainRef.current) {
//             setIsVisible(prev => ({ ...prev, main: true }));
//           } else if (target === phonesRef.current) {
//             setIsVisible(prev => ({ ...prev, phones: true }));
//           } else if (target === cardsRef.current) {
//             setIsVisible(prev => ({ ...prev, cards: true }));
//           }
//         }
//       });
//     };

//     const observer = new IntersectionObserver(observerCallback, {
//       threshold: 0.2,
//       rootMargin: '0px 0px -50px 0px'
//     });

//     const refs = [mainRef, phonesRef, cardsRef];
//     refs.forEach(ref => {
//       if (ref.current) {
//         observer.observe(ref.current);
//       }
//     });

//     return () => {
//       refs.forEach(ref => {
//         if (ref.current) {
//           observer.unobserve(ref.current);
//         }
//       });
//     };
//   }, []);

//   return (
//     <div className="w-full min-h-screen relative ">
//       {/* Background overlay */}
//       <div className="absolute inset-0 w-full h-full bg-purple-900 opacity-20"></div>
      
//       {/* Main content container */}
//       <div className="relative z-10 w-full min-h-screen bg-white md:pb-32 pb-auto overflow-hidden md:rounded-b-[50px] md:rounded-b-[30px] rounded-b-[25px]">
//         {/* Background Image */}
//         <div className="absolute inset-0 hidden md:block">
//           <div className="absolute md:-mr-60 mr-0 md:bottom-12 md:top-auto top-20 transform flex justify-end z-20">
//             <img 
//               src="/ring.png" 
//               alt="ring" 
//               className="md:w-9/12 w-full animate-spin"
//               style={{
//                 animation: 'spin 60s linear infinite'
//               }}
//             />
//           </div>
          
//           {/* FincScoreSection behind the ring */}
//           <div 
//             className={`md:w-md w-full h-fit absolute top-1/4 left-[25rem] transform -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-1200 delay-200 ease-out ${
//               isVisible.main 
//                 ? 'opacity-100 transform -translate-x-1/2 -translate-y-1/2' 
//                 : 'opacity-0 transform  -translate-y-1/2 translate-x-8'
//             }`}
//           >
//             <FincScoreSection 
//               icon={false}
//               title="fincr - your smart money buddy"
//               desc="Ask anything. Learn everything.No confusion. No complexity. Just answers you actually understand and trust."
//             />            
//           </div>
//         </div>
        
//         {/* Content - Main Section */}
//         <div 
//           ref={mainRef}
//           className={`relative z-30 max-w-7xl mx-auto p-4 grid md:grid-cols-2 md:gap-1 gap-4 h-full transition-all duration-1000 ease-out ${
//             isVisible.main 
//               ? 'opacity-100 transform translate-y-0' 
//               : 'opacity-0 transform translate-y-12'
//           }`}
//         > 
//           <div 
//             className={`md:w-md w-full h-fit order-2 md:order-1 my-auto transition-all duration-1200 delay-200 ease-out ${
//               isVisible.main 
//                 ? 'opacity-100 transform translate-x-0' 
//                 : 'opacity-0 transform -translate-x-8'
//             }`}
//           >
//             {/* This div is now empty as FincScoreSection moved to background */}
//           </div>
          
//           <div 
//             ref={phonesRef}
//             className={`w-full md:block hidden h-full flex justify-center order-1 md:order-2 transition-all duration-1200 delay-400 ease-out ${
//               isVisible.phones 
//                 ? 'opacity-100 transform translate-y-0 scale-100' 
//                 : 'opacity-0 transform translate-y-8 scale-95'
//             }`}
//           >
//             <img 
//               src="/2iphones.png" 
//               alt="iphones" 
//               className="h-[90%]"
//             />
//           </div>
//         </div>

//         {/* Cards Section */}
//         <div 
//           ref={cardsRef}
//           className="relative z-30 max-w-7xl mx-auto p-4 flex md:flex-row flex-col md:gap-6 gap-5 h-fit justify-center"
//         > 
//           <div 
//             className={`md:w-fit w-full h-auto col-span-1 border border-gray-200 rounded-2xl bg-white transition-all duration-1000 delay-200 ease-out ${
//               isVisible.cards 
//                 ? 'opacity-100 transform translate-y-0 scale-100' 
//                 : 'opacity-0 transform translate-y-12 scale-95'
//             }`}
//           >
//             <RealTime/>
//           </div>
          
//           <div 
//             className={`h-auto md:w-fit w-full col-span-1 border border-gray-200 rounded-2xl bg-white transition-all duration-1000 delay-400 ease-out ${
//               isVisible.cards 
//                 ? 'opacity-100 transform translate-y-0 scale-100' 
//                 : 'opacity-0 transform translate-y-12 scale-95'
//             }`}
//           >
//             <Advice/>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SectionFour;