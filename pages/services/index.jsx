import { motion } from "framer-motion";

// Header Component
const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <div className="text-[24px] font-semibold text-white">
            EDITARV
          </div>
          {/* nav */}
          <nav className="flex gap-x-8 font-light text-[14px]">
            <a href="#" className="text-white hover:text-accent transition-all duration-300">
              PROJECTS
            </a>
            <a href="#" className="text-accent">
              SERVICES
            </a>
            <a href="#" className="text-white hover:text-accent transition-all duration-300">
              TESTIMONIALS
            </a>
            <a href="#" className="text-white hover:text-accent transition-all duration-300">
              PRICING
            </a>
            <a href="#" className="text-white hover:text-accent transition-all duration-300">
              ABOUT
            </a>
            <a href="#" className="text-white hover:text-accent transition-all duration-300">
              CONTACT
            </a>
          </nav>
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

const Services = () => {
  const serviceData = [
    {
      title: "VIDEO EDITING",
      description: "Transform your raw footage into captivating stories",
      features: [
        "Professional cuts, transitions, sound sync, and pacing",
        "Color grading and cinematic enhancements",
        "Reels, YouTube edits, music videos, and more"
      ]
    },
    {
      title: "MOTION GRAPHICS",
      description: "Transform your raw footage into captivating stories",
      features: [
        "Professional cuts, transitions, sound sync, and pacing",
        "Color grading and cinematic enhancements",
        "Reels, YouTube edits, music videos, and more"
      ]
    },
    {
      title: "3D ANIMATION",
      description: "Transform your raw footage into captivating stories",
      features: [
        "Professional cuts, transitions, sound sync, and pacing",
        "Color grading and cinematic enhancements",
        "Reels, YouTube edits, music videos, and more"
      ]
    }
  ];

  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          background: linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #0a0a0a 100%);
          color: white;
          font-family: 'Arial', sans-serif;
          overflow-x: hidden;
        }
        
        .text-accent {
          color: #d4af37;
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
        
        .py-36 {
          padding-top: 9rem;
          padding-bottom: 9rem;
        }
        
        .gap-y-6 {
          row-gap: 1.5rem;
        }
        
        .gap-x-8 {
          column-gap: 2rem;
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
        
        .text-\[14px\] {
          font-size: 14px;
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
        
        .services-title {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 600;
          color: #d4af37;
          text-align: center;
          margin-bottom: 4rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .service-card {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 2rem;
          transition: all 0.3s ease;
        }
        
        .service-card:hover {
          background: rgba(0, 0, 0, 0.5);
          border-color: rgba(212, 175, 55, 0.3);
        }
        
        .service-card-title {
          font-size: 20px;
          font-weight: 600;
          color: white;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .service-card-description {
          font-size: 14px;
          color: #888888;
          margin-bottom: 2rem;
          line-height: 1.5;
        }
        
        .service-features {
          list-style: none;
          padding: 0;
        }
        
        .service-feature {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1rem;
          font-size: 13px;
          color: #888888;
          line-height: 1.4;
        }
        
        .service-feature::before {
          content: '✓';
          color: #d4af37;
          font-weight: bold;
          margin-right: 0.75rem;
          margin-top: 0.1rem;
          flex-shrink: 0;
        }

        /* Keep desktop styles unchanged */
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

          /* Keep desktop custom styles */
          .font-sora .xl\:max-w-md .backdrop-blur-sm{
            transform:translatex(0px) translatey(0px);
          }

          #__next .font-sora .xl\:max-w-md{
            padding-left:379px;
          }
        }

        /* Landscape Tablet (1024px - 1199px) */
        @media (min-width: 1024px) and (max-width: 1199px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
            max-width: 1000px;
          }
          
          .px-16 {
            padding-left: 2rem;
            padding-right: 2rem;
          }
          
          .py-36 {
            padding-top: 7rem;
            padding-bottom: 7rem;
          }
          
          .service-card {
            padding: 1.8rem;
          }
          
          .service-card-title {
            font-size: 18px;
          }
          
          .service-card-description {
            font-size: 13px;
          }
          
          .service-feature {
            font-size: 12px;
          }
          
          .services-title {
            font-size: 36px;
            margin-bottom: 3rem;
          }
        }

        /* Portrait Tablet (768px - 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
            max-width: 800px;
          }
          
          .px-16 {
            padding-left: 2rem;
            padding-right: 2rem;
          }
          
          .py-36 {
            padding-top: 6rem;
            padding-bottom: 6rem;
          }
          
          .service-card {
            padding: 1.8rem;
          }
          
          .service-card-title {
            font-size: 18px;
          }
          
          .service-card-description {
            font-size: 13px;
          }
          
          .service-feature {
            font-size: 12px;
            margin-bottom: 0.8rem;
          }
          
          .services-title {
            font-size: 32px;
            margin-bottom: 3rem;
          }
          
          .gap-x-8 {
            column-gap: 1rem;
          }
          
          .text-\[14px\] {
            font-size: 13px;
          }
        }

        /* Mobile Landscape (481px - 767px) */
        @media (min-width: 481px) and (max-width: 767px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            max-width: 600px;
          }
          
          .px-16 {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
          
          .py-36 {
            padding-top: 5rem;
            padding-bottom: 5rem;
          }
          
          .py-8 {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
          }
          
          .service-card {
            padding: 1.5rem;
          }
          
          .service-card-title {
            font-size: 16px;
            text-align: center;
          }
          
          .service-card-description {
            font-size: 13px;
            text-align: center;
            margin-bottom: 1.5rem;
          }
          
          .service-feature {
            font-size: 12px;
            margin-bottom: 0.8rem;
          }
          
          .services-title {
            font-size: 28px;
            margin-bottom: 2.5rem;
          }
          
          .gap-x-8 {
            column-gap: 0.8rem;
            flex-wrap: wrap;
            justify-content: center;
          }
          
          .text-\[14px\] {
            font-size: 12px;
          }
          
          .text-\[24px\] {
            font-size: 20px;
          }
          
          nav {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 0.5rem;
            justify-content: center;
          }
          
          nav a {
            font-size: 11px;
          }
        }
        
        /* Mobile Portrait (320px - 480px) */
        @media (max-width: 480px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.2rem;
            max-width: 100%;
          }
          
          .px-16 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .py-36 {
            padding-top: 4rem;
            padding-bottom: 4rem;
          }
          
          .py-8 {
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
          
          .service-card {
            padding: 1.2rem;
          }
          
          .service-card-title {
            font-size: 15px;
            text-align: center;
            margin-bottom: 0.8rem;
          }
          
          .service-card-description {
            font-size: 12px;
            text-align: center;
            margin-bottom: 1.2rem;
          }
          
          .service-feature {
            font-size: 11px;
            margin-bottom: 0.7rem;
          }
          
          .services-title {
            font-size: 24px;
            margin-bottom: 2rem;
          }
          
          .gap-x-8 {
            column-gap: 0.3rem;
            flex-wrap: wrap;
            justify-content: center;
          }
          
          .gap-y-6 {
            row-gap: 0.8rem;
          }
          
          .text-\[14px\] {
            font-size: 10px;
          }
          
          .text-\[24px\] {
            font-size: 18px;
          }
          
         
          
          header .flex-col.lg\\:flex-row {
            flex-direction: column;
            text-align: center;
          }
          
          .container {
            padding: 0 10px;
          }
        }
      `}</style>
      
      <div className="h-full">
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        <div className="w-full h-full py-36 flex items-center">
          <div className="container">
            {/* Services Title */}
            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="services-title"
            >
              OUR SERVICES
            </motion.h1>
            
            {/* Services Grid */}
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="services-grid"
            >
              {serviceData.map((service, index) => (
                <div key={index} className="service-card">
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="service-feature">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;