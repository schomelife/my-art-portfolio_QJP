"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Instagram, MessageCircle, Mail } from "lucide-react"
import Image from "next/image"
import { ArtworkModal } from "../components/artwork-modal"
import { ContactForm } from "../components/contact-form"

interface Artwork {
  id: number
  title: string
  description: string
  image: string
  price: string
}

const artworks: Artwork[] = [
  {
    id: 1,
    title: "Cosmic Dreams",
    description:
      "A mesmerizing blend of cosmic colors and ethereal forms that transport you to otherworldly dimensions. This piece explores the infinite beauty of space through abstract digital artistry.",
    image: "/placeholder.svg?height=400&width=400",
    price: "$15.99",
  },
  {
    id: 2,
    title: "Urban Pulse",
    description:
      "Capturing the vibrant energy of city life through bold geometric patterns and neon-inspired color palettes. A perfect representation of modern urban aesthetics.",
    image: "/placeholder.svg?height=400&width=400",
    price: "$12.99",
  },
  {
    id: 3,
    title: "Nature's Symphony",
    description:
      "An organic composition that celebrates the harmony found in natural forms. Flowing lines and earth tones create a sense of peace and connection with nature.",
    image: "/placeholder.svg?height=400&width=400",
    price: "$18.99",
  },
  {
    id: 4,
    title: "Digital Zen",
    description:
      "Minimalist design meets digital innovation in this calming piece. Clean lines and subtle gradients create a meditative visual experience.",
    image: "/placeholder.svg?height=400&width=400",
    price: "$14.99",
  },
  {
    id: 5,
    title: "Retro Future",
    description:
      "A nostalgic look at tomorrow through the lens of yesterday. Synthwave aesthetics meet futuristic concepts in this vibrant digital artwork.",
    image: "/placeholder.svg?height=400&width=400",
    price: "$16.99",
  },
  {
    id: 6,
    title: "Abstract Emotions",
    description:
      "Pure emotion translated into visual form. This abstract piece uses color and movement to evoke deep feelings and personal reflection.",
    image: "/placeholder.svg?height=400&width=400",
    price: "$13.99",
  },
]

export default function PortfolioLanding() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (artwork: Artwork) => {
    setSelectedArtwork(artwork)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedArtwork(null)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Featured Digital Art"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Immersive Digital Art
            <span className="block text-3xl md:text-5xl font-light mt-2">for Instant Download</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">
            Discover unique digital artworks that transform your space. High-quality downloads available instantly.
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Shop Now
          </Button>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Artworks</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our collection of carefully crafted digital art pieces, each designed to inspire and captivate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork) => (
              <div
                key={artwork.id}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => openModal(artwork)}
              >
                <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={artwork.image || "/placeholder.svg"}
                    alt={artwork.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <h3 className="text-xl font-bold mb-2">{artwork.title}</h3>
                      <p className="text-sm">Click to view details</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden shadow-xl">
                <Image src="/placeholder.svg?height=400&width=400" alt="Artist Profile" fill className="object-cover" />
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm a digital artist passionate about creating immersive visual experiences that bridge the gap between
                technology and emotion. With over 8 years of experience in digital art, I specialize in creating pieces
                that not only captivate the eye but also tell compelling stories.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Each artwork is carefully crafted using cutting-edge digital tools and techniques, ensuring that every
                piece is unique and of the highest quality. My goal is to make beautiful digital art accessible to
                everyone through instant downloads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">
              Have a question or want to commission a custom piece? I'd love to hear from you.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-gray-400">© {new Date().getFullYear()} Digital Art Portfolio. All rights reserved.</p>
            </div>

            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Pinterest"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Email">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Artwork Modal */}
      <ArtworkModal artwork={selectedArtwork} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}
