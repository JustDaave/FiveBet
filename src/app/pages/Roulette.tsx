import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { LiveGameStats } from '../components/LiveGameStats';
import { Leaderboard } from '../components/Leaderboard';
import { RecentGames } from '../components/RecentGames';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowLeft, Play, Info } from 'lucide-react';
import Link from 'next/link';

export default function Roulette() {
  const leaderboardData = [
    { rank: 1, name: 'SpinMaster', winnings: '$22,300', gamesWon: 56 },
    { rank: 2, name: 'RedOrBlack', winnings: '$19,100', gamesWon: 48 },
    { rank: 3, name: 'Lucky_Number_7', winnings: '$16,500', gamesWon: 42 },
    { rank: 4, name: 'RouletteRoyale', winnings: '$14,200', gamesWon: 37 },
    { rank: 5, name: 'ZeroHunter', winnings: '$11,800', gamesWon: 31 },
  ];

  const recentGames = [
    { player: 'SpinMaster', bet: '$1,500', result: 'win' as const, payout: '$3,000', time: '30 sec ago' },
    { player: 'RedOrBlack', bet: '$2,000', result: 'loss' as const, payout: '$2,000', time: '2 min ago' },
    { player: 'Lucky_Number_7', bet: '$800', result: 'win' as const, payout: '$28,800', time: '5 min ago' },
    { player: 'RouletteRoyale', bet: '$1,000', result: 'win' as const, payout: '$2,000', time: '7 min ago' },
    { player: 'ZeroHunter', bet: '$500', result: 'loss' as const, payout: '$500', time: '10 min ago' },
  ];

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
                  
                  <div className="absolute top-4 right-4 flex items-center gap-2 bg-red-500 px-4 py-2 rounded-full">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                    <span className="text-white font-semibold">LIVE</span>
                  </div>
                  
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
                <LiveGameStats 
                  activePlayers={32}
                  totalBets="$78,500"
                  biggestWin="$22,300"
                  winRate="48.6%"
                />
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
              
              <RecentGames games={recentGames} />
            </div>
            
            <div className="lg:col-span-1">
              <Leaderboard players={leaderboardData} />
              
              <div className="mt-8 bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-xl border border-zinc-800 p-6">
                <h3 className="text-xl font-bold text-white mb-4">Table Limits</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Minimum Bet</span>
                    <span className="text-white font-semibold">$5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Maximum Bet</span>
                    <span className="text-white font-semibold">$15,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">VIP Max Bet</span>
                    <span className="text-amber-400 font-semibold">$100,000</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-xl border border-zinc-800 p-6">
                <h3 className="text-xl font-bold text-white mb-4">Hot Numbers (Last 100 Spins)</h3>
                <div className="grid grid-cols-5 gap-2">
                  {[7, 23, 14, 32, 17, 9, 28, 5, 19, 31].map((num) => (
                    <div key={num} className="aspect-square bg-red-500/20 border border-red-500/30 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">{num}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
