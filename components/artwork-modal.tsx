"use client"
import { X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Artwork {
  id: number
  title: string
  description: string
  image: string
  price: string
}

interface ArtworkModalProps {
  artwork: Artwork | null
  isOpen: boolean
  onClose: () => void
}

export function ArtworkModal({ artwork, isOpen, onClose }: ArtworkModalProps) {
  if (!isOpen || !artwork) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="relative aspect-square">
              <Image
                src={artwork.image || "/placeholder.svg"}
                alt={artwork.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{artwork.title}</h3>
                <p className="text-gray-600 leading-relaxed">{artwork.description}</p>
              </div>

              <div className="space-y-4">
                <div className="text-2xl font-bold text-gray-900">{artwork.price}</div>
                <Button className="w-full bg-black hover:bg-gray-800 text-white py-3">
                  <Download className="w-5 h-5 mr-2" />
                  Download Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
