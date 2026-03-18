import { Company } from "@/lib/data/companies";
import { ExternalLink, TrendingUp, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";

interface CompanyCardProps {
  company: Company;
}

export function CompanyCard({ company }: CompanyCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-2xl hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative p-6 space-y-4">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
              {company.name}
            </h3>
            <a 
              href={`https://${company.domain}`} 
              target="_blank" 
              rel="noreferrer"
              className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1 w-fit"
            >
              {company.domain}
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div>
            {company.forSale ? (
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/30">
                For Sale
              </span>
            ) : (
              <span className="px-3 py-1 bg-red-500/20 text-red-600 dark:text-red-400 text-xs font-bold rounded-full border border-red-500/30">
                Held
              </span>
            )}
          </div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {company.description}
        </p>

        <div className="space-y-2 pt-2">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-sm font-semibold">{company.equity}</span>
          </div>

          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <span className="text-xs text-muted-foreground">{company.category}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {company.highlights.map((highlight, index) => (
            <span 
              key={index}
              className="px-2.5 py-1 bg-primary/15 text-primary text-xs font-medium rounded-lg border border-primary/20"
            >
              {highlight}
            </span>
          ))}
        </div>

        {company.forSale && (
          <div className="mt-4 pt-4 border-t border-border/50">
            <Link 
              href="/biz"
              className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:gap-3 transition-all group/link"
            >
              Inquire now
              <ArrowRight className="w-4 h-4 animate-wiggle" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
