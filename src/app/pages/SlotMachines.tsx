import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { LiveGameStats } from '../components/LiveGameStats';
import { Leaderboard } from '../components/Leaderboard';
import { RecentGames } from '../components/RecentGames';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowLeft, Play, Info } from 'lucide-react';
import Link from 'next/link';

export default function SlotMachines() {
  const leaderboardData = [
    { rank: 1, name: 'JackpotJoe', winnings: '$35,600', gamesWon: 89 },
    { rank: 2, name: 'SlotQueen', winnings: '$28,400', gamesWon: 72 },
    { rank: 3, name: 'SpinToWin', winnings: '$24,100', gamesWon: 65 },
    { rank: 4, name: 'LuckyCherry', winnings: '$19,800', gamesWon: 54 },
    { rank: 5, name: 'MegaSpin', winnings: '$17,200', gamesWon: 48 },
  ];

  const recentGames = [
    { player: 'JackpotJoe', bet: '$100', result: 'win' as const, payout: '$5,000', time: '1 min ago' },
    { player: 'SlotQueen', bet: '$250', result: 'win' as const, payout: '$1,250', time: '3 min ago' },
    { player: 'SpinToWin', bet: '$50', result: 'loss' as const, payout: '$50', time: '5 min ago' },
    { player: 'LuckyCherry', bet: '$150', result: 'win' as const, payout: '$750', time: '7 min ago' },
    { player: 'MegaSpin', bet: '$300', result: 'loss' as const, payout: '$300', time: '9 min ago' },
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
                    src="https://images.unsplash.com/photo-1706129867447-b4f156c46641?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGNhc2lub3xlbnwxfHx8fDE3NzI4NzUxMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Slot Machines"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <h1 className="text-4xl font-bold text-white mb-2">Slot Machines</h1>
                    <p className="text-zinc-300 text-lg">Spin to win! Multiple machines with massive jackpots!</p>
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
                  activePlayers={45}
                  totalBets="$92,300"
                  biggestWin="$35,600"
                  winRate="38.4%"
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
                      <li>Choose your bet amount per spin</li>
                      <li>Pull the lever or press spin to start</li>
                      <li>Match symbols across paylines to win</li>
                      <li>Wild symbols substitute for other symbols</li>
                      <li>Scatter symbols trigger bonus rounds</li>
                      <li>Progressive jackpot grows with each spin</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Available Machines:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Classic 3-Reel Slots (Lower variance, frequent wins)</li>
                      <li>Video 5-Reel Slots (Higher payouts, bonus features)</li>
                      <li>Progressive Jackpot Slots (Massive prizes, rare wins)</li>
                      <li>Themed Slots (Special features and animations)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <RecentGames games={recentGames} />
            </div>
            
            <div className="lg:col-span-1">
              <Leaderboard players={leaderboardData} />
              
              <div className="mt-8 bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-xl border border-zinc-800 p-6">
                <h3 className="text-xl font-bold text-white mb-4">Progressive Jackpot</h3>
                <div className="text-center py-6">
                  <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text mb-2">
                    $847,293
                  </div>
                  <p className="text-zinc-400 text-sm">Current jackpot pool</p>
                </div>
                <div className="space-y-3 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Min Bet to Qualify</span>
                    <span className="text-white font-semibold">$50</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Last Jackpot Won</span>
                    <span className="text-amber-400 font-semibold">3 days ago</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-xl border border-zinc-800 p-6">
                <h3 className="text-xl font-bold text-white mb-4">Bet Limits</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Minimum Spin</span>
                    <span className="text-white font-semibold">$1</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Maximum Spin</span>
                    <span className="text-white font-semibold">$500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">VIP Max Spin</span>
                    <span className="text-amber-400 font-semibold">$2,500</span>
                  </div>
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
