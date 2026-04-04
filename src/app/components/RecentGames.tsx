import { Clock } from 'lucide-react';

interface Game {
  player: string;
  bet: string;
  result: 'win' | 'loss';
  payout: string;
  time: string;
}

interface RecentGamesProps {
  games: Game[];
}

export function RecentGames({ games }: RecentGamesProps) {
  return (
    <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-xl border border-zinc-800 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-500/20 rounded-lg">
          <Clock className="w-6 h-6 text-blue-400" />
        </div>
        <h3 className="text-2xl font-bold text-white">Recent Games</h3>
      </div>
      
      {games.length === 0 ? (
        <div className="rounded-lg border border-dashed border-zinc-700 bg-zinc-900/40 px-4 py-8 text-center">
          <p className="text-white font-medium">No rounds reported yet.</p>
          <p className="mt-2 text-sm text-zinc-400">
            Your game server can post finished rounds to the reporting API and the latest activity can be rendered here.
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {games.map((game, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center gap-3 flex-1">
                <div className={`w-2 h-2 rounded-full ${game.result === 'win' ? 'bg-green-400' : 'bg-red-400'}`} />
                <div>
                  <p className="text-white font-medium">{game.player}</p>
                  <p className="text-zinc-500 text-xs">{game.time}</p>
                </div>
              </div>
              
              <div className="text-right">
                <p className="text-zinc-400 text-sm">Bet: {game.bet}</p>
                <p className={`font-semibold ${game.result === 'win' ? 'text-green-400' : 'text-red-400'}`}>
                  {game.result === 'win' ? '+' : '-'}{game.payout}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
