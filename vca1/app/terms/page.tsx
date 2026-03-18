import Link from "next/link";
import { DollarSign, ArrowLeft } from "lucide-react";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Footer } from "@/components/footer";

export default function TermsPage() {
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
            <h1 className="text-4xl lg:text-5xl font-bold">Terms of Service</h1>
            <p className="text-lg text-muted-foreground">
              Last Updated: March 18, 2026
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using VentureCapitalArts.com ("Website," "Service," or "Platform"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to abide by the above, please do not use this service.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              These Terms are governed by the laws of the State of New Hampshire, USA, and apply to all users, including visitors, registered users, investors, and business partners.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">2. Use License</h2>
            <p className="text-muted-foreground leading-relaxed">
              Permission is granted to temporarily download one copy of the materials (information or software) on VentureCapitalArts.com for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the Website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Website</li>
              <li>Obtain or attempt to obtain any materials or information through any means not intentionally made available</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">3. Disclaimer of Warranties</h2>
            <p className="text-muted-foreground leading-relaxed">
              The materials on VentureCapitalArts.com are provided on an 'as is' basis. VentureCapitalArts.com makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Further, VentureCapitalArts.com does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Website or otherwise relating to such materials or on any sites linked to this site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">4. Limitations of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              In no event shall VentureCapitalArts.com or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on VentureCapitalArts.com, even if VentureCapitalArts.com or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">5. Accuracy of Materials</h2>
            <p className="text-muted-foreground leading-relaxed">
              The materials appearing on VentureCapitalArts.com could include technical, typographical, or photographic errors. VentureCapitalArts.com does not warrant that any of the materials on its Website are accurate, complete, or current. VentureCapitalArts.com may make changes to the materials contained on its Website at any time without notice.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">6. Materials and Content</h2>
            <p className="text-muted-foreground leading-relaxed">
              VentureCapitalArts.com has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by VentureCapitalArts.com of the site. Use of any such linked website is at the user's own risk.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If you believe that your work has been copied in a way that constitutes copyright infringement, please provide written notice to privacy@mattyjacks.com with details of the infringement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">7. Modifications to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              VentureCapitalArts.com may revise these terms of service for its Website at any time without notice. By using this Website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">8. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of the State of New Hampshire, USA, and you irrevocably submit to the exclusive jurisdiction of the courts located in New Hampshire.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">9. User Accounts and Responsibilities</h2>
            
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">9.1 Account Registration</h3>
              <p className="text-muted-foreground">
                To access certain features of VentureCapitalArts.com, you may be required to register for an account through GiveGigs.com. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">9.2 User Conduct</h3>
              <p className="text-muted-foreground">
                You agree not to use VentureCapitalArts.com for any unlawful purpose or in any way that violates these Terms. Prohibited conduct includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Harassment, abuse, or threatening behavior toward other users</li>
                <li>Posting false, misleading, or fraudulent information</li>
                <li>Attempting to gain unauthorized access to systems or data</li>
                <li>Engaging in market manipulation or securities fraud</li>
                <li>Violating intellectual property rights</li>
                <li>Spam or unsolicited communications</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">9.3 Account Termination</h3>
              <p className="text-muted-foreground">
                VentureCapitalArts.com reserves the right to suspend or terminate your account at any time for violation of these Terms or for any other reason at our sole discretion.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">10. Investment Disclaimers</h2>
            <p className="text-muted-foreground leading-relaxed">
              <strong>IMPORTANT:</strong> VentureCapitalArts.com is a satirical marketplace. While we provide information about investment opportunities, we are not a licensed investment advisor, broker, or dealer. Nothing on this Website should be construed as investment advice.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>All investments carry risk, including potential loss of principal</li>
              <li>Past performance does not guarantee future results</li>
              <li>You should conduct your own due diligence before making any investment decisions</li>
              <li>Consult with qualified financial and legal advisors before investing</li>
              <li>VentureCapitalArts.com does not guarantee returns or outcomes</li>
              <li>Revenue sharing and dividend terms are subject to company performance and applicable laws</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">11. Revenue Share and Dividend Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              When you purchase source code, templates, or invest through VentureCapitalArts.com, you agree to the revenue sharing terms outlined at the time of purchase:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>4.20% of revenue is shared among creators (50%), charity (20%), affiliates (10%), and MattyJacks (20%)</li>
              <li>Charity recipients must be rated 3+ stars on CharityNavigator.org</li>
              <li>Revenue sharing is perpetual unless otherwise agreed in writing</li>
              <li>Payments are made according to the terms specified in your purchase agreement</li>
              <li>If revenue is not the primary compensation method, equivalent payment structures must be agreed upon</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">12. Intellectual Property Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on VentureCapitalArts.com, including text, graphics, logos, images, and software, is the property of VentureCapitalArts.com or its content suppliers and is protected by international copyright laws.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When you purchase source code or templates, you receive a license to use the materials according to the terms of your purchase agreement. You do not own the intellectual property; you are granted limited usage rights.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">13. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              VentureCapitalArts.com uses the following third-party services. Your use of these services is subject to their respective terms:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Vercel</strong>: Hosting and deployment (vercel.com/terms)</li>
              <li><strong>Cloudflare</strong>: CDN and security (cloudflare.com/terms)</li>
              <li><strong>Supabase</strong>: Database and authentication (supabase.com/terms)</li>
              <li><strong>Brevo</strong>: Email services (brevo.com/terms)</li>
              <li><strong>GiveGigs.com</strong>: Authentication and identity verification</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We are not responsible for the practices or policies of these third-party services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">14. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the fullest extent permitted by New Hampshire law, in no event shall VentureCapitalArts.com, its officers, directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Website or services, even if we have been advised of the possibility of such damages.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">15. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to indemnify, defend, and hold harmless VentureCapitalArts.com and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including attorney's fees) arising from your use of the Website, your violation of these Terms, or your infringement of any intellectual property or other rights.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">16. Dispute Resolution</h2>
            <p className="text-muted-foreground leading-relaxed">
              Any disputes arising from these Terms or your use of VentureCapitalArts.com shall be resolved in accordance with New Hampshire law. You agree to submit to the exclusive jurisdiction of the state and federal courts located in New Hampshire.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">17. Severability</h2>
            <p className="text-muted-foreground leading-relaxed">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">18. Entire Agreement</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms, along with our Privacy Policy, constitute the entire agreement between you and VentureCapitalArts.com regarding your use of the Website and supersede all prior agreements and understandings.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">19. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-card border border-border rounded-lg p-6 space-y-2 text-muted-foreground">
              <p><strong>VentureCapitalArts.com</strong></p>
              <p>Email: legal@mattyjacks.com</p>
              <p>Website: <a href="https://mattyjacks.com" className="text-primary hover:underline">mattyjacks.com</a></p>
              <p>Parent Company: MattyJacks.com</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">20. Acknowledgment</h2>
            <p className="text-muted-foreground leading-relaxed">
              By using VentureCapitalArts.com, you acknowledge that you have read these Terms of Service, understand them, and agree to be bound by them. If you do not agree with any part of these Terms, please do not use this Website.
            </p>
          </section>
        </article>

        <div className="mt-12 pt-8 border-t border-border">
          <Link href="/privacy" className="text-primary hover:underline font-semibold">
            Read our Privacy Policy →
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
