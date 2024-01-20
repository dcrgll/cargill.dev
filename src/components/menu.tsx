import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { pages, social } from '@/lib/constants'

import { Profile } from './profile'
import { Separator } from './ui/separator'

export const Menu = () => {
  return (
    <div className="flex w-full flex-col text-sm">
      <div className="flex flex-col">
        <Profile />

        <Separator className="my-2" />

        {/* Internal Links */}
        <nav>
          <ul>
            {pages.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.url}
                  className="link-card flex items-center justify-between gap-2 p-2"
                >
                  <div className="flex items-center gap-2">
                    <item.icon size={16} />
                    <span>{item.name}</span>
                  </div>
                  <ArrowUpRight size={12} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Separator className="my-2" />

        {/* External Links */}
        <nav>
          <ul>
            {social.map((item, index) => (
              <li key={index}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-card flex items-center justify-between gap-2 p-2"
                >
                  <div className="flex items-center gap-2">
                    <item.icon size={16} />
                    <span>{item.name}</span>
                  </div>
                  <ArrowUpRight size={12} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
