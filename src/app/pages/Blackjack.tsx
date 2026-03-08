import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { LiveGameStats } from '../components/LiveGameStats';
import { Leaderboard } from '../components/Leaderboard';
import { RecentGames } from '../components/RecentGames';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowLeft, Play, Info } from 'lucide-react';
import Link from 'next/link';

export default function Blackjack() {
  const leaderboardData = [
    { rank: 1, name: 'BlackjackKing', winnings: '$18,900', gamesWon: 45 },
    { rank: 2, name: 'Card_Counter', winnings: '$15,300', gamesWon: 38 },
    { rank: 3, name: 'Hit_Me_21', winnings: '$12,700', gamesWon: 32 },
    { rank: 4, name: 'DealerBuster', winnings: '$10,400', gamesWon: 28 },
    { rank: 5, name: 'StandPat', winnings: '$8,900', gamesWon: 24 },
  ];

  const recentGames = [
    { player: 'BlackjackKing', bet: '$800', result: 'win' as const, payout: '$1,600', time: '1 min ago' },
    { player: 'Card_Counter', bet: '$1,200', result: 'win' as const, payout: '$2,400', time: '4 min ago' },
    { player: 'Hit_Me_21', bet: '$500', result: 'loss' as const, payout: '$500', time: '6 min ago' },
    { player: 'DealerBuster', bet: '$900', result: 'win' as const, payout: '$1,800', time: '9 min ago' },
    { player: 'StandPat', bet: '$600', result: 'loss' as const, payout: '$600', time: '11 min ago' },
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
                    src="https://images.unsplash.com/photo-1618304925090-b68a8c744cbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFja2phY2slMjBjYXJkcyUyMGNhc2lub3xlbnwxfHx8fDE3NzI4OTI3MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Blackjack"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  
                  <div className="absolute top-4 right-4 flex items-center gap-2 bg-red-500 px-4 py-2 rounded-full">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                    <span className="text-white font-semibold">LIVE</span>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <h1 className="text-4xl font-bold text-white mb-2">Blackjack</h1>
                    <p className="text-zinc-300 text-lg">Beat the dealer to 21. The classic casino favorite!</p>
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
                  activePlayers={18}
                  totalBets="$62,800"
                  biggestWin="$18,900"
                  winRate="47.8%"
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
                      <li>Get as close to 21 as possible without going over</li>
                      <li>Face cards are worth 10, Aces are worth 1 or 11</li>
                      <li>You can hit (take another card) or stand (keep your hand)</li>
                      <li>Double down to double your bet and take one more card</li>
                      <li>Split pairs to play two separate hands</li>
                      <li>Dealer must hit on 16 and stand on 17</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Payouts:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Blackjack (21 with first 2 cards): 3:2</li>
                      <li>Standard Win: 1:1</li>
                      <li>Insurance (when dealer has Ace): 2:1</li>
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
                    <span className="text-white font-semibold">$25</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Maximum Bet</span>
                    <span className="text-white font-semibold">$10,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">VIP Max Bet</span>
                    <span className="text-amber-400 font-semibold">$50,000</span>
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
