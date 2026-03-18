import { DollarSign, TrendingUp, Coins, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <div className="flex flex-col gap-12 items-center text-center">
      <div className="relative w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-3xl rounded-full" />
        <div className="relative flex gap-4 justify-center items-center py-8">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full animate-pulse" />
            <DollarSign className="relative w-16 h-16 text-primary animate-bounce" />
            <Sparkles className="w-6 h-6 text-yellow-400 absolute -top-1 -right-1 animate-spin" style={{ animationDuration: "3s" }} />
          </div>
          <span className="border-l-2 border-primary/30 rotate-12 h-12" />
          <TrendingUp className="w-14 h-14 text-emerald-500 animate-pulse" />
          <span className="border-l-2 border-primary/30 -rotate-12 h-12" />
          <Coins className="w-14 h-14 text-primary animate-bounce" style={{ animationDelay: "0.2s" }} />
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-6xl lg:text-8xl font-bold tracking-tighter">
            <span className="bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg">
              VentureCapitalArts
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-primary font-semibold">.com</p>
        </div>
        
        <p className="text-2xl lg:text-3xl !leading-relaxed mx-auto max-w-3xl text-muted-foreground font-light">
          <span className="italic text-foreground">&ldquo;Making a Mockery of Money&rdquo;</span>
        </p>
        
        <p className="text-lg lg:text-xl max-w-2xl mx-auto text-foreground/80 leading-relaxed">
          The most <span className="font-semibold text-primary">absurdly transparent</span> marketplace 
          for buying and selling shares of private companies. 
          <br />
          <span className="text-muted-foreground">For investors, business brokers, and other members of the <span className="italic">capitalist class</span>.</span>
        </p>
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
        <Link 
          href="/biz" 
          className="group px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl font-semibold text-lg hover:shadow-2xl transition-all shadow-lg hover:scale-105 flex items-center gap-2"
        >
          <Zap className="w-5 h-5 group-hover:animate-pulse" />
          Enter the Marketplace
        </Link>
        <Link 
          href="/portfolio" 
          className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold text-lg hover:bg-primary/10 transition-all hover:border-primary/80"
        >
          View Portfolio
        </Link>
      </div>

      <div className="mt-4 text-sm text-muted-foreground">
        A subsidiary of{" "}
        <a 
          href="https://mattyjacks.com" 
          target="_blank" 
          rel="noreferrer"
          className="font-semibold text-primary hover:underline hover:text-primary/80 transition-colors"
        >
          MattyJacks.com
        </a>
      </div>

      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent my-8" />
    </div>
  );
}
