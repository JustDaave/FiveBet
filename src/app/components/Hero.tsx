import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles, Users, Trophy } from 'lucide-react';

interface HeroProps {
  backgroundImage: string;
}

export function Hero({ backgroundImage }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback 
          src={backgroundImage}
          alt="Casino background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="inline-block mb-4 px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full border border-amber-500/30">
          <span className="text-amber-400 text-sm font-semibold">🎰 FiveM's Premier Casino Experience</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-amber-400 via-amber-200 to-amber-400 bg-clip-text text-transparent">
          Welcome to FiveBet
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-300 mb-12 max-w-3xl mx-auto">
          Experience the thrill of high-stakes gaming in FiveM's most exclusive crypto casino. Watch live games, join the action, and win big.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold rounded-lg transition-all duration-300 shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105">
            Connect to Server
          </button>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 border border-white/20">
            Watch Live Games
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-3 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="p-3 bg-amber-500/20 rounded-lg">
              <Users className="w-8 h-8 text-amber-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Server-Ready</h3>
            <p className="text-zinc-400">Built for live game events from your FiveM server.</p>
          </div>
          
          <div className="flex flex-col items-center gap-3 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="p-3 bg-amber-500/20 rounded-lg">
              <Sparkles className="w-8 h-8 text-amber-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Live Reporting</h3>
            <p className="text-zinc-400">Real rounds, wagers, and payouts can flow straight into the site.</p>
          </div>
          
          <div className="flex flex-col items-center gap-3 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="p-3 bg-amber-500/20 rounded-lg">
              <Trophy className="w-8 h-8 text-amber-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Crypto Payouts</h3>
            <p className="text-zinc-400">Wallet and payout routes stay available behind the same API key guard.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
