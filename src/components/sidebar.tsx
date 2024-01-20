import { ScrollArea } from '@/components/scroll'

export const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <ScrollArea className="hidden bg-slate-50 lg:flex lg:w-60 lg:flex-col lg:border-l xl:w-72">
      <div className="bg-slate-50 p-3">{children}</div>
    </ScrollArea>
  )
}
