import { Hero } from "@/components/hero";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { CompanyCard } from "@/components/company-card";
import { Footer } from "@/components/footer";
import { companies } from "@/lib/data/companies";
import Link from "next/link";
import { DollarSign, Briefcase, ShoppingCart, Users } from "lucide-react";

export default function Home() {
  const featuredCompanies = companies.filter(c => c.forSale).slice(0, 4);

  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col items-center">
        <nav className="w-full flex justify-center border-b border-primary/20 h-16 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="w-full max-w-6xl flex justify-between items-center p-3 px-5 text-sm">
            <div className="flex gap-5 items-center">
              <Link href="/" className="font-bold text-lg flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-primary" />
                <span className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  VCA
                </span>
              </Link>
              <div className="hidden md:flex items-center gap-4 ml-8">
                <Link href="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                  Portfolio
                </Link>
                <Link href="/saas" className="text-muted-foreground hover:text-foreground transition-colors">
                  SAAS Templates
                </Link>
                <Link href="/biz" className="text-muted-foreground hover:text-foreground transition-colors">
                  /biz/
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ThemeSwitcher />
              <Link 
                href="/biz" 
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium text-sm hover:bg-primary/90 transition-all"
              >
                Login via GiveGigs
              </Link>
            </div>
          </div>
        </nav>

        <div className="flex-1 flex flex-col gap-16 max-w-6xl p-5 pt-12">
          <Hero />

          <section className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">Why Invest with Us?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Because we&apos;re refreshingly honest about the absurdity of it all.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group relative overflow-hidden p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative space-y-3">
                  <Briefcase className="w-10 h-10 text-primary" />
                  <h3 className="font-bold text-lg">Transparent Ownership</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">We tell you exactly what percentage we own. No hidden stakes.</p>
                </div>
              </div>
              <div className="group relative overflow-hidden p-6 rounded-2xl bg-card border border-border hover:border-emerald-500/50 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative space-y-3">
                  <ShoppingCart className="w-10 h-10 text-emerald-500" />
                  <h3 className="font-bold text-lg">Everything For Sale</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Almost everything is available. We&apos;re capitalists, after all.</p>
                </div>
              </div>
              <div className="group relative overflow-hidden p-6 rounded-2xl bg-card border border-border hover:border-blue-500/50 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative space-y-3">
                  <Users className="w-10 h-10 text-blue-500" />
                  <h3 className="font-bold text-lg">4.20% Revenue Share</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Creators 50%, Charity 20%, Affiliates 10%, MattyJacks 20%.</p>
                </div>
              </div>
              <div className="group relative overflow-hidden p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative space-y-3">
                  <DollarSign className="w-10 h-10 text-primary" />
                  <h3 className="font-bold text-lg">Parody Premium</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Making money while making fun of making money.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold">Featured Investments</h2>
                <p className="text-muted-foreground mt-2">Handpicked opportunities from our portfolio</p>
              </div>
              <Link href="/portfolio" className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all whitespace-nowrap">
                View All Companies →
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {featuredCompanies.map((company) => (
                <CompanyCard key={company.domain} company={company} />
              ))}
            </div>
          </section>

          <section className="relative overflow-hidden rounded-3xl p-8 lg:p-16 text-center space-y-8">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-2xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
            
            <div className="relative space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">Ready to Make a Mockery of Money?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Browse our SAAS templates, invest in our portfolio companies, or just enjoy the satirical capitalism.
              </p>
            </div>
            
            <div className="relative flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
              <Link 
                href="/saas" 
                className="px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl font-semibold hover:shadow-2xl transition-all hover:scale-105"
              >
                Browse SAAS Templates
              </Link>
              <Link 
                href="https://mattyjacks.com" 
                target="_blank"
                className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/10 transition-all"
              >
                Contact MattyJacks
              </Link>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </main>
  );
}
