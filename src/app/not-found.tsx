'use client'

import { InternalLink } from '@/components/link'

const NotFoundPage = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <img
        src="https://i.pinimg.com/originals/72/c4/94/72c4944401137dd1b656cd485fbc1590.gif"
        className="h-screen"
      />

      <InternalLink
        href="/"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
      >
        <div className="text-center text-3xl font-bold text-white">
          404 - Page Not Found
        </div>
      </InternalLink>
    </div>
  )
}

export default NotFoundPage
