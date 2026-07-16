import { Container } from "@/components/atoms/Container";
import { Skeleton } from "@/components/atoms/Skeleton";

/**
 * Route-level loading UI. Next.js shows this instantly (as a Suspense fallback)
 * while the page streams - a full skeleton of the above-the-fold layout.
 */
export default function Loading() {
  return (
    <div className="min-h-screen">
      <div className="flex h-16 items-center justify-between px-5 sm:px-6 lg:px-8">
        <Skeleton className="h-9 w-40" />
        <Skeleton className="hidden h-6 w-72 lg:block" />
        <Skeleton className="h-9 w-40 rounded-full" />
      </div>

      <Container className="grid items-center gap-12 pt-16 lg:grid-cols-2 lg:pt-24">
        <div className="space-y-5">
          <Skeleton className="h-7 w-56 rounded-full" />
          <Skeleton className="h-16 w-4/5" />
          <Skeleton className="h-16 w-3/5" />
          <Skeleton className="h-4 w-full max-w-md" />
          <div className="flex gap-3 pt-2">
            <Skeleton className="h-12 w-36 rounded-full" />
            <Skeleton className="h-12 w-44 rounded-full" />
          </div>
        </div>
        <Skeleton className="mx-auto aspect-square w-full max-w-[440px] rounded-[2.25rem]" />
      </Container>
    </div>
  );
}
