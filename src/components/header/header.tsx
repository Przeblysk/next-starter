'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'

export const Header = () => {
  const { theme, setTheme } = useTheme()
  return (
    <header className='border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto flex h-16 items-center space-x-4 sm:justify-between'>
        <p>next-starter</p>
        <nav className='flex items-center gap-0.5'></nav>
        <Button
          className='relative h-8 w-8 rounded-sm'
          variant='ghost'
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
        </Button>
      </div>
    </header>
  )
}
