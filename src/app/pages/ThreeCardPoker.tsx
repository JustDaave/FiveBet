import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { LiveGameStats } from '../components/LiveGameStats';
import { Leaderboard } from '../components/Leaderboard';
import { RecentGames } from '../components/RecentGames';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowLeft, Play, Info } from 'lucide-react';
import Link from 'next/link';

export default function ThreeCardPoker() {
  const leaderboardData = [
    { rank: 1, name: 'PokerPro_Mike', winnings: '$12,450', gamesWon: 23 },
    { rank: 2, name: 'CardShark88', winnings: '$9,200', gamesWon: 18 },
    { rank: 3, name: 'LuckyAce', winnings: '$7,800', gamesWon: 15 },
    { rank: 4, name: 'RoyalFlush', winnings: '$6,500', gamesWon: 12 },
    { rank: 5, name: 'BluffMaster', winnings: '$5,900', gamesWon: 11 },
  ];

  const recentGames = [
    { player: 'PokerPro_Mike', bet: '$500', result: 'win' as const, payout: '$1,500', time: '2 min ago' },
    { player: 'CardShark88', bet: '$750', result: 'loss' as const, payout: '$750', time: '5 min ago' },
    { player: 'LuckyAce', bet: '$1,000', result: 'win' as const, payout: '$3,000', time: '8 min ago' },
    { player: 'BluffMaster', bet: '$250', result: 'win' as const, payout: '$500', time: '12 min ago' },
    { player: 'RoyalFlush', bet: '$600', result: 'loss' as const, payout: '$600', time: '15 min ago' },
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
                    src="https://images.unsplash.com/photo-1560327317-031f46d0e995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF5aW5nJTIwY2FyZHMlMjBwb2tlcnxlbnwxfHx8fDE3NzI5MjgzNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Three-Card Poker"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  
                  <div className="absolute top-4 right-4 flex items-center gap-2 bg-red-500 px-4 py-2 rounded-full">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                    <span className="text-white font-semibold">LIVE</span>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <h1 className="text-4xl font-bold text-white mb-2">Three-Card Poker</h1>
                    <p className="text-zinc-300 text-lg">Fast-paced poker action. Beat the dealer to win big!</p>
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
                  activePlayers={24}
                  totalBets="$45,200"
                  biggestWin="$12,500"
                  winRate="42.3%"
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
                      <li>Each player and the dealer receive three cards</li>
                      <li>Place an ante bet to start the hand</li>
                      <li>After seeing your cards, decide to play or fold</li>
                      <li>Playing requires an additional bet equal to the ante</li>
                      <li>Dealer must have Queen high or better to qualify</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Payout Structure:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Straight Flush: 40:1</li>
                      <li>Three of a Kind: 30:1</li>
                      <li>Straight: 6:1</li>
                      <li>Flush: 4:1</li>
                      <li>Pair: 1:1</li>
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
                    <span className="text-white font-semibold">$10</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Maximum Bet</span>
                    <span className="text-white font-semibold">$5,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">VIP Max Bet</span>
                    <span className="text-amber-400 font-semibold">$25,000</span>
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
