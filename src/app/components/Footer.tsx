import { Globe } from 'lucide-react';
import Image from 'next/image';

import logo from '@/images/logo.png';
// Removed discordIcon import as we are using a direct URL

export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <p className="text-zinc-400 mb-4">
              FiveM's premier crypto casino experience. Play responsibly and enjoy the thrill of the game.
            </p>
            <div className="flex gap-3">
              <a
                href="https://fivebet.gg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="FiveBet website"
                className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors"
              >
                <Globe className="w-5 h-5 text-zinc-400" />
              </a>

              <a
                href="https://discord.gg/fivebet"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="FiveBet Discord"
                className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors"
              >
                <img src="/discord.svg" alt="FiveBet Discord" className="w-5 h-5" />
              </a>
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
              <li>
                <a href="/faq" className="text-zinc-400 hover:text-amber-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/fivebet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-amber-400 transition-colors"
                >
                  Contact
                </a>
              </li>
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
