import Link from "next/link";
import { DollarSign, ArrowLeft } from "lucide-react";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <nav className="w-full flex justify-center border-b border-primary/20 h-16 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="w-full max-w-6xl flex justify-between items-center p-3 px-5 text-sm">
          <Link href="/" className="font-bold text-lg flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-primary" />
            <span className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              VCA
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
          </div>
        </div>
      </nav>

      <div className="w-full max-w-4xl p-5 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <article className="prose prose-invert max-w-none space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">
              Last Updated: March 18, 2026
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              VentureCapitalArts.com ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This Privacy Policy complies with the laws of the State of New Hampshire, USA, and applies to all users of VentureCapitalArts.com, including visitors, registered users, and business partners.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">2. Information We Collect</h2>
            
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">2.1 Information You Provide Directly</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Account registration information (name, email, company details)</li>
                <li>Profile information and preferences</li>
                <li>Communication content (messages, inquiries, support requests)</li>
                <li>Payment and billing information (processed securely through third parties)</li>
                <li>Investment preferences and portfolio interests</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">2.2 Information Collected Automatically</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on site</li>
                <li>Referral source and navigation patterns</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">2.3 Third-Party Service Providers</h3>
              <p className="text-muted-foreground">
                We use the following services that may collect and process your data:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Vercel</strong>: Hosting and deployment platform</li>
                <li><strong>Cloudflare</strong>: Content delivery network and DDoS protection</li>
                <li><strong>Supabase</strong>: Database and authentication services</li>
                <li><strong>Brevo</strong>: Email marketing and communication platform</li>
                <li><strong>GiveGigs.com</strong>: Authentication and identity verification</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>To provide, maintain, and improve our services</li>
              <li>To process transactions and send related information</li>
              <li>To send promotional communications (with your consent)</li>
              <li>To respond to your inquiries and support requests</li>
              <li>To analyze usage patterns and optimize user experience</li>
              <li>To comply with legal obligations</li>
              <li>To prevent fraud and enhance security</li>
              <li>To facilitate investment opportunities and marketplace transactions</li>
              <li>To calculate and distribute revenue shares and dividends</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">4. Data Sharing and Disclosure</h2>
            
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">4.1 Service Providers</h3>
              <p className="text-muted-foreground">
                We share your information with third-party service providers who assist us in operating our website and conducting our business. These providers are contractually obligated to maintain the confidentiality and security of your information.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">4.2 Legal Requirements</h3>
              <p className="text-muted-foreground">
                We may disclose your information when required by law, court order, or government request, or when we believe in good faith that disclosure is necessary to protect our rights, your safety, or the safety of others.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">4.3 Business Transfers</h3>
              <p className="text-muted-foreground">
                If VentureCapitalArts.com is involved in a merger, acquisition, bankruptcy, or sale of assets, your information may be transferred as part of that transaction. We will provide notice before your information becomes subject to a different privacy policy.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">4.4 Marketplace Transparency</h3>
              <p className="text-muted-foreground">
                As part of our commitment to transparency, certain information about investments and transactions may be displayed on our marketplace. We will not share personal contact information without your explicit consent.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">5. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security measures include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Encryption of data in transit (SSL/TLS)</li>
              <li>Secure authentication through GiveGigs.com and Supabase</li>
              <li>Regular security audits and updates</li>
              <li>Cloudflare DDoS protection and security features</li>
              <li>Access controls and role-based permissions</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              However, no method of transmission over the Internet or electronic storage is completely secure. We cannot guarantee absolute security of your information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">6. Your Privacy Rights (New Hampshire)</h2>
            <p className="text-muted-foreground leading-relaxed">
              Under New Hampshire law and applicable privacy regulations, you have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (subject to legal retention requirements)</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your data in a portable format</li>
              <li>Lodge a complaint with relevant authorities</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              To exercise these rights, please contact us at privacy@mattyjacks.com with your request and verification of identity.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">7. Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser preferences. Note that disabling cookies may limit functionality of our services.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cloudflare may use cookies for security and performance optimization. Vercel uses cookies for analytics and deployment tracking.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">8. Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">9. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              VentureCapitalArts.com is not intended for children under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete such information promptly.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">10. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. Retention periods may vary based on legal requirements, business needs, and the nature of the data.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For investment and transaction data, we maintain records as required by applicable financial regulations and tax laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">11. International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your information may be transferred to, stored in, and processed in countries other than your country of residence. These countries may have data protection laws that differ from your home country. By using VentureCapitalArts.com, you consent to such transfers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">12. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal requirements, and other factors. We will notify you of material changes by updating the "Last Updated" date and, where appropriate, by providing additional notice.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">13. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-card border border-border rounded-lg p-6 space-y-2 text-muted-foreground">
              <p><strong>VentureCapitalArts.com</strong></p>
              <p>Email: privacy@mattyjacks.com</p>
              <p>Website: <a href="https://mattyjacks.com" className="text-primary hover:underline">mattyjacks.com</a></p>
              <p>Parent Company: MattyJacks.com</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">14. Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              This Privacy Policy is provided for informational purposes. VentureCapitalArts.com is a satirical marketplace. While we take privacy seriously, users should consult with legal professionals regarding their specific privacy concerns and regulatory compliance.
            </p>
          </section>
        </article>

        <div className="mt-12 pt-8 border-t border-border">
          <Link href="/terms" className="text-primary hover:underline font-semibold">
            Read our Terms of Service →
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
