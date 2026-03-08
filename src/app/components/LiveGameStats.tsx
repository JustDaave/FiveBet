import { Users, TrendingUp, Trophy, DollarSign } from 'lucide-react';

interface LiveGameStatsProps {
  activePlayers: number;
  totalBets: string;
  biggestWin: string;
  winRate: string;
}

export function LiveGameStats({ activePlayers, totalBets, biggestWin, winRate }: LiveGameStatsProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="p-6 bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-xl border border-zinc-800">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-green-500/20 rounded-lg">
            <Users className="w-5 h-5 text-green-400" />
          </div>
          <p className="text-zinc-400 text-sm">Active Players</p>
        </div>
        <p className="text-2xl font-bold text-white">{activePlayers}</p>
      </div>
      
      <div className="p-6 bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-xl border border-zinc-800">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <TrendingUp className="w-5 h-5 text-blue-400" />
          </div>
          <p className="text-zinc-400 text-sm">Total Bets (24h)</p>
        </div>
        <p className="text-2xl font-bold text-white">{totalBets}</p>
      </div>
      
      <div className="p-6 bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-xl border border-zinc-800">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-amber-500/20 rounded-lg">
            <Trophy className="w-5 h-5 text-amber-400" />
          </div>
          <p className="text-zinc-400 text-sm">Biggest Win (24h)</p>
        </div>
        <p className="text-2xl font-bold text-white">{biggestWin}</p>
      </div>
      
      <div className="p-6 bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-xl border border-zinc-800">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-purple-500/20 rounded-lg">
            <DollarSign className="w-5 h-5 text-purple-400" />
          </div>
          <p className="text-zinc-400 text-sm">Win Rate</p>
        </div>
        <p className="text-2xl font-bold text-white">{winRate}</p>
      </div>
    </div>
  );
}
