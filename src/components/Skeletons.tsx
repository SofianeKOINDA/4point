/* Skeletons de navigation — affichés pendant le chargement d'une page
   (utile sur connexion lente). Composants statiques, sans hooks. */

export function Box({ className = "" }: { className?: string }) {
  return <span aria-hidden className={`skeleton block ${className}`} />;
}

/** Skeleton générique d'une sous-page (header PageShell + hero + liste). */
export function PageSkeleton({ hero = true }: { hero?: boolean }) {
  return (
    <main className="mx-auto w-full max-w-lg pb-28" aria-busy="true">
      <header className="px-5 pb-4 pt-6">
        <div className="mb-4 flex items-center justify-between">
          <Box className="h-5 w-16 rounded-full" />
          <Box className="h-8 w-16 rounded-full" />
        </div>
        <Box className="h-9 w-2/3 rounded-xl" />
        <Box className="mt-3 h-4 w-5/6 rounded-lg" />
      </header>
      <div className="space-y-6 px-5">
        {hero ? <Box className="h-52 w-full rounded-[28px]" /> : null}
        <div className="space-y-3">
          <Box className="h-24 w-full rounded-[24px]" />
          <Box className="h-24 w-full rounded-[24px]" />
          <Box className="h-24 w-full rounded-[24px]" />
        </div>
      </div>
    </main>
  );
}

/** Rangée façon carrousel horizontal. */
function CardRow({ wide = false }: { wide?: boolean }) {
  return (
    <div className="flex gap-3 overflow-hidden px-5">
      {[0, 1, 2].map((i) => (
        <Box
          key={i}
          className={
            wide
              ? "h-44 w-[78vw] max-w-[320px] shrink-0 rounded-[24px]"
              : "h-[280px] w-[46vw] max-w-[200px] shrink-0 rounded-[24px]"
          }
        />
      ))}
    </div>
  );
}

/** Skeleton de l'accueil (logo, hero, accès rapides, rangées). */
export function HomeSkeleton() {
  return (
    <main className="mx-auto w-full max-w-lg pb-28" aria-busy="true">
      <header className="flex items-start justify-between gap-3 px-5 pb-4 pt-6">
        <div className="min-w-0">
          <Box className="h-12 w-40 rounded-xl" />
          <Box className="mt-2 h-4 w-48 rounded-lg" />
        </div>
        <div className="flex flex-col items-end gap-2">
          <Box className="h-8 w-16 rounded-full" />
          <Box className="h-11 w-11 rounded-full" />
        </div>
      </header>

      <div className="space-y-7">
        <div className="px-5 pt-2">
          <Box className="h-6 w-28 rounded-lg" />
          <Box className="mt-3 aspect-[3/4] w-full rounded-[28px]" />
        </div>

        <div className="px-5">
          <Box className="mb-4 h-6 w-32 rounded-lg" />
          <div className="grid grid-cols-4 gap-3">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <Box className="h-[62px] w-[62px] rounded-full" />
                <Box className="h-3 w-12 rounded" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <Box className="mb-3 ml-5 h-6 w-28 rounded-lg" />
          <CardRow wide />
        </div>
        <div>
          <Box className="mb-3 ml-5 h-6 w-24 rounded-lg" />
          <CardRow />
        </div>
      </div>
    </main>
  );
}
