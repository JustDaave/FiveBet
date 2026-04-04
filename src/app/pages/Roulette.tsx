import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { LiveGameStats } from '../components/LiveGameStats';
import { Leaderboard } from '../components/Leaderboard';
import { RecentGames } from '../components/RecentGames';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowLeft, Play, Info } from 'lucide-react';
import Link from 'next/link';

export default function Roulette() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Games
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 mb-8">
                <div className="relative h-96">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1592602944193-0848995f4b5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3VsZXR0ZSUyMHdoZWVsJTIwY2FzaW5vfGVufDF8fHx8MTc3Mjg0MzE1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Roulette"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <h1 className="text-4xl font-bold text-white mb-2">Roulette</h1>
                    <p className="text-zinc-300 text-lg">Spin the wheel and place your bets. Classic European style!</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <button className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold rounded-lg transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 flex items-center justify-center gap-2">
                    <Play className="w-5 h-5" />
                    Join Game in Server
                  </button>
                </div>
              </div>
              
              <div className="mb-8">
                <LiveGameStats />
              </div>
              
              <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-xl border border-zinc-800 p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Info className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">How to Play</h3>
                </div>
                
                <div className="space-y-4 text-zinc-300">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Game Rules:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Place bets on numbers, colors, or sections before the spin</li>
                      <li>The wheel contains numbers 0-36 (European style)</li>
                      <li>Red/Black, Odd/Even, High/Low are outside bets</li>
                      <li>Straight up bets are single numbers</li>
                      <li>Split, street, and corner bets cover multiple numbers</li>
                      <li>Wait for "No more bets" before the ball lands</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Payout Structure:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Straight (single number): 35:1</li>
                      <li>Split (2 numbers): 17:1</li>
                      <li>Street (3 numbers): 11:1</li>
                      <li>Corner (4 numbers): 8:1</li>
                      <li>Red/Black, Odd/Even, High/Low: 1:1</li>
                      <li>Dozen or Column: 2:1</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <RecentGames games={[]} />
            </div>
            
            <div className="lg:col-span-1">
              <Leaderboard players={[]} />
              
              <div className="mt-8 bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-xl border border-zinc-800 p-6">
                <h3 className="text-xl font-bold text-white mb-4">Table Data</h3>
                <p className="text-sm text-zinc-400 leading-6">
                  Wheel results, stake limits, and table activity should now come from live server reports instead of static page data.
                </p>
              </div>
              
              <div className="mt-8 bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-xl border border-zinc-800 p-6">
                <h3 className="text-xl font-bold text-white mb-4">Round History</h3>
                <p className="text-sm text-zinc-400 leading-6">
                  If you want hot numbers or recent wheel outcomes here, report each completed spin with a unique ID and include the result in the metadata payload.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
