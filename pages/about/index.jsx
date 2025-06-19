import { motion } from "framer-motion";
import { useState } from "react";

// Header Component
const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <div className="text-[14px] font-semibold text-white">
            ATHARV SULAKHIYA
          </div>
          {/* nav */}
          <div className="flex items-center gap-x-8 text-[14px]">
            <nav className="flex gap-x-8 font-light">
              <span className="text-white">VIDEO EDITOR</span>
              <span className="text-white">MOTION GRAPHICS</span>
              <span className="text-white">3D ANIMATOR</span>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

// fadeIn variants
const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
    },
    show: {
      y: 0,
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

const About = () => {
  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          background: #0a0a0a;
          color: white;
          font-family: 'Arial', sans-serif;
          overflow-x: hidden;
        }
        
        .text-accent {
          color: #d4af37;
        }
        
        .text-gray {
          color: #888888;
        }
        
        .h-full {
          min-height: 100vh;
        }
        
        .w-full {
          width: 100%;
        }
        
        .flex {
          display: flex;
        }
        
        .flex-col {
          flex-direction: column;
        }
        
        .justify-center {
          justify-content: center;
        }
        
        .justify-between {
          justify-content: space-between;
        }
        
        .items-center {
          align-items: center;
        }
        
        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }
        
        .absolute {
          position: absolute;
        }
        
        .relative {
          position: relative;
        }
        
        .z-30 {
          z-index: 30;
        }
        
        .px-16 {
          padding-left: 4rem;
          padding-right: 4rem;
        }
        
        .py-8 {
          padding-top: 2rem;
          padding-bottom: 2rem;
        }
        
        .py-32 {
          padding-top: 8rem;
          padding-bottom: 8rem;
        }
        
        .gap-y-6 {
          row-gap: 1.5rem;
        }
        
        .gap-x-8 {
          column-gap: 2rem;
        }
        
        .gap-x-12 {
          column-gap: 3rem;
        }
        
        .font-semibold {
          font-weight: 600;
        }
        
        .font-light {
          font-weight: 300;
        }
        
        .text-\[24px\] {
          font-size: 24px;
        }
        
        .text-xl {
          font-size: 1.25rem;
        }
        
        .main-title {
          font-size: clamp(30px, 4vw, 50px);
          font-weight: 600;
          color: white;
          margin-bottom: 2rem;
          line-height: 1.2;
        }
        
        .section-title {
          font-size: clamp(18px, 2vw, 14px);
          font-weight: 400;
          color: #d4af37;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .description {
          font-size: 14px;
          color: #888888;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        
        .service-item {
          text-align: center;
          padding: 1rem;
        }
        
        .service-title {
          font-size: 16px;
          color: #888888;
          font-weight: 400;
        }
        
        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        
        .grid-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 4rem;
          margin-top: 4rem;
        }
        
        .mb-8 {
          margin-bottom: 2rem;
        }
        
        .mb-4 {
          margin-bottom: 1rem;
        }

        @media (min-width: 1024px) {
          .lg\:flex-row {
            flex-direction: row;
          }
        }
        
        @media (min-width: 1200px) {
          .xl\:px-0 {
            padding-left: 0;
            padding-right: 0;
          }
          
          .xl\:h-\[90px\] {
            height: 90px;
          }
        }
        
        /* Keep all desktop styles unchanged */
        .font-sora .xl\:max-w-md .backdrop-blur-sm{
          transform:translatex(0px) translatey(0px);
        }

        #__next .font-sora .xl\:max-w-md{
          padding-left:379px;
        }

        .font-sora .h-full .grid-2{
          padding-left:424px;
          transform:translatex(0px) translatey(0px) !important;
        }

        #__next .font-sora .h-full .h-full .w-full .container .grid-2{
          width:110% !important;
        }

        .grid-2 .jsx-d4f255745d893c65 .section-title{
          width:224px;
        }

        #__next .font-sora .h-full .h-full .w-full .container .grid-2 .jsx-d4f255745d893c65 p{
          width:110% !important;
        }

        .font-sora .h-full .service-item{
          transform:translatex(7px) translatey(104px);
        }

        .font-sora .h-full h2{
          transform:translatex(9px) translatey(97px) !important;
        }

        /* Mobile and Tablet responsive styles only */
        @media (max-width: 1199px) {
          /* Reset desktop transforms for smaller screens */
          .font-sora .xl\:max-w-md .backdrop-blur-sm{
            transform: none !important;
          }

          #__next .font-sora .xl\:max-w-md{
            padding-left: 0 !important;
          }

          .font-sora .h-full .grid-2{
            padding-left: 0 !important;
            transform: none !important;
          }

          #__next .font-sora .h-full .h-full .w-full .container .grid-2{
            width: 100% !important;
          }

          .grid-2 .jsx-d4f255745d893c65 .section-title{
            width: auto !important;
          }

          #__next .font-sora .h-full .h-full .w-full .container .grid-2 .jsx-d4f255745d893c65 p{
            width: 100% !important;
          }

          .font-sora .h-full .service-item{
            transform: none !important;
          }

          .font-sora .h-full h2{
            transform: none !important;
          }
        }

        /* Tablet styles */
        @media (max-width: 1023px) and (min-width: 768px) {
          .px-16 {
            padding-left: 2rem;
            padding-right: 2rem;
          }
          
          .py-32 {
            padding-top: 6rem;
            padding-bottom: 6rem;
          }
          
          .gap-x-12 {
            column-gap: 2rem;
          }
          
          .grid-3 {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
          
          .grid-2 {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            margin-top: 3rem;
          }
          
          .main-title {
            font-size: clamp(28px, 5vw, 40px);
          }
          
          .section-title {
            font-size: clamp(16px, 2.5vw, 20px);
          }
          
          .service-title {
            font-size: 14px;
          }
          
          .description {
            font-size: 13px;
          }
        }

        /* Mobile styles */
        @media (max-width: 767px) {
          .px-16 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .py-32 {
            padding-top: 4rem;
            padding-bottom: 4rem;
          }
          
          .py-8 {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
          }
          
          .gap-x-8 {
            column-gap: 0.5rem;
            flex-wrap: wrap;
            justify-content: center;
          }
          
          .gap-x-12 {
            column-gap: 0;
          }
          
          .grid-3 {
            grid-template-columns: 1fr;
            gap: 1rem;
            text-align: center;
          }
          
          .grid-2 {
            grid-template-columns: 1fr;
            gap: 2rem;
            margin-top: 2rem;
          }
          
          .main-title {
            font-size: clamp(24px, 6vw, 32px);
            margin-bottom: 1.5rem;
            text-align: center;
          }
          
          .section-title {
            font-size: clamp(14px, 3.5vw, 18px);
            text-align: center;
            margin-bottom: 1rem;
          }
          
          .description {
            font-size: 13px;
            margin-bottom: 1.5rem;
            text-align: center;
            line-height: 1.5;
          }
          
          .service-title {
            font-size: 13px;
          }
          
          .text-\[14px\] {
            font-size: 12px;
          }
          
          .flex-col.lg\\:flex-row {
            flex-direction: column;
            gap: 2rem;
          }
          
          .gap-y-6 {
            row-gap: 1rem;
          }
          
          .service-item {
            padding: 0.5rem;
          }
          
          .mb-8 {
            margin-bottom: 1.5rem;
          }
          
          .mb-4 {
            margin-bottom: 1rem;
          }
          
         
        }

        /* Small mobile */
        @media (max-width: 480px) {
          .px-16 {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
          
          .py-32 {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          
          .main-title {
            font-size: clamp(16px, 3vw, 25px);
            margin-bottom: 1rem;
          }
          
          .section-title {
            font-size: clamp(12px, 3vw, 16px);
            margin-bottom: 0.5rem;
          }
          
          .description {
            font-size: 12px;
            margin-bottom: 1rem;
          }
          
          .service-title {
            font-size: 12px;
          }
          
          .text-\[14px\] {
            font-size: 11px;
          }
          
          nav span {
            font-size: 10px;
          }
          
          .grid-2 {
            gap: 1.5rem;
            margin-top: 1.5rem;
          }
          
          .service-item {
            padding: 0.25rem;
          }
        }

        @media (max-width:480px){

 /* Heading */
 #__next .font-sora .h-full .h-full .w-full .container .lg\:flex-row .flex-1 h1{
  width:99% !important;
 }
 
 /* Justify between */
 .font-sora .h-full .justify-between{
  transform:translatex(0px) translatey(-24px);
 }
 
}

@media (max-width:480px){

 /* Grid 2 */
 .font-sora .h-full .grid-2{
  transform:translatex(0px) translatey(-24px) !important;
 }
 
}
      `}</style>
      
      <div className="h-full" style={{background: '#0a0a0a'}}>
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        <div className="w-full h-full py-32">
          <div className="container">
            {/* Top Section */}
            <div className="flex flex-col lg:flex-row gap-x-12 mb-8">
              {/* Left Side - Introduction */}
              <div className="flex-1">
                <motion.h1
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="main-title"
                >
                  Hello there<br />
                  I'm Atharv<br />
                  Sulakhiya
                </motion.h1>
                
                <motion.p
                  variants={fadeIn("right", 0.4)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="description"
                >
                  Founder of Editarv. For over 5 years, we've been transforming ideas into captivating visual experiences.
                </motion.p>
              </div>
              
              {/* Right Side - Services */}
              <div className="flex-1">
                <motion.h2
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="section-title mb-4"
                >
                  WE SPECIALIZE IN BRINGING<br />
                  YOUR BRAND TO LIFE WITH
                </motion.h2>
                
                <motion.div
                  variants={fadeIn("left", 0.4)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="grid-3"
                >
                  <div className="service-item">
                    <div className="service-title">Dynamic Video<br />Editing</div>
                  </div>
                  <div className="service-item">
                    <div className="service-title">Engaging Motion<br />Graphics</div>
                  </div>
                  <div className="service-item">
                    <div className="service-title">Stunning 3D<br />Animations</div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Bottom Section */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="grid-2"
            >
              {/* Our Experience */}
              <div>
                <h3 className="section-title">OUR EXPERIENCE</h3>
                <p className="description">
                  We've proudly delivered impactful projects for leading brands like Nike and AEN, turning complex concepts into clear, compelling visuals.
                </p>
              </div>
              
              {/* Why Choose Us */}
              <div>
                <h3 className="section-title">WHY CHOOSE US?</h3>
                <p className="description">
                  At Editarv, we're passionate about crafting stories that resonate. We combine creativity with precision to ensure your message not only looks incredible but also connects deeply with your audience.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;