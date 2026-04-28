"use client";

export function SectionCardSkeleton() {
  return (
    <div
      className="flex flex-col gap-4 p-5 rounded-2xl"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
      }}
    >
      <div className="skeleton w-10 h-10 rounded-xl" />
      <div className="space-y-2">
        <div className="skeleton h-4 w-3/4 rounded-lg" />
        <div className="skeleton h-3 w-full rounded-lg" />
        <div className="skeleton h-3 w-5/6 rounded-lg" />
      </div>
      <div
        className="pt-2 flex items-center justify-between"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="skeleton h-3 w-16 rounded-lg" />
      </div>
    </div>
  );
}

export function FileCardSkeleton() {
  return (
    <div
      className="flex flex-col gap-4 p-5 rounded-2xl"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
      }}
    >
      <div className="flex items-start gap-3">
        <div className="skeleton w-10 h-10 rounded-xl shrink-0" />
        <div className="flex-1 space-y-2">
          <div className="skeleton h-3 w-12 rounded-full" />
          <div className="skeleton h-4 w-4/5 rounded-lg" />
        </div>
      </div>
      <div className="space-y-1.5">
        <div className="skeleton h-3 w-full rounded-lg" />
        <div className="skeleton h-3 w-3/4 rounded-lg" />
      </div>
      <div
        className="pt-3 flex items-center gap-3"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="skeleton h-3 w-10 rounded-lg" />
        <div className="skeleton h-3 w-20 rounded-lg" />
      </div>
    </div>
  );
}
