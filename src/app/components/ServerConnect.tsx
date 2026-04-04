import { Gamepad2, Server, Zap } from 'lucide-react';

export function ServerConnect() {
  return (
    <section id="connect" className="py-20 px-4 bg-gradient-to-b from-black to-zinc-950">
      <div className="container mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-600 to-amber-500 p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-black/20 rounded-full">
              <Zap className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Ready to Play?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Join FiveBet Casino Now
            </h2>
            
            <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
              Connect to our FiveM server and experience the most immersive casino gaming. All games are live, all wins are real.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-3 px-6 py-3 bg-black/20 backdrop-blur-sm rounded-lg">
                <Server className="w-5 h-5 text-white" />
                <div className="text-left">
                  <p className="text-xs text-black/70">Server IP</p>
                  <p className="font-mono font-bold text-white">connect fivebet.gg</p>
                </div>
              </div>
              
              <button className="px-8 py-4 bg-black hover:bg-zinc-900 text-white font-bold rounded-lg transition-all duration-300 flex items-center gap-2 shadow-xl">
                <Gamepad2 className="w-5 h-5" />
                Copy Server IP
              </button>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center text-sm text-black/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Authenticated API routes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>Game reports stored in Supabase</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>Live dashboards unlock when reports arrive</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
