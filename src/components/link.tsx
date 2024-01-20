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
      className={cn('underline', className)}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  )
}
