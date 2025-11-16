import { Menu, Rocket, PhoneCall } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-rose-500 grid place-items-center text-white">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="font-semibold text-gray-900">Flames AI Agency</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#services" className="hover:text-gray-900 transition">Services</a>
            <a href="#work" className="hover:text-gray-900 transition">Work</a>
            <a href="#about" className="hover:text-gray-900 transition">About</a>
            <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-4 py-2 hover:bg-gray-800 transition">
              <PhoneCall className="h-4 w-4" /> Book a call
            </a>
          </nav>

          <button aria-label="Open menu" onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-black/5">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 grid gap-2 text-sm text-gray-700">
            <a href="#services" className="px-2 py-2 rounded hover:bg-black/5">Services</a>
            <a href="#work" className="px-2 py-2 rounded hover:bg-black/5">Work</a>
            <a href="#about" className="px-2 py-2 rounded hover:bg-black/5">About</a>
            <a href="#contact" className="px-2 py-2 rounded hover:bg-black/5">Contact</a>
            <a href="#contact" className="px-2 py-2 rounded border border-gray-900 text-gray-900 font-medium rounded-lg text-center">Book a call</a>
          </div>
        )}
      </div>
    </header>
  )
}
