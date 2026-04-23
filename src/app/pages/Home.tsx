import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { GameCard } from '../components/GameCard';
import { Features } from '../components/Features';
import { ServerConnect } from '../components/ServerConnect';
import { Footer } from '../components/Footer';
import { Circle, Shuffle, Flag } from 'lucide-react';

export default function Home() {
  const games = [
    {
      title: 'Blackjack',
      description: 'Beat the dealer to 21. Classic casino action with multiple tables and varying bet limits.',
      image: 'https://images.unsplash.com/photo-1618304925090-b68a8c744cbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFja2phY2slMjBjYXJkcyUyMGNhc2lub3xlbnwxfHx8fDE3NzI4OTI3MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Shuffle,
      link: '/games/blackjack'
    },
    {
      title: 'Roulette',
      description: 'Spin the wheel and place your bets. Red or black? Odds or evens? The choice is yours.',
      image: 'https://images.unsplash.com/photo-1592602944193-0848995f4b5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3VsZXR0ZSUyMHdoZWVsJTIwY2FzaW5vfGVufDF8fHx8MTc3Mjg0MzE1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Circle,
      link: '/games/roulette'
    },
    {
      title: 'Inside Track',
      description: 'Bet on virtual horse racing. Watch the action unfold and cash in on your winning picks.',
      image: 'https://images.unsplash.com/photo-1555705920-ce69c04129c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3JzZSUyMHJhY2luZyUyMHRyYWNrfGVufDF8fHx8MTc3MjkyODM1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Flag,
      link: '/games/inside-track'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <Hero backgroundImage="https://images.unsplash.com/photo-1672334860772-c526d8645542?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNpbm8lMjBwb2tlciUyMGNoaXBzJTIwZGFya3xlbnwxfHx8fDE3NzI5MjgzNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />
      
      <section id="games" className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full border border-amber-500/30">
              <span className="text-amber-400 text-sm font-semibold">🎲 Live Games</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Available Casino Games
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Join live games happening right now in FiveM. Watch, bet, and win big in our premium casino.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game, index) => (
              <GameCard key={index} {...game} />
            ))}
          </div>
        </div>
      </section>
      
      <Features />
      
      <ServerConnect />
      
      <Footer />
    </div>
  );
}
