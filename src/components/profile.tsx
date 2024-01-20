import Link from 'next/link'

import { site } from '@/lib/constants'

export const Profile = () => {
  return (
    <Link href="/" className="link-card inline-flex items-center gap-2 p-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/avatar.png"
        alt={site.author.name}
        width={40}
        height={40}
        loading="lazy"
        className="h-12 w-12 rounded-full shadow-sm"
      />
      <div className="flex flex-col">
        <span className="font-semibold tracking-tight">{site.author.name}</span>
        <span className="text-gray-600">{site.author.job}</span>
      </div>
    </Link>
  )
}
