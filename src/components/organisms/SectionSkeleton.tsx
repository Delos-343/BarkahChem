import { Container } from "@/components/atoms/Container";
import { Skeleton } from "@/components/atoms/Skeleton";

function HeadingSkeleton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Skeleton className="h-7 w-44 rounded-full" />
      <Skeleton className="h-10 w-[22rem] max-w-full" />
      <Skeleton className="h-4 w-[28rem] max-w-full" />
    </div>
  );
}

function CardSkeleton() {
  return (
    <div className="rounded-2xl glass p-6">
      <Skeleton className="h-12 w-12 rounded-xl" />
      <Skeleton className="mt-4 h-5 w-2/3" />
      <Skeleton className="mt-2 h-4 w-full" />
      <Skeleton className="mt-1.5 h-4 w-4/5" />
    </div>
  );
}

/** Fallback while the product detail chunk loads. */
export function ProductShowcaseSkeleton() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <HeadingSkeleton />
        <div className="mt-16 grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <Skeleton className="aspect-[4/5] max-h-[460px] w-full rounded-[2rem]" />
          <div className="space-y-3">
            <Skeleton className="mb-6 h-9 w-56" />
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-20 w-full rounded-2xl" />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Fallback while the how-to-order chunk loads. */
export function HowToOrderSkeleton() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <HeadingSkeleton />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-44 w-full rounded-2xl" />
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Fallback while the why-choose-us chunk loads. */
export function WhyChooseUsSkeleton() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <HeadingSkeleton />
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-28 w-full rounded-2xl" />
          ))}
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Fallback while the contact chunk loads. */
export function ContactSkeleton() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <Skeleton className="h-7 w-44 rounded-full" />
            <Skeleton className="h-10 w-80 max-w-full" />
            <Skeleton className="h-4 w-full max-w-md" />
          </div>
          <div className="flex flex-col gap-4">
            <Skeleton className="h-20 w-full rounded-2xl" />
            <Skeleton className="h-20 w-full rounded-2xl" />
          </div>
        </div>
      </Container>
    </section>
  );
}
