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
            <a href="#" className="text-white hover:text-accent transition-all duration-300">
              SERVICES
            </a>
            <a href="#" className="text-white hover:text-accent transition-all duration-300">
              TESTIMONIALS
            </a>
            <a href="#" className="text-accent">
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

const Pricing = () => {
  const pricingData = [
    {
      icon: "🎥",
      title: "VIDEO EDITING",
      features: [
        "Professional cuts, transitions, sound sync, and pacing",
        "Color grading and cinematic enhancements",
        "Reels, YouTube edits, music videos, and more"
      ],
      pricing: "Starts from: ₹X,XXX — based on length & complexity"
    },
    {
      icon: "💡",
      title: "MOTION GRAPHICS",
      features: [
        "Explainer videos, logo animations, title intros/outros",
        "Product animations and kinetic typography",
        "Social media motion assets"
      ],
      pricing: "Starts from: ₹X,XXX — depends on style & runtime"
    },
    {
      icon: "🔥",
      title: "CGI & VISUAL EFFECTS",
      features: [
        "3D modeling, rendering, and compositing",
        "Green screen cleanups, particle effects, simulations",
        "Product visualization and conceptual CGI"
      ],
      pricing: "Starts from: ₹X,XXX — project-based pricing"
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
          color: white;
          font-family: 'Arial', sans-serif;
          overflow-x: hidden;
        }
        
        .pricing-bg {
          background: linear-gradient(135deg,rgb(0, 0, 0) 0%,rgb(0, 0, 0) 30%,rgb(0, 0, 0) 60%, #000000 100%);
          min-height: 100vh;
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
        
        .pricing-title {
          font-size: 32px;
          font-weight: 400;
          color: #d4af37;
          text-align: center;
          margin-bottom: 4rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          max-width: 1400px;
          margin: 0 auto 6rem auto;
          padding: 0 2rem;
        }
        
        .pricing-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        
        .pricing-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        }
        
        .pricing-card-header {
          padding: 2rem 2rem 1rem 2rem;
          color: #333;
        }
        
        .pricing-card-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        
        .pricing-card-title {
          font-size: 18px;
          font-weight: 600;
          color: #333;
          margin-bottom: 2rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .pricing-features {
          list-style: none;
          padding: 0 2rem;
          margin-bottom: 2rem;
        }
        
        .pricing-feature {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          font-size: 14px;
          color: #666;
          line-height: 1.4;
        }
        
        .pricing-feature::before {
          content: '';
          width: 12px;
          height: 12px;
          background: #ccc;
          margin-right: 1rem;
          margin-top: 0.25rem;
          flex-shrink: 0;
          border-radius: 1px;
        }
        
        .pricing-card-footer {
          background: #333;
          color: white;
          padding: 1.5rem 2rem;
          text-align: center;
          font-size: 14px;
          font-weight: 500;
        }
        
        .contact-section {
          background: #000;
          padding: 4rem 0;
          text-align: center;
        }
        
        .contact-title {
          font-size: 32px;
          font-weight: 400;
          color: #d4af37;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        
        .contact-subtitle {
          font-size: 16px;
          color: #888;
          margin-bottom: 3rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .contact-form {
          max-width: 500px;
          margin: 0 auto 3rem auto;
          display: flex;
          gap: 1rem;
        }
        
        .contact-input {
          flex: 1;
          padding: 1rem 1.5rem;
          background: #333;
          border: none;
          border-radius: 4px;
          color: white;
          font-size: 14px;
        }
        
        .contact-input::placeholder {
          color: #888;
        }
        
        .contact-button {
          padding: 1rem 1.5rem;
          background: #d4af37;
          border: none;
          border-radius: 4px;
          color: #000;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .contact-button:hover {
          background: #b8941f;
        }
        
        .social-icons {
          display: flex;
          justify-content: center;
          gap: 2rem;
        }
        
        .social-icon {
          width: 40px;
          height: 40px;
          background: #333;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #888;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          background: #d4af37;
          color: #000;
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
        
        @media (max-width: 1023px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 0 1rem;
          }
          
          .px-16 {
            padding-left: 2rem;
            padding-right: 2rem;
          }
          
          .py-32 {
            padding-top: 6rem;
            padding-bottom: 6rem;
          }
        }
        
        @media (max-width: 767px) {
          .px-16 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .py-32 {
            padding-top: 4rem;
            padding-bottom: 4rem;
          }
          
          .gap-x-8 {
            column-gap: 0.5rem;
            flex-wrap: wrap;
            justify-content: center;
          }
          
          .text-\[14px\] {
            font-size: 12px;
          }
          
          .pricing-title {
            margin-bottom: 2rem;
            font-size: 28px;
          }
          
          .pricing-grid {
            gap: 1.5rem;
          }
          
          .contact-form {
            flex-direction: column;
            max-width: 300px;
          }
          
          .social-icons {
            gap: 1rem;
          }
          
         
        }
               .font-sora .xl\:max-w-md .backdrop-blur-sm{
 transform:translatex(0px) translatey(0px);
}

@media (min-width: 1024px) {
  /* Navigation - Desktop only */
  #__next .font-sora .xl\:max-w-md {
    padding-left: 379px;
  }
}

      `}</style>
      
      <div className="pricing-bg">
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        <div className="w-full h-full py-32">
          <div className="container">
            {/* Pricing Title */}
            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="pricing-title"
            >
              PRICE PLANS
            </motion.h1>
            
            {/* Pricing Grid */}
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="pricing-grid"
            >
              {pricingData.map((plan, index) => (
                <div key={index} className="pricing-card">
                  <div className="pricing-card-header">
                    <div className="pricing-card-icon">{plan.icon}</div>
                    <h3 className="pricing-card-title">{plan.title}</h3>
                  </div>
                  <ul className="pricing-features">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="pricing-feature">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pricing-card-footer">
                    {plan.pricing}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="contact-section">
          <div className="container">
            <motion.h2
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="contact-title"
            >
              CONTACT
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="contact-subtitle"
            >
              INTERESTED IN WORKING TOGETHER!
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="contact-form"
            >
              <input 
                type="email" 
                placeholder="edvia@company.com" 
                className="contact-input"
              />
              <button className="contact-button">→</button>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.9)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="social-icons"
            >
              <a href="#" className="social-icon">📷</a>
              <a href="#" className="social-icon">𝕏</a>
              <a href="#" className="social-icon">✉</a>
              <a href="#" className="social-icon">💼</a>
              <a href="#" className="social-icon">🎨</a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;