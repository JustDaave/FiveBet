import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      
      <div className="flex-1 flex items-center justify-center px-4 pt-24">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text">
              404
            </h1>
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          
          <p className="text-zinc-400 mb-8">
            Looks like you've wandered off the casino floor. This page doesn't exist, but the games are still running!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold rounded-lg transition-all duration-300"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            
            <Link
              href="/#games"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 border border-white/20"
            >
              <ArrowLeft className="w-5 h-5" />
              Browse Games
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
