"use client"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  }
}

const Portfolio = () => {
  const portfolioSections = [
    {
      title: "VIDEO EDITING",
      items: [
        {
          image: "/Rectangle 341 (1).png",
          artist: "SARAH THOMPSON",
        },
        {
          image: "/Frame 1575.png",
          artist: "SARAH THOMPSON",
        },
        {
          image: "/Frame 1576.png",
          artist: "SARAH THOMPSON",
        },
        {
          image: "/Frame 1577.png",
          artist: "SARAH THOMPSON",
        },
      ],
    },
    {
      title: "MOTION GRAPHICS",
      items: [
        {
          image: "/Rectangle 341 (2).png",
          artist: "SARAH THOMPSON",
        },
        {
          image: "/Frame 1579.png",
          artist: "SARAH THOMPSON",
        },
        {
          image: "/Frame 1580.png",
          artist: "SARAH THOMPSON",
        },
        {
          image: "/Frame 1581.png",
          artist: "SARAH THOMPSON",
        },
      ],
    },
    {
      title: "CGI",
      items: [
        {
          image: "/Rectangle 341.png",
          artist: "SARAH THOMPSON",
        },
        {
          image: "/Frame 1583.png",
          artist: "SARAH THOMPSON",
        },
        {
          image: "/Frame 1584.png",
          artist: "SARAH THOMPSON",
        },
        {
          image: "/Frame 1585.png",
          artist: "SARAH THOMPSON",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-orange-400">EDITARY</div>
            <div className="hidden md:flex items-center space-x-8 text-sm">
              <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors">
                PROJECTS
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                SERVICES
              </a>
              {/* <a href="#" className="text-gray-300 hover:text-white transition-colors">
                TESTIMONIALS
              </a> */}
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                PRICING
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                ABOUT
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          {portfolioSections.map((section, sectionIndex) => (
            <motion.section
              key={section.title}
              variants={fadeIn("up", sectionIndex * 0.2)}
              initial="hidden"
              animate="show"
              className="mb-16 last:mb-0"
            >
              {/* Section Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-light text-orange-400 tracking-wider">{section.title}</h2>
                <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group">
                  <span className="text-sm tracking-wider">VIEW ALL</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Portfolio Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    variants={fadeIn("up", 0.1 * itemIndex)}
                    initial="hidden"
                    animate="show"
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-lg bg-gray-900">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={`${section.title} work by ${item.artist}`}
                        className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="mt-3">
                      <p className="text-xs text-gray-400 tracking-widest font-light">{item.artist}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button className="fixed top-4 right-6 z-50 md:hidden bg-orange-400 text-black p-2 rounded">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  )
}

export default Portfolio
