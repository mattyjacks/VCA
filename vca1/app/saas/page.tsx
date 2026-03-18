import { saasTemplates } from "@/lib/data/companies";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { DollarSign, Code, Github, ExternalLink, Heart, Users, Percent } from "lucide-react";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function SaasPage() {
  const template = saasTemplates[0]; // ProperlyTrade

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
              <Link href="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                Portfolio
              </Link>
              <Link href="/saas" className="text-foreground font-medium">
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
            <Code className="w-10 h-10 text-primary" />
            <h1 className="text-4xl lg:text-5xl font-bold">SAAS Templates</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium source code access from <span className="font-semibold text-primary">CryptArtist.com</span> & <span className="font-semibold text-primary">VibeCodeWorker.com</span>
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 p-8 text-center">
            <h2 className="text-3xl font-bold mb-2">{template.name}</h2>
            <p className="text-lg text-muted-foreground">{template.description}</p>
            <a 
              href={template.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-primary hover:underline"
            >
              <Github className="w-5 h-5" />
              View on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="p-8 space-y-8">
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 space-y-4">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Percent className="w-5 h-5 text-amber-500" />
                Platform Revenue Share: <span className="text-primary">4.20%</span>
              </h3>
              <p className="text-muted-foreground">{template.revenueTerms.description}</p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                <div className="bg-background rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-500">{template.revenueTerms.creators}</div>
                  <div className="text-xs text-muted-foreground mb-1">({template.revenueTerms.breakdown.creators})</div>
                  <div className="text-sm text-muted-foreground">To Creators</div>
                </div>
                <div className="bg-background rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Heart className="w-5 h-5 text-red-500" />
                    <span className="text-2xl font-bold text-red-500">{template.revenueTerms.charity}</span>
                  </div>
                  <div className="text-xs text-muted-foreground mb-1">({template.revenueTerms.breakdown.charity})</div>
                  <div className="text-sm text-muted-foreground">To Charity (3+ stars)</div>
                </div>
                <div className="bg-background rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Users className="w-5 h-5 text-blue-500" />
                    <span className="text-2xl font-bold text-blue-500">{template.revenueTerms.affiliates}</span>
                  </div>
                  <div className="text-xs text-muted-foreground mb-1">({template.revenueTerms.breakdown.affiliates})</div>
                  <div className="text-sm text-muted-foreground">To Affiliates</div>
                </div>
                <div className="bg-background rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary">{template.revenueTerms.mattyjacks}</div>
                  <div className="text-xs text-muted-foreground mb-1">({template.revenueTerms.breakdown.mattyjacks})</div>
                  <div className="text-sm text-muted-foreground">To MattyJacks</div>
                </div>
              </div>
              
              <p className="text-sm text-amber-600 dark:text-amber-400 italic">
                {template.revenueTerms.alternativeNote}
              </p>
            </div>

            <h3 className="font-bold text-xl">Pricing Tiers</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-semibold">Cost</th>
                    <th className="text-left p-4 font-semibold">Matt&apos;s Time</th>
                    <th className="text-left p-4 font-semibold">Freelancer Time</th>
                    <th className="text-left p-4 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {template.pricingTiers.map((tier, index) => (
                    <tr 
                      key={index} 
                      className={`border-b border-border hover:bg-primary/5 transition-colors ${
                        tier.domainIncluded ? 'bg-primary/10' : ''
                      }`}
                    >
                      <td className="p-4">
                        <span className="text-xl font-bold text-primary">{tier.cost}</span>
                      </td>
                      <td className="p-4 text-muted-foreground">{tier.mattHours}</td>
                      <td className="p-4 text-muted-foreground">{tier.freelancerHours}</td>
                      <td className="p-4">
                        <span className={`text-sm ${tier.domainIncluded ? 'text-emerald-600 dark:text-emerald-400 font-medium' : 'text-muted-foreground'}`}>
                          {tier.note || 'Standard support'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-muted/50 rounded-xl p-6 space-y-3">
              <h4 className="font-semibold">Notes on Freelancer Hours:</h4>
              <p className="text-sm text-muted-foreground">
                More expert freelancers may cost more hour credits per hour, but most freelancers cost 1 hour credit per hour.
                Matt&apos;s hours are valued at a premium rate due to direct project knowledge and expertise.
              </p>
            </div>
          </div>
        </div>

        <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 text-center space-y-6">
          <h2 className="text-2xl font-bold">Ready to Purchase?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Contact us through the business portal or reach out directly. 
            The person who presented this offer can connect you with Matt.
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
          <p className="text-sm text-muted-foreground">
            Thank you for your valuable time!
          </p>
        </section>
      </div>

      <Footer />
    </main>
  );
}
