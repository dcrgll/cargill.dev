'use client'

import { useState } from 'react'
import { MenuIcon } from 'lucide-react'
import { Drawer } from 'vaul'

import { MobileDrawer } from './drawer'
import { Button } from './ui/button'

export const Header = ({ title }: { title: string }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 bottom-0 z-50 mx-auto flex h-12 w-full shrink-0 items-center overflow-hidden border-t border-neutral-100 bg-white text-sm font-medium lg:hidden ">
      <div className="flex h-full w-full flex-row-reverse items-center justify-between px-3">
        <span>{title}</span>
        {!isDrawerOpen && (
          <Button
            variant="ghost"
            size="icon"
            title="Toggle drawer"
            className="w-4"
            asChild
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            <MenuIcon size={16} />
          </Button>
        )}
      </div>
      <MobileDrawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </header>
  )
}
