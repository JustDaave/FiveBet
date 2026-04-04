import { Twitter, MessageCircle, Globe } from 'lucide-react';
import Image from 'next/image';

import logo from '@/images/logo.png';

export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={logo}
                alt="FiveBet logo"
                className="h-12 w-auto rounded-lg"
              />
              <div>
                <h3 className="text-xl font-bold text-white">FiveBet</h3>
                <p className="text-xs text-amber-400">Crypto Casino</p>
              </div>
            </div>
            <p className="text-zinc-400 mb-4">
              FiveM's premier crypto casino experience. Play responsibly and enjoy the thrill of the game.
            </p>
            <div className="flex gap-3">
              <button className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors">
                <Twitter className="w-5 h-5 text-zinc-400" />
              </button>
              <button className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors">
                <MessageCircle className="w-5 h-5 text-zinc-400" />
              </button>
              <button className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors">
                <Globe className="w-5 h-5 text-zinc-400" />
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#games" className="text-zinc-400 hover:text-amber-400 transition-colors">Games</a></li>
              <li><a href="#features" className="text-zinc-400 hover:text-amber-400 transition-colors">Features</a></li>
              <li><a href="#connect" className="text-zinc-400 hover:text-amber-400 transition-colors">Connect</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-zinc-400 hover:text-amber-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-amber-400 transition-colors">Rules</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-800 text-center">
          <p className="text-zinc-500 text-sm">
            © 2026 FiveBet Casino. Play responsibly. Must be 18+ to participate.
          </p>
        </div>
      </div>
    </footer>
  );
}
