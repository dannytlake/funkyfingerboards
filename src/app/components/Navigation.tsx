'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? 'text-blue-400' : 'text-gray-300 hover:text-white'
  }

  return (
    <nav className="w-full bg-black/20 backdrop-blur-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link 
              href="/" 
              className={`text-lg font-semibold ${isActive('/')}`}
            >
              Funky Fingerboards
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link 
              href="/tricks" 
              className={`text-sm font-medium ${isActive('/tricks')} transition-colors`}
            >
              Tricks
            </Link>
            <Link 
              href="/gear" 
              className={`text-sm font-medium ${isActive('/gear')} transition-colors`}
            >
              Gear
            </Link>
            <Link 
              href="/contact" 
              className={`text-sm font-medium ${isActive('/contact')} transition-colors`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
