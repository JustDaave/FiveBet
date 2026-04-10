import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '@/images/logo2.png';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={logo}
              alt="FiveBet logo"
              className="h-11 w-auto"
              priority
            />
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="/#games" className="text-zinc-300 hover:text-white transition-colors">Games</a>
            <a href="/#features" className="text-zinc-300 hover:text-white transition-colors">Features</a>
            <a href="/#connect" className="text-zinc-300 hover:text-white transition-colors">Connect</a>
          </nav>
          
          <button className="md:hidden p-2 text-white">
            <Menu className="w-6 h-6" />
          </button>
          
          <button className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40">
            Join Server
          </button>
        </div>
      </div>
    </header>
  );
}