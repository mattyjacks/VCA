"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  DollarSign,
  ExternalLink,
  LogIn,
  ArrowRight,
  Shield,
  ShieldCheck,
  ShieldX,
  Database,
  Network,
} from "lucide-react";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Footer } from "@/components/footer";

type BizControlPlaneApp = {
  id: string;
  name: string;
  url: string;
};

type BizControlPlanePayload = {
  database: {
    authorityAppId: string;
  };
  user: {
    accessMode: string;
    canControlEcosystem: boolean;
  };
  apps?: BizControlPlaneApp[];
};

type BizEcosystemAppsPayload = {
  apps?: BizControlPlaneApp[];
};

export default function BizPage() {
  const [countdown, setCountdown] = useState(5);
  const [autoRedirect, setAutoRedirect] = useState(true);
  const [controlPlane, setControlPlane] = useState<BizControlPlanePayload | null>(null);
  const [controlPlaneLoading, setControlPlaneLoading] = useState(true);
  const [controlPlaneError, setControlPlaneError] = useState<string | null>(null);
  const [ecosystemApps, setEcosystemApps] = useState<BizControlPlaneApp[]>([]);

  useEffect(() => {
    if (!autoRedirect) return;
    
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      window.location.href = "https://givegigs.com/login";
    }
  }, [countdown, autoRedirect]);

  useEffect(() => {
    let cancelled = false;

    const loadControlPlane = async () => {
      try {
        setControlPlaneLoading(true);
        setControlPlaneError(null);

        const response = await fetch("/api/givegigs/control-plane?app=venturecapitalarts", {
          method: "GET",
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Control plane request failed");
        }

        const payload = (await response.json()) as BizControlPlanePayload;
        if (!cancelled) {
          setControlPlane(payload);
          setEcosystemApps(Array.isArray(payload.apps) ? payload.apps : []);
        }
      } catch {
        if (!cancelled) {
          setControlPlane(null);
          setControlPlaneError("Could not load GiveGigs control-plane status.");

          try {
            const fallbackResponse = await fetch("/api/givegigs/apps", {
              method: "GET",
              cache: "no-store",
            });

            if (fallbackResponse.ok) {
              const fallbackPayload = (await fallbackResponse.json()) as BizEcosystemAppsPayload;
              setEcosystemApps(Array.isArray(fallbackPayload.apps) ? fallbackPayload.apps : []);
            }
          } catch {
            setEcosystemApps([]);
          }
        }
      } finally {
        if (!cancelled) {
          setControlPlaneLoading(false);
        }
      }
    };

    void loadControlPlane();

    return () => {
      cancelled = true;
    };
  }, []);

  const handleStopRedirect = () => {
    setAutoRedirect(false);
  };

  return (
    <main className="min-h-screen flex flex-col items-center">
      <nav className="w-full flex justify-center border-b border-primary/20 h-16 bg-card/50 backdrop-blur-sm">
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

      <div className="flex-1 flex flex-col items-center justify-center p-8 max-w-2xl mx-auto text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold">/biz/ — Business Portal</h1>
            <p className="text-xl text-muted-foreground">
              Authentication powered by <span className="font-semibold text-primary">GiveGigs.com</span>
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 space-y-6">
            <div className="space-y-2">
              <p className="text-lg">
                VentureCapitalArts.com uses <strong>GiveGigs.com</strong> for secure authentication.
              </p>
              <p className="text-muted-foreground">
                You&apos;ll be redirected to GiveGigs.com to log in, then returned here with access to the business portal.
              </p>
            </div>

            <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 text-left space-y-2">
              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="inline-flex items-center gap-1 font-semibold text-foreground">
                  <Network className="w-4 h-4 text-primary" />
                  Ecosystem Control Status
                </span>
                {controlPlaneLoading ? (
                  <span className="text-muted-foreground">Checking...</span>
                ) : controlPlane ? (
                  <span className="inline-flex items-center gap-1 text-emerald-500 font-medium">
                    <ShieldCheck className="w-4 h-4" />
                    Connected
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-destructive font-medium">
                    <ShieldX className="w-4 h-4" />
                    Offline
                  </span>
                )}
              </div>

              {controlPlaneError ? (
                <p className="text-xs text-destructive">{controlPlaneError}</p>
              ) : null}

              {controlPlane ? (
                <div className="flex flex-col gap-1 text-xs text-muted-foreground">
                  <p className="inline-flex items-center gap-1">
                    <Database className="w-3.5 h-3.5" />
                    Shared database authority: {controlPlane.database.authorityAppId}
                  </p>
                  <p>
                    Identity mode: <span className="font-medium text-foreground">{controlPlane.user.accessMode}</span>
                  </p>
                  <p>
                    Ecosystem admin: <span className="font-medium text-foreground">{controlPlane.user.canControlEcosystem ? "granted" : "not granted"}</span>
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {(controlPlane.apps ?? ecosystemApps).map((app) => (
                      <a
                        key={app.id}
                        href={app.url}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-primary/20 px-2 py-0.5 text-[11px] text-primary hover:bg-primary/10"
                      >
                        {app.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            {autoRedirect ? (
              <div className="space-y-4">
                <div className="text-3xl font-bold text-primary">
                  Redirecting in {countdown}...
                </div>
                <button
                  onClick={handleStopRedirect}
                  className="text-sm text-muted-foreground hover:text-foreground underline"
                >
                  Cancel auto-redirect
                </button>
              </div>
            ) : (
              <div className="text-muted-foreground">
                Auto-redirect cancelled.
              </div>
            )}

            <div className="flex flex-col gap-4">
              <a
                href="https://givegigs.com/login"
                className="flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all"
              >
                <LogIn className="w-5 h-5" />
                Login with GiveGigs
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <a
                href="https://givegigs.com/signup"
                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all"
              >
                Create a GiveGigs Account
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-4 text-sm text-muted-foreground">
            <h3 className="font-semibold text-foreground">Why GiveGigs?</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                GiveGigs is 96.8% owned by MattyJacks.com (our parent company)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Single sign-on across the entire VCA ecosystem
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Freelance marketplace integration for deal-making
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Secure, transparent, and absurdly capitalist
              </li>
            </ul>
          </div>

          <Link 
            href="/"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            ← Back to VentureCapitalArts.com
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
