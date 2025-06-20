"use client"

import { motion } from "framer-motion"

// Header Component
const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-4 md:px-8 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-3 md:gap-y-6 py-4 md:py-6 lg:py-8">
          {/* logo */}
          <div className="text-[18px] md:text-[24px] font-semibold text-accent">EDITARV</div>
          {/* nav */}
          <nav className="flex gap-x-3 md:gap-x-6 lg:gap-x-8 font-light text-[12px] md:text-[14px] flex-wrap justify-center lg:justify-start">
            <a href="#" className="hover:text-accent transition-all duration-300 whitespace-nowrap">
              PROJECTS
            </a>
            <a href="#" className="hover:text-accent transition-all duration-300 whitespace-nowrap">
              SERVICES
            </a>
            <a href="#" className="hover:text-accent transition-all duration-300 whitespace-nowrap">
              TESTIMONIALS
            </a>
            <a href="#" className="hover:text-accent transition-all duration-300 whitespace-nowrap">
              PRICING
            </a>
            <a href="#" className="hover:text-accent transition-all duration-300 whitespace-nowrap">
              ABOUT
            </a>
            <a href="#" className="hover:text-accent transition-all duration-300 whitespace-nowrap">
              CONTACT
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

// ParticlesContainer Component
const ParticlesContainer = () => {
  return (
    <div className="w-full h-full absolute translate-z-0">
      <div className="particles-bg"></div>
      <style jsx>{`
        .particles-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.1), transparent),
            radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.05), transparent),
            radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.1), transparent),
            radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.05), transparent),
            radial-gradient(2px 2px at 160px 30px, rgba(255,255,255,0.1), transparent);
          background-repeat: repeat;
          background-size: 200px 100px;
          animation: sparkle 3s linear infinite;
          z-index: 2;
        }
        @keyframes sparkle {
          from { transform: translateY(0px); }
          to { transform: translateY(-100px); }
        }
      `}</style>
    </div>
  )
}

// ProjectsBtn Component
const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <div className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group cursor-pointer">
        <div className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px] border-2 border-accent rounded-full flex items-center justify-center">
          <span className="text-accent">→</span>
        </div>
      </div>
    </div>
  )
}

// Avatar Component
const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <div className="translate-z-0 w-full h-full bg-gradient-to-t from-accent/20 to-transparent rounded-full"></div>
    </div>
  )
}

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
  }
}

const Home = () => {
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
          overflow: hidden;
        }
        
        .text-accent {
          color: #d4af37;
        }
        
        .h-full {
          height: 100vh;
        }
        
        .w-full {
          width: 100%;
        }
        
        .text-center {
          text-align: center;
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
        
        .items-center {
          align-items: center;
        }
        
        .justify-between {
          justify-content: space-between;
        }
        
        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }
        
        .mx-auto {
          margin-left: auto;
          margin-right: auto;
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
        
        .font-semibold {
          font-weight: 600;
        }
        
        .font-light {
          font-weight: 300;
        }
        
        .hover\:text-accent:hover {
          color: #d4af37;
        }
        
        .transition-all {
          transition-property: all;
        }
        
        .duration-300 {
          transition-duration: 300ms;
        }
        
        .main-title {
          font-size: clamp(80px, 15vw, 200px);
          font-weight: bold;
          color: #e0e0e0;
          margin-bottom: 20px;
          letter-spacing: -2px;
          line-height: 0.9;
          text-shadow: 0 0 30px rgba(255,255,255,0.3), 0 0 60px rgba(212,175,55,0.2);
          z-index: 10;
          position: relative;
        }
        
        .subtitle {
          font-size: 18px;
          color: #d4af37;
          letter-spacing: 3px;
          font-weight: 400;
          text-transform: uppercase;
          text-shadow: 0 0 20px rgba(212,175,55,0.5);
          z-index: 10;
          position: relative;
        }
        
        .translate-z-0 {
          transform: translateZ(0px);
        }
        
        .whitespace-nowrap {
          white-space: nowrap;
        }
        
        .flex-wrap {
          flex-wrap: wrap;
        }
        
        .bg-main {
          background-image: url('/bg.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          position: relative;
        }
        
        .bg-main::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(10, 10, 10, 0.7);
          z-index: 1;
        }
        
        @media (min-width: 768px) {
          .md\:px-8 {
            padding-left: 2rem;
            padding-right: 2rem;
          }
          
          .md\:gap-y-6 {
            row-gap: 1.5rem;
          }
          
          .md\:py-6 {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
          }
          
          .md\:gap-x-6 {
            column-gap: 1.5rem;
          }
          
          .md\:text-\[24px\] {
            font-size: 24px;
          }
          
          .md\:text-\[14px\] {
            font-size: 14px;
          }
        }
        
        @media (min-width: 1024px) {
          .lg\:flex-row {
            flex-direction: row;
          }
          
          .lg\:justify-start {
            justify-content: flex-start;
          }
          
          .lg\:gap-x-8 {
            column-gap: 2rem;
          }
          
          .lg\:py-8 {
            padding-top: 2rem;
            padding-bottom: 2rem;
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
        
        @media (max-width: 767px) {
          .main-title {
            font-size: clamp(60px, 12vw, 120px);
          }
          
          .subtitle {
            font-size: 14px;
            letter-spacing: 2px;
          }
          
          .bg-main {
            background-attachment: scroll;
          }
        }
        
        .font-sora .xl\:max-w-md .backdrop-blur-sm{
          transform:translatex(0px) translatey(0px);
        }

        /* Navigation */
        #__next .font-sora .xl\:max-w-md{
          padding-left:379px;
        }

        @media (max-width:768px){
          /* BackUnknown blur */
          .font-sora .xl\:max-w-md .backdrop-blur-sm{
            padding-right:766px;
          }
          
          /* Svg */
          .backdrop-blur-sm .false svg{
            margin-right:27px;
          }
          
          /* Division */
          #__next .font-sora .xl\:max-w-md .backdrop-blur-sm .false > div{
            transform:translatex(26px) translatey(0px) !important;
          }
          
          /* Division */
          .backdrop-blur-sm .false > div{
            margin-right:11px;
          }
        }
      `}</style>

      <div className="h-full bg-main">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <div
          className="w-full h-full flex flex-col justify-center items-center text-center relative"
          style={{ zIndex: 5 }}
        >
          {/* Particles */}
          <ParticlesContainer />

          {/* Main Title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="main-title"
          >
            Editarv
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={fadeIn("down", 0.3)} initial="hidden" animate="show" exit="hidden" className="subtitle">
            MOTION AND 3D WORKS
          </motion.p>
        </div>
      </div>
    </>
  )
}

export default Home
