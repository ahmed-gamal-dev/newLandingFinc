'use client';

import React, { useState } from 'react';
import Image from '@/compnents/Image';
import axios from 'axios';
import img6 from './../../../public/iphonee.png';

// Rate limiting variables (in-memory storage)
let lastRequestTime = 0;
const RATE_LIMIT_DURATION = 1 * 60 * 1000; // 3 minutes in milliseconds

export default function SectionSix() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [rateLimitMessage, setRateLimitMessage] = useState('');

  const checkRateLimit = () => {
    const currentTime = Date.now();
    const timeSinceLastRequest = currentTime - lastRequestTime;
    
    if (lastRequestTime > 0 && timeSinceLastRequest < RATE_LIMIT_DURATION) {
      const remainingTime = RATE_LIMIT_DURATION - timeSinceLastRequest;
      const remainingMinutes = Math.ceil(remainingTime / (60 * 1000));
      return {
        allowed: false,
        remainingMinutes
      };
    }
    
    return { allowed: true };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setRateLimitMessage('');

    // Check rate limit
    const rateLimitCheck = checkRateLimit();
    if (!rateLimitCheck.allowed) {
      setRateLimitMessage(`Please wait ${rateLimitCheck.remainingMinutes} more minute(s) before trying again.`);
      return;
    }

    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }

    setIsLoading(true);
    
    // Update last request time immediately when making the request
    lastRequestTime = Date.now();

    try {
      await axios.post('https://contact.terzoo.com/api/whitelist/store', {
        email: email
      }).then((res) => {
        setIsSuccess(true);
        setEmail('');
        setTimeout(() => {
          setIsSuccess(false);
        }, 4000);
      });
   
    } catch (err) {
      if (err.response && err.response.data && err.response.data.errors && err.response.data.errors.email) {
        setError(err.response.data.errors.email[0]);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative ">
      {/* Background blur div - positioned behind the main container */}
      {/*for first design */}
      {/*<div className="absolute inset-0 w-full h-full bg-purple-900 opacity-20 hidden md:block -z-10"></div>*/}
      
      <div className="min-h-screen bg-white relative z-10 border-t border-white lg:rounded-t-[50px] md:rounded-t-[30px] rounded-t-[25px] flex items-center justify-center px-4 pb-4 lg:pt-32 pt-4 lg:pb-8 lg:px-8">
        <div className="max-w-6xl mx-auto w-full">
          <div className="relative gap-8 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="relative z-20 w-full">
                 {/* Large Headline */}
              <h1 className="text-5xl  md:text-8xl xl:text-9xl font-black text-black  mb-8 lg:mb-12">
                Ready to
                <br />
                grow?
              </h1>
             
              
              {/* Purple Card */}
              <div className="relative w-full">
                <div className="w-full relative bg-gradient-to-br from-[#7F5AF0] via-[#9F80FF] to-[#CBB7FF]  rounded-3xl p-5 md:p-10 md:mt-auto mt-16 md:h-auto h-[650px] text-white  overflow-hidden">
                  {/* Background pattern/texture */}
                  <div className="absolute opacity-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-12 translate-y-12"></div>
                  </div>
                  
                  <div className="relative z-10 sm:w-6/12 sm:pt-20 pt-1 h-full flex flex-col justify-end ">
                
                  
                    <h2 className="text-2xl font-bold mb-4">
                      Invest in your future your way
                    </h2>
                    <p className="text-gray-300 mb-8 text-sm lg:text-lg opacity-90">
                      Join thousands of smart investors who are growing their wealth with our intelligent investment platform. Start with as little as $1 and watch your money work harder for you.
                    </p>
                    
                    {/* Success Message */}
                    {isSuccess && (
                      <div className="mb-4 p-3 rounded-lg bg-green-100 border border-green-200">
                        <p className="text-sm text-green-800 font-medium">🎉 Welcome aboard! You're now on the waitlist.</p>
                      </div>
                    )}

                    {/* Error Messages */}
                    {error && (
                      <div className="mb-4 p-3 rounded-lg bg-red-100 border border-red-200">
                        <p className="text-sm text-red-600">{error}</p>
                      </div>
                    )}

                    {rateLimitMessage && (
                      <div className="mb-4 p-3 rounded-lg bg-orange-100 border border-orange-200">
                        <p className="text-sm text-orange-600">{rateLimitMessage}</p>
                      </div>
                    )}
                    
                    {/* Email input */}
                    {/*<form onSubmit={handleSubmit} className="relative">*/}
                    {/*  <div className="flex bg-white rounded-full w-full shadow-lg">*/}
                    {/*    <input */}
                    {/*      type="email" */}
                    {/*      value={email}*/}
                    {/*      onChange={(e) => setEmail(e.target.value)}*/}
                    {/*      placeholder="Enter your email" */}
                    {/*      className="relative w-full bg-transparent text-gray-700 placeholder-gray-500 px-4 py-3 focus:outline-none font-medium text-sm"*/}
                    {/*      disabled={isLoading}*/}
                    {/*      required*/}
                    {/*    />*/}
                    {/*    <button */}
                    {/*      type="submit"*/}
                    {/*      // disabled={isLoading || !email.trim()}*/}
                    {/*      className="right-0 absolute bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-orange-400 hover:to-orange-600*/}
                    {/*       text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 text-sm whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center space-x-2"*/}
                    {/*    >*/}
                    {/*      {isLoading ? (*/}
                    {/*        <>*/}
                    {/*          <div className="w-4 h-4 border-2 border-white sborder-t-transparent rounded-full animate-spin"></div>*/}
                    {/*          <span>Joining...</span>*/}
                    {/*        </>*/}
                    {/*      ) : (<> */}
                    {/*      <span className='hidden md:block'>Join waitlist</span>*/}
                    {/*      <span className='md:hidden block'>Join</span>*/}
                    {/*         </>)}*/}
                    {/*    </button>*/}
                    {/*  </div>*/}
                    {/*</form>*/}
                    {/* Email input sss*/}
                    <form onSubmit={handleSubmit} className="relative">
                      <div className="flex bg-white rounded-full w-full shadow-lg 1"> {/* added p-1 for slight padding around the button */}
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter here email"
                            className="relative w-full bg-transparent text-gray-700 placeholder:text-gray-300 px-6 py-3 focus:outline-none font-medium text-sm"
                            disabled={isLoading}
                            required
                        />
                        <button
                            type="submit"
                            className="right-0 relative bg-gradient-to-r from-[#BD24DF] to-[#26B1FB] hover:opacity-90
       text-white font-bold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 text-sm whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center space-x-2"
                        >
                          {isLoading ? (
                              <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                <span>Joining...</span>
                              </>
                          ) : (
                              <>
                                <span>Join the waitlist</span>
                              </>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Phone Image */}
            <div className="absolute -bottom-7 z-30 md:right-0 -right-4 md:top-0 top-14 justify-center lg:justify-end">
              <div className="relative">
                {/* Phone Image */}
                <div className="relative transform hover:scale-105 hover:rotate-2 transition-all duration-500">
                   <div className="w-w-[300px] lg:w-[520px] mx-auro">
            <Image 
              src={img6} 
                    alt="Investment app on iPhone" 
              className="w-full h-full object-contain  transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
              width={800}
              height={300}
              priority
            />
          </div>
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute -left-1 top-32 w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-80 animate-pulse"></div>
                {/* <div className="absolute -right-4 bottom-32 w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-70 animate-bounce"></div> */}
                <div className="absolute -md:right-4 right-3 bottom-32 w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-70 animate-bounce"></div>
                <div className="absolute left-8 bottom-16 w-8 h-8 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-60 animate-ping"></div>
              </div>
            </div>
                
          </div>
        </div>
      </div>
    </div>
  );
}



























// 'use client';

// import React, { useState } from 'react';
// import Image from '@/compnents/Image';
// import axios from 'axios';
// import img6 from './../../../public/sectionSixImg.png';

// // Rate limiting variables (in-memory storage)
// let lastRequestTime = 0;
// const RATE_LIMIT_DURATION = 1 * 60 * 1000; // 3 minutes in milliseconds

// export default function SectionSix() {
//   const [email, setEmail] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [error, setError] = useState('');
//   const [rateLimitMessage, setRateLimitMessage] = useState('');

//   const checkRateLimit = () => {
//     const currentTime = Date.now();
//     const timeSinceLastRequest = currentTime - lastRequestTime;
    
//     if (lastRequestTime > 0 && timeSinceLastRequest < RATE_LIMIT_DURATION) {
//       const remainingTime = RATE_LIMIT_DURATION - timeSinceLastRequest;
//       const remainingMinutes = Math.ceil(remainingTime / (60 * 1000));
//       return {
//         allowed: false,
//         remainingMinutes
//       };
//     }
    
//     return { allowed: true };
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setRateLimitMessage('');

//     // Check rate limit
//     const rateLimitCheck = checkRateLimit();
//     if (!rateLimitCheck.allowed) {
//       setRateLimitMessage(`Please wait ${rateLimitCheck.remainingMinutes} more minute(s) before trying again.`);
//       return;
//     }

//     if (!email.trim()) {
//       setError('Please enter your email address.');
//       return;
//     }

//     setIsLoading(true);
    
//     // Update last request time immediately when making the request
//     lastRequestTime = Date.now();

//     try {
//       await axios.post('https://contact.terzoo.com/api/whitelist/store', {
//         email: email
//       }).then((res) => {
//         setIsSuccess(true);
//         setEmail('');
//         setTimeout(() => {
//           setIsSuccess(false);
//         }, 4000);
//       });
   
//     } catch (err) {
//       if (err.response && err.response.data && err.response.data.errors && err.response.data.errors.email) {
//         setError(err.response.data.errors.email[0]);
//       } else {
//         setError('Something went wrong. Please try again.');
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="relative">
//       {/* Background blur div - positioned behind the main container */}
//       <div className="absolute inset-0 w-full h-full bg-purple-900 opacity-20 -z-10"></div>
      
//       <div className="min-h-screen bg-white relative z-10 border-t border-white lg:rounded-t-[50px] md:rounded-t-[30px] rounded-t-[25px] flex items-center justify-center px-4 pb-4 lg:pt-32 pt-4 lg:pb-8 lg:px-8">
//         <div className="max-w-6xl mx-auto w-full">
//           <div className="relative gap-8 lg:gap-16 items-center">
            
//             {/* Left Content */}
//             <div className="relative z-20 w-full">
//                  {/* Large Headline */}
//               <h1 className="text-5xl  md:text-8xl xl:text-9xl font-black text-black leading-none mb-8 lg:mb-12">
//                 Ready to
//                 <br />
//                 grow?
//               </h1>
             
              
//               {/* Purple Card */}
//               <div className="relative w-full">
//                 <div className="w-full bg-gradient-to-br from-[#7F5AF0] via-[#9F80FF] to-[#CBB7FF]  rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden">
//                   {/* Background pattern/texture */}
//                   <div className="absolute opacity-10">
//                     <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
//                     <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-12 translate-y-12"></div>
//                   </div>
                  
//                   <div className="relative z-10 sm:w-6/12 sm:pt-20 pt-1">
//                   {/* Mobile phone image */}
//                            <div className="sm:hidden flex justify-center">
//               <div className="relative">
//                 {/* Phone Image */}
//                 <div className="relative transform hover:scale-105 hover:rotate-2 transition-all duration-500">
//                    <div className="w-32 mx-auto">
//             <Image 
//               src={img6} 
//                     alt="Investment app on iPhone" 
//               className="w-full h-full object-contain  transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
//               width={800}
//               height={300}
//               priority
//             />
//           </div>
//                 </div>
                
//                 {/* Floating decorative elements */}
//                 <div className="absolute -left-6 top-20 w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-80 animate-pulse"></div>
//                 <div className="absolute -right-4 bottom-32 w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-70 animate-bounce"></div>
//                 <div className="absolute left-8 bottom-16 w-8 h-8 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-60 animate-ping"></div>
//               </div>
//             </div>
                  
//                     <h2 className="text-xl lg:text-2xl font-bold mb-4">
//                       Invest in your future your way
//                     </h2>
//                     <p className="text-gray-300 mb-8 text-sm lg:text-lg opacity-90">
//                       Join thousands of smart investors who are growing their wealth with our intelligent investment platform. Start with as little as $1 and watch your money work harder for you.
//                     </p>
                    
//                     {/* Success Message */}
//                     {isSuccess && (
//                       <div className="mb-4 p-3 rounded-lg bg-green-100 border border-green-200">
//                         <p className="text-sm text-green-800 font-medium">🎉 Welcome aboard! You're now on the waitlist.</p>
//                       </div>
//                     )}

//                     {/* Error Messages */}
//                     {error && (
//                       <div className="mb-4 p-3 rounded-lg bg-red-100 border border-red-200">
//                         <p className="text-sm text-red-600">{error}</p>
//                       </div>
//                     )}

//                     {rateLimitMessage && (
//                       <div className="mb-4 p-3 rounded-lg bg-orange-100 border border-orange-200">
//                         <p className="text-sm text-orange-600">{rateLimitMessage}</p>
//                       </div>
//                     )}
                    
//                     {/* Email input */}
//                     <form onSubmit={handleSubmit} className="relative">
//                       <div className="flex bg-white rounded-full w-full shadow-lg">
//                         <input 
//                           type="email" 
//                           value={email}
//                           onChange={(e) => setEmail(e.target.value)}
//                           placeholder="Enter your email" 
//                           className="relative w-full bg-transparent text-gray-700 placeholder-gray-500 px-4 py-3 focus:outline-none font-medium text-sm"
//                           disabled={isLoading}
//                           required
//                         />
//                         <button 
//                           type="submit"
//                           // disabled={isLoading || !email.trim()}
//                           className="right-0 absolute bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-orange-400 hover:to-orange-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 text-sm whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center space-x-2"
//                         >
//                           {isLoading ? (
//                             <>
//                               <div className="w-4 h-4 border-2 border-white sborder-t-transparent rounded-full animate-spin"></div>
//                               <span>Joining...</span>
//                             </>
//                           ) : (<> 
//                           <span className='hidden md:block'>Join waitlist</span>
//                           <span className='md:hidden block'>Join</span>
//                              </>)}
//                         </button>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Content - Phone Image */}
//             <div className="absolute -bottom-7 z-30 right-0 hidden sm:flex justify-center lg:justify-end">
//               <div className="relative">
//                 {/* Phone Image */}
//                 <div className="relative transform hover:scale-105 hover:rotate-2 transition-all duration-500">
//                    <div className="w-80 lg:w-[520px]">
//             <Image 
//               src={img6} 
//                     alt="Investment app on iPhone" 
//               className="w-full h-full object-contain  transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
//               width={800}
//               height={300}
//               priority
//             />
//           </div>
//                 </div>
                
//                 {/* Floating decorative elements */}
//                 <div className="absolute -left-1 top-32 w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-80 animate-pulse"></div>
//                 {/* <div className="absolute -right-4 bottom-32 w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-70 animate-bounce"></div> */}
//                 <div className="absolute -right-4 bottom-32 w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-70 animate-bounce"></div>
//                 <div className="absolute left-8 bottom-16 w-8 h-8 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-60 animate-ping"></div>
//               </div>
//             </div>
                
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

















// 'use client';

// import React, { useState } from 'react';
// import Image from '@/compnents/Image';
// import axios from 'axios';
// import img6 from './../../../public/iphonee.png';

// // Rate limiting variables (in-memory storage)
// let lastRequestTime = 0;
// const RATE_LIMIT_DURATION = 1 * 60 * 1000; // 3 minutes in milliseconds

// export default function SectionSix() {
//   const [email, setEmail] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [error, setError] = useState('');
//   const [rateLimitMessage, setRateLimitMessage] = useState('');

//   const checkRateLimit = () => {
//     const currentTime = Date.now();
//     const timeSinceLastRequest = currentTime - lastRequestTime;
    
//     if (lastRequestTime > 0 && timeSinceLastRequest < RATE_LIMIT_DURATION) {
//       const remainingTime = RATE_LIMIT_DURATION - timeSinceLastRequest;
//       const remainingMinutes = Math.ceil(remainingTime / (60 * 1000));
//       return {
//         allowed: false,
//         remainingMinutes
//       };
//     }
    
//     return { allowed: true };
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setRateLimitMessage('');

//     // Check rate limit
//     const rateLimitCheck = checkRateLimit();
//     if (!rateLimitCheck.allowed) {
//       setRateLimitMessage(`Please wait ${rateLimitCheck.remainingMinutes} more minute(s) before trying again.`);
//       return;
//     }

//     if (!email.trim()) {
//       setError('Please enter your email address.');
//       return;
//     }

//     setIsLoading(true);
    
//     // Update last request time immediately when making the request
//     lastRequestTime = Date.now();

//     try {
//       await axios.post('https://contact.terzoo.com/api/whitelist/store', {
//         email: email
//       }).then((res) => {
//         setIsSuccess(true);
//         setEmail('');
//         setTimeout(() => {
//           setIsSuccess(false);
//         }, 4000);
//       });
   
//     } catch (err) {
//       if (err.response && err.response.data && err.response.data.errors && err.response.data.errors.email) {
//         setError(err.response.data.errors.email[0]);
//       } else {
//         setError('Something went wrong. Please try again.');
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="relative overflow-x-hidden">
//       {/* Background blur div - positioned behind the main container */}
//       <div className="absolute inset-0 w-full h-full bg-purple-900 opacity-20 -z-10"></div>
      
//       <div className="min-h-screen bg-white relative z-10 border-t pt-10 px-4 border-white lg:rounded-t-[50px] md:rounded-t-[30px] rounded-t-[25px] flex items-center justify-center  pb-4 lg:pt-32 lg:pb-8 lg:px-8">
//         <div className="max-w-6xl mx-auto w-full">
//           <div className="relative gap-8 lg:gap-16 items-center">
            
//             {/* Left Content */}
//             <div className="relative z-20 w-full">
//                  {/* Large Headline */}
//               <h1 className="text-5xl  md:text-8xl xl:text-9xl font-black text-black  mb-8 lg:mb-12">
//                 Ready to
//                 <br />
//                 grow?
//               </h1>
             
              
//               {/* Purple Card */}
//               <div className="relative w-full    ">
//                 <div className="w-full  bg-gradient-to-br from-[#7F5AF0] via-[#9F80FF] to-[#CBB7FF]    rounded-3xl p-6 lg:p-10 md:mt-auto mt-16 md:h-auto h-[85vh]  text-white relative ">
//                   {/* Background pattern/texture */}
//                   <div className="absolute opacity-10">
//                     <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
//                     <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-12 translate-y-12"></div>
//                   </div>
                  
//                   <div className="relative z-10 sm:w-6/12 sm:pt-20 pt-1 h-full flex flex-col justify-end ">
                
                  
//                     <h2 className="text-xl lg:text-2xl font-bold mb-4">
//                       Invest in your future your way
//                     </h2>
//                     <p className="text-gray-300 mb-8 text-sm lg:text-lg opacity-90">
//                       Join thousands of smart investors who are growing their wealth with our intelligent investment platform. Start with as little as $1 and watch your money work harder for you.
//                     </p>
                    
//                     {/* Success Message */}
//                     {isSuccess && (
//                       <div className="mb-4 p-3 rounded-lg bg-green-100 border border-green-200">
//                         <p className="text-sm text-green-800 font-medium">🎉 Welcome aboard! You're now on the waitlist.</p>
//                       </div>
//                     )}

//                     {/* Error Messages */}
//                     {error && (
//                       <div className="mb-4 p-3 rounded-lg bg-red-100 border border-red-200">
//                         <p className="text-sm text-red-600">{error}</p>
//                       </div>
//                     )}

//                     {rateLimitMessage && (
//                       <div className="mb-4 p-3 rounded-lg bg-orange-100 border border-orange-200">
//                         <p className="text-sm text-orange-600">{rateLimitMessage}</p>
//                       </div>
//                     )}
                    
//                     {/* Email input */}
//                     <form onSubmit={handleSubmit} className="relative">
//                       <div className="flex bg-white rounded-full w-full shadow-lg">
//                         <input 
//                           type="email" 
//                           value={email}
//                           onChange={(e) => setEmail(e.target.value)}
//                           placeholder="Enter your email" 
//                           className="relative w-full bg-transparent text-gray-700 placeholder-gray-500 px-4 py-3 focus:outline-none font-medium text-sm"
//                           disabled={isLoading}
//                           required
//                         />
//                         <button 
//                           type="submit"
//                           // disabled={isLoading || !email.trim()}
//                           className="right-0 absolute bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-orange-400 hover:to-orange-600
//                            text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 text-sm whitespace-nowrap 
//                            disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center space-x-2"
//                         >
//                           {isLoading ? (
//                             <>
//                               <div className="w-4 h-4 border-2 border-white sborder-t-transparent rounded-full animate-spin"></div>
//                               <span>Joining...</span>
//                             </>
//                           ) : (<> 
//                           <span className='hidden md:block'>Join waitlist</span>
//                           <span className='md:hidden block'>Join</span>
//                              </>)}
//                         </button>
//                       </div>
//                     </form>
//                   </div>
//                 </div>

//                 {/* iPhone Image - Now positioned absolutely within this div */}
//                 <div className="absolute ! z-30 md:right-0 -right-12  md:-bottom-24 -top-32 justify-center lg:justify-end">
//                   <div className="relative ">
//                     {/* Phone Image */}
//                     {/* <div className="relative transform hover:scale-105 hover:-rotate-3 md:hover:-rotate-5 -rotate-1 md:-rotate-2 transition-all duration-500"> */}
//                     <div className="relative border border-red-500  transform hover:scale-105 hover:rotate-1 md:hover:-rotate-5 -rotate-8 md:-rotate-2 transition-all duration-500">
//                        <div className="w-[370px]  lg:w-[590px] mx-auto ">
//                 <Image 
//                   src={img6} 
//                         alt="Investment app on iPhone" 
//                   className="w-full h-full object-contain  transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
//                   priority
//                 />
//               </div>
//                     </div>
                    
//                     {/* Floating decorative elements */}
//                     <div className="absolute left-1 top-46 w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-80 animate-pulse"></div>
//                     {/* <div className="absolute -right-4 bottom-32 w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-70 animate-bounce"></div> */}
//                     {/* <div className="absolute -md:right-4 right-3 bottom-32 w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-70 animate-bounce"></div> */}
//                     <div className="absolute left-8 bottom-16 w-8 h-8 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-60 animate-ping"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
                
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }









