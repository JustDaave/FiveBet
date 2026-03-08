import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { LiveGameStats } from '../components/LiveGameStats';
import { Leaderboard } from '../components/Leaderboard';
import { RecentGames } from '../components/RecentGames';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowLeft, Play, Info } from 'lucide-react';
import Link from 'next/link';

export default function InsideTrack() {
  const leaderboardData = [
    { rank: 1, name: 'RaceDay_King', winnings: '$16,700', gamesWon: 34 },
    { rank: 2, name: 'BettingBoss', winnings: '$14,200', gamesWon: 29 },
    { rank: 3, name: 'TrackStar', winnings: '$11,900', gamesWon: 25 },
    { rank: 4, name: 'TipsterPro', winnings: '$9,600', gamesWon: 21 },
    { rank: 5, name: 'DerbyDynamo', winnings: '$8,100', gamesWon: 18 },
  ];

  const recentGames = [
    { player: 'RaceDay_King', bet: '$1,000', result: 'win' as const, payout: '$5,000', time: '2 min ago' },
    { player: 'BettingBoss', bet: '$750', result: 'loss' as const, payout: '$750', time: '6 min ago' },
    { player: 'TrackStar', bet: '$500', result: 'win' as const, payout: '$2,000', time: '8 min ago' },
    { player: 'TipsterPro', bet: '$1,200', result: 'win' as const, payout: '$3,600', time: '11 min ago' },
    { player: 'DerbyDynamo', bet: '$400', result: 'loss' as const, payout: '$400', time: '14 min ago' },
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
                    src="https://images.unsplash.com/photo-1555705920-ce69c04129c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3JzZSUyMHJhY2luZyUyMHRyYWNrfGVufDF8fHx8MTc3MjkyODM1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Inside Track"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  
                  <div className="absolute top-4 right-4 flex items-center gap-2 bg-red-500 px-4 py-2 rounded-full">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                    <span className="text-white font-semibold">LIVE</span>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <h1 className="text-4xl font-bold text-white mb-2">Inside Track</h1>
                    <p className="text-zinc-300 text-lg">Virtual horse racing with real-time betting action!</p>
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
                  activePlayers={15}
                  totalBets="$38,900"
                  biggestWin="$16,700"
                  winRate="35.2%"
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
                      <li>Watch simulated horse races with realistic animations</li>
                      <li>Place bets before the race starts</li>
                      <li>Choose from 6 horses with different odds</li>
                      <li>Races run every 3-5 minutes</li>
                      <li>Multiple bet types available (Win, Place, Show)</li>
                      <li>View horse stats and form guides</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Bet Types:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Win - Your horse must finish 1st</li>
                      <li>Place - Your horse must finish 1st or 2nd</li>
                      <li>Show - Your horse must finish 1st, 2nd, or 3rd</li>
                      <li>Exacta - Pick 1st and 2nd in exact order</li>
                      <li>Trifecta - Pick 1st, 2nd, and 3rd in exact order</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <RecentGames games={recentGames} />
            </div>
            
            <div className="lg:col-span-1">
              <Leaderboard players={leaderboardData} />
              
              <div className="mt-8 bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-xl border border-zinc-800 p-6">
                <h3 className="text-xl font-bold text-white mb-4">Next Race</h3>
                <div className="text-center py-4 mb-4">
                  <div className="text-3xl font-bold text-amber-400 mb-1">
                    2:45
                  </div>
                  <p className="text-zinc-400 text-sm">Time until next race</p>
                </div>
                <div className="space-y-2">
                  <div className="p-3 bg-zinc-900/50 rounded-lg border border-zinc-800">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white font-semibold">1. Thunderbolt</span>
                      <span className="text-amber-400">3:1</span>
                    </div>
                    <div className="text-xs text-zinc-500">Form: 1-2-1-3</div>
                  </div>
                  <div className="p-3 bg-zinc-900/50 rounded-lg border border-zinc-800">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white font-semibold">2. Lightning Strike</span>
                      <span className="text-amber-400">5:1</span>
                    </div>
                    <div className="text-xs text-zinc-500">Form: 2-1-4-2</div>
                  </div>
                  <div className="p-3 bg-zinc-900/50 rounded-lg border border-zinc-800">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white font-semibold">3. Midnight Runner</span>
                      <span className="text-amber-400">7:1</span>
                    </div>
                    <div className="text-xs text-zinc-500">Form: 3-3-2-1</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-xl border border-zinc-800 p-6">
                <h3 className="text-xl font-bold text-white mb-4">Bet Limits</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Minimum Bet</span>
                    <span className="text-white font-semibold">$20</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Maximum Bet</span>
                    <span className="text-white font-semibold">$7,500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">VIP Max Bet</span>
                    <span className="text-amber-400 font-semibold">$30,000</span>
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
