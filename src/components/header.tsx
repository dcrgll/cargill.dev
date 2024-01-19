import { MobileDrawer } from './drawer'

export const Header = ({ title }: { title: string }) => {
  return (
    <header className="fixed inset-x-0 bottom-0 z-50 mx-auto flex h-12 w-full shrink-0 items-center overflow-hidden border-t border-neutral-100 bg-white text-sm font-medium lg:hidden">
      <div className="flex h-full w-full items-center justify-between px-3">
        <MobileDrawer />
        <span>{title}</span>
      </div>
    </header>
  )
}
