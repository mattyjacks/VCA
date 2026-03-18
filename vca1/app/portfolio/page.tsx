import { companies } from "@/lib/data/companies";
import { CompanyCard } from "@/components/company-card";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { DollarSign, PieChart } from "lucide-react";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function PortfolioPage() {
  const forSale = companies.filter(c => c.forSale);
  const notForSale = companies.filter(c => !c.forSale);

  return (
    <main className="min-h-screen flex flex-col items-center">
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
              <Link href="/portfolio" className="text-foreground font-medium">
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

      <div className="flex-1 w-full max-w-6xl p-5 pt-12 space-y-12">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <PieChart className="w-10 h-10 text-primary" />
            <h1 className="text-4xl lg:text-5xl font-bold">Portfolio Companies</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The complete MattyJacks.com portfolio. Transparent ownership percentages, 
            because that&apos;s how we roll in this parody of capitalism.
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 space-y-4">
          <h2 className="font-semibold text-lg">Portfolio Summary</h2>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-background rounded-lg">
              <div className="text-3xl font-bold text-primary">{companies.length}</div>
              <div className="text-sm text-muted-foreground">Total Companies</div>
            </div>
            <div className="p-4 bg-background rounded-lg">
              <div className="text-3xl font-bold text-emerald-500">{forSale.length}</div>
              <div className="text-sm text-muted-foreground">Available for Investment</div>
            </div>
            <div className="p-4 bg-background rounded-lg">
              <div className="text-3xl font-bold text-red-500">{notForSale.length}</div>
              <div className="text-sm text-muted-foreground">Not For Sale</div>
            </div>
          </div>
        </div>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="w-3 h-3 bg-emerald-500 rounded-full" />
            Available for Investment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {forSale.map((company) => (
              <CompanyCard key={company.domain} company={company} />
            ))}
          </div>
        </section>

        {notForSale.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              Not For Sale
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {notForSale.map((company) => (
                <CompanyCard key={company.domain} company={company} />
              ))}
            </div>
          </section>
        )}

        <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold">Interested in Investing?</h2>
          <p className="text-muted-foreground">
            Contact us through GiveGigs or reach out directly to MattyJacks.com
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/biz" 
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
            >
              Login to /biz/
            </Link>
            <a 
              href="https://mattyjacks.com" 
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all"
            >
              Contact MattyJacks
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
