"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/maintenance", label: "MAINTENANCE" },
    { href: "/repairs", label: "REPAIRS" },
    { href: "/offers", label: "OFFERS" },
    { href: "/gallery", label: "OUR WORK / GALLERY" },
    { href: "/contact", label: "CONTACT" },
  ]

  return (
    <div className="bg-background sin-city-pattern">
      <div className="flex items-center justify-between px-4 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center relative">
            <div className="text-white text-xs font-bold text-center leading-tight">
              <div>Sin City</div>
              <div>Auto Repair</div>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-xs text-black">★</span>
            </div>
          </div>
          <div className="text-primary text-2xl font-bold italic tracking-wide">SIN CITY AUTO REPAIR</div>
        </Link>

        <div className="bg-primary px-6 py-2 rounded">
          <div className="text-white font-bold">Call us: (702) 371-4213</div>
        </div>
      </div>

      <nav className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-12">
            {/* Desktop Navigation */}
            <div className="hidden md:flex w-full">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex-1 text-center py-3 text-white font-medium text-sm transition-colors border-r border-gray-700 last:border-r-0 ${
                    pathname === item.href ? "bg-primary" : "hover:bg-gray-700"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden w-full flex justify-center">
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-white">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden bg-gray-800 border-t border-gray-700">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-white hover:bg-gray-700 border-b border-gray-700 last:border-b-0"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}
