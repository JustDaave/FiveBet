import { Trophy, Medal, Award } from 'lucide-react';

interface Player {
  rank: number;
  name: string;
  winnings: string;
  gamesWon: number;
}

interface LeaderboardProps {
  players: Player[];
}

export function Leaderboard({ players }: LeaderboardProps) {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-5 h-5 text-amber-400" />;
      case 2:
        return <Medal className="w-5 h-5 text-zinc-300" />;
      case 3:
        return <Award className="w-5 h-5 text-amber-600" />;
      default:
        return <span className="text-zinc-400 font-semibold">{rank}</span>;
    }
  };

  const getRankBg = (rank: number) => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-r from-amber-500/20 to-amber-600/20 border-amber-500/30';
      case 2:
        return 'bg-gradient-to-r from-zinc-400/20 to-zinc-500/20 border-zinc-400/30';
      case 3:
        return 'bg-gradient-to-r from-amber-600/20 to-amber-700/20 border-amber-600/30';
      default:
        return 'bg-zinc-900/50 border-zinc-800';
    }
  };

  return (
    <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-xl border border-zinc-800 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-amber-500/20 rounded-lg">
          <Trophy className="w-6 h-6 text-amber-400" />
        </div>
        <h3 className="text-2xl font-bold text-white">Top Players (24h)</h3>
      </div>
      
      {players.length === 0 ? (
        <div className="rounded-lg border border-dashed border-zinc-700 bg-zinc-900/40 px-4 py-8 text-center">
          <p className="text-white font-medium">Leaderboard is empty.</p>
          <p className="mt-2 text-sm text-zinc-400">
            Rankings will populate after your server starts reporting completed games and payouts.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {players.map((player) => (
            <div
              key={player.rank}
              className={`flex items-center gap-4 p-4 rounded-lg border transition-all duration-300 hover:scale-[1.02] ${getRankBg(player.rank)}`}
            >
              <div className="flex items-center justify-center w-10 h-10 bg-black/30 rounded-lg">
                {getRankIcon(player.rank)}
              </div>
              
              <div className="flex-1">
                <p className="text-white font-semibold">{player.name}</p>
                <p className="text-zinc-400 text-sm">{player.gamesWon} games won</p>
              </div>
              
              <div className="text-right">
                <p className="text-amber-400 font-bold">{player.winnings}</p>
                <p className="text-zinc-500 text-sm">winnings</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
