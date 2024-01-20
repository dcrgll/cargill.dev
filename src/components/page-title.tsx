import Balancer from 'react-wrap-balancer'

import { cn } from '@/lib/utils'

export const PageTitle = ({
  title,
  subtitle,
  className
}: {
  title: string
  subtitle?: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn('mb-6', className)}>
      <Balancer as="h1">{title}</Balancer>
      {subtitle}
    </div>
  )
}
