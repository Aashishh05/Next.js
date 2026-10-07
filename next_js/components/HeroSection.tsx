import Link from "next/link";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/moving-border";

function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black px-6 py-20">
      <Spotlight
        className="left-[-10%] top-[-50%] rotate-[10deg]"
        fill="navy"
      />

      <div className="pointer-events-none absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-white/[0.04] blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        <div className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-neutral-400 backdrop-blur-md"></div>

        <h1 className="mx-auto max-w-5xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Master the
          <br />
          <span className="bg-gradient-to-b from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
            art of music
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-neutral-500 sm:text-lg">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you're a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/courses">
            <Button borderRadius="1.75rem"> Explore Courses →</Button>
          </Link>
        </div>

        <div className="mx-auto mt-20 grid max-w-2xl grid-cols-3 border-t border-white/[0.08] pt-8">
          <div>
            <p className="text-2xl font-semibold text-white">50+</p>
            <p className="mt-1 text-sm text-neutral-600">Music Courses</p>
          </div>

          <div className="border-x border-white/[0.08]">
            <p className="text-2xl font-semibold text-white">10K+</p>
            <p className="mt-1 text-sm text-neutral-600">Students</p>
          </div>

          <div>
            <p className="text-2xl font-semibold text-white">4.9/5</p>
            <p className="mt-1 text-sm text-neutral-600">Student Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
