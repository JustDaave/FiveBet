import { Shield, Coins, Headphones, TrendingUp } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Provably Fair',
      description: 'Every game is transparent and verifiable. Your wins are guaranteed.'
    },
    {
      icon: Coins,
      title: 'Crypto Rewards',
      description: 'Earn and withdraw your winnings in cryptocurrency instantly.'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Our dedicated team is always available to assist you in-game.'
    },
    {
      icon: TrendingUp,
      title: 'Live Statistics',
      description: 'Track real-time game stats and player activity on the server.'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-zinc-950">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose FiveBet?
          </h2>
          <p className="text-xl text-zinc-400">
            The most trusted and feature-rich casino in FiveM
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-xl border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="p-3 bg-amber-500/20 rounded-lg w-fit mb-4">
                <feature.icon className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
