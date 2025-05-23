"use client";

import React from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-start px-4 py-8">
      {children}
    </main>
  );
}
