import { ImageWithFallback } from './figma/ImageWithFallback';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface GameCardProps {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  isLive?: boolean;
  players?: number;
  link?: string;
}

export function GameCard({ title, description, image, icon: Icon, isLive, players, link }: GameCardProps) {
  const card = (
    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 hover:scale-105">
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback 
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {isLive && (
          <div className="absolute top-4 right-4 flex items-center gap-2 bg-red-500 px-3 py-1 rounded-full">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-white text-xs font-semibold">LIVE</span>
          </div>
        )}
        
        {players !== undefined && (
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-white text-xs font-semibold">{players} Playing</span>
          </div>
        )}
        
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/20 backdrop-blur-sm rounded-lg border border-amber-500/30">
              <Icon className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-zinc-400 text-sm">{description}</p>
      </div>
    </div>
  );

  if (link) {
    return <Link href={link}>{card}</Link>;
  }

  return card;
}