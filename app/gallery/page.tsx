import { Navigation } from "@/components/navigation"

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background sin-city-pattern">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="border-b-2 border-primary pb-2 mb-8">
          <h1 className="text-primary text-2xl font-bold">GALLERY / PAST PROJECTS</h1>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-white text-xl font-bold mb-4">Coming soon!</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              You will soon be able to see some of our past projects on this page. We are currently working on getting
              this updated. Thank you for your patience. Your Sin City Auto Repair Team.
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded">
            <img
              src="/construction-planning-blueprints-with-hard-hat-and.jpg"
              alt="Construction planning and blueprints"
              className="w-full max-w-md rounded"
            />
          </div>
        </div>
      </main>

      <footer className="bg-primary text-white text-center py-4 mt-16">
        <div className="flex justify-center space-x-4 mb-2">
          <a href="#" className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            f
          </a>
          <a href="#" className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
            @
          </a>
          <a href="#" className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center">
            t
          </a>
        </div>
        <p className="text-sm">© 2024 by SIN CITY AUTO REPAIR LV. All rights reserved.</p>
      </footer>
    </div>
  )
}
