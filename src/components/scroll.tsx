import { cn } from '@/lib/utils'

export const ScrollArea = ({
  hasScrollTitle = false,
  className,
  ...rest
}: {
  hasScrollTitle?: boolean
  className?: string
  [key: string]: any
}) => (
  <div
    id={hasScrollTitle ? 'scroll-area' : undefined}
    className={cn('scrollable-area relative w-full', className)}
    {...rest}
  />
)
