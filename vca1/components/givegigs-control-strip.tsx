import Link from "next/link";
import { ShieldCheck, ShieldX, Database, Network } from "lucide-react";
import { EcosystemAppId, fetchControlPlane, fetchEcosystemApps } from "@/lib/givegigs-control-plane";

export async function GiveGigsControlStrip({
  app = "venturecapitalarts",
}: {
  app?: EcosystemAppId;
}) {
  const [payload, appsPayload] = await Promise.all([
    fetchControlPlane({ app }),
    fetchEcosystemApps(),
  ]);

  const effectiveApps = payload?.apps ?? appsPayload?.apps ?? [];
  const controlledCount = effectiveApps.filter((item) => item.controlledByGiveGigs).length;

  if (!payload && !appsPayload) {
    return (
      <div className="w-full border-b border-destructive/20 bg-destructive/5">
        <div className="mx-auto max-w-6xl px-5 py-2 text-xs sm:text-sm text-destructive">
          GiveGigs control plane is currently unreachable. Ecosystem sync is degraded.
        </div>
      </div>
    );
  }

  const isAdmin = payload?.user.canControlEcosystem ?? false;
  const accessMode = payload?.user.accessMode ?? "registry-only";
  const adminUrl = payload?.admin.url ?? appsPayload?.authority.adminUrl ?? "https://givegigs.com/mod";

  return (
    <div className="w-full border-b border-primary/20 bg-card/50">
      <div className="mx-auto max-w-6xl px-5 py-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm">
        <div className="flex items-center gap-3 text-muted-foreground">
          <span className="inline-flex items-center gap-1 text-foreground font-medium">
            <Network className="w-3.5 h-3.5" />
            GiveGigs Control Plane
          </span>
          <span className="inline-flex items-center gap-1">
            <Database className="w-3.5 h-3.5" />
            Shared DB: {payload?.database.provider ?? "postgresql"}
          </span>
          <span>{controlledCount} apps integrated</span>
          <span className="hidden md:inline">Mode: {accessMode}</span>
        </div>

        <div className="flex items-center gap-3">
          <span
            className={`inline-flex items-center gap-1 font-medium ${
              isAdmin ? "text-emerald-500" : "text-amber-500"
            }`}
          >
            {isAdmin ? (
              <ShieldCheck className="w-3.5 h-3.5" />
            ) : (
              <ShieldX className="w-3.5 h-3.5" />
            )}
            {isAdmin ? "Admin Access" : "Standard Access"}
          </span>

          <Link href="/biz" className="text-primary hover:underline">
            /biz
          </Link>
          <a
            href={adminUrl}
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline"
          >
            GiveGigs Admin
          </a>
        </div>
      </div>
    </div>
  );
}
