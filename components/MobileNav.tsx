'use client'

import Link from 'next/link'

import {
  Home,
  Calendar,
  Ship,
  Cloud,
} from 'lucide-react'

import { usePathname } from 'next/navigation'

export default function MobileNav() {
  const pathname =
    usePathname()

  const items = [
    {
      href: '/',
      icon: Home,
      label: 'Home',
    },

    {
      href: '/calendar',
      icon: Calendar,
      label: 'Calendar',
    },

    {
      href: '/ships',
      icon: Ship,
      label: 'Ships',
    },

    {
      href: '/weather',
      icon: Cloud,
      label: 'Weather',
    },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="mx-4 mb-4 glass rounded-3xl px-6 py-4 flex items-center justify-between">
        {items.map((item) => {
          const Icon =
            item.icon

          const active =
            pathname ===
            item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex flex-col items-center gap-1 transition
                ${
                  active
                    ? 'text-cyan-400'
                    : 'text-white/70'
                }
              `}
            >
              <Icon size={22} />

              <span className="text-xs">
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}