import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { cn } from '@/lib/utils'

export const ExternalLink = ({
  children,
  href,
  className
}: {
  children: React.ReactNode
  href: string
  className?: string
}) => {
  return (
    <a
      className={cn('inline-flex underline', className)}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
      <ArrowUpRight size={12} />
    </a>
  )
}

export const InternalLink = ({
  children,
  href,
  className
}: {
  children: React.ReactNode
  href: string
  className?: string
}) => {
  return (
    <Link
      className={cn('underline', className)}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </Link>
  )
}
