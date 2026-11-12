/** Shown for an instant while a detail page (service, vessel) streams in on client navigation. */
export function DetailPageSkeleton({ label }: { label: string }) {
  return (
    <section className="bg-mist" aria-busy="true" aria-label={`Loading ${label}`}>
      <div className="container-site grid grid-cols-1 items-center gap-10 py-12 md:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div className="motion-safe:animate-pulse">
          <div className="mb-6 h-4 w-40 bg-line" />
          <div className="h-12 w-4/5 bg-line" />
          <div className="mt-6 h-4 w-full bg-line" />
          <div className="mt-3 h-4 w-11/12 bg-line" />
          <div className="mt-3 h-4 w-3/4 bg-line" />
          <div className="mt-10 h-12 w-48 bg-line" />
        </div>
        <div className="aspect-[4/3] bg-line motion-safe:animate-pulse" />
      </div>
    </section>
  );
}
