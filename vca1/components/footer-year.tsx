"use client";

import { useEffect, useState } from "react";

export function FooterYear() {
  const [year, setYear] = useState<string>("2026");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return <>{year}</>;
}
