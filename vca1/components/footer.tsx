import Link from "next/link";
import { DollarSign } from "lucide-react";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { FooterYear } from "@/components/footer-year";

export function Footer() {
  return (
    <footer className="w-full border-t border-primary/20">
      <div className="max-w-6xl mx-auto py-16 px-5">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-primary" />
              VentureCapitalArts
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Making a mockery of money since we registered this domain.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Parent Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://mattyjacks.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">MattyJacks.com</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Main Subsidiaries</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://cryptartist.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">CryptArtist.com</a></li>
              <li><a href="https://vibecodeworker.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">VibeCodeWorker.com</a></li>
              <li><a href="https://givegigs.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">GiveGigs.com</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary/20 pt-8 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © <FooterYear /> MattyJacks.com — All Rights Reserved
            </p>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
}
