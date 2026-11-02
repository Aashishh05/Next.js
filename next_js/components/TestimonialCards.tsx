
"use client";

import { motion, type Variants } from "motion/react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "An incredible musical experience! The instructors helped me discover my voice and build confidence in every performance.",
    name: "Olivia Bennett",
    title: "Vocal Student",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=96&h=96&q=80",
  },
  {
    quote:
      "Learning guitar here has been an amazing journey. Every lesson is engaging, inspiring, and filled with creativity.",
    name: "James Anderson",
    title: "Guitar Student",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=96&h=96&q=80",
  },
  {
    quote:
      "The teachers genuinely care about their students. I've improved my piano skills more than I ever imagined.",
    name: "Sophia Martinez",
    title: "Piano Student",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=96&h=96&q=80",
  },
  {
    quote:
      "From music theory to live performances, every experience has helped me grow as a musician.",
    name: "Daniel Wilson",
    title: "Music Production Student",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=96&h=96&q=80",
  },
  {
    quote:
      "A welcoming environment with passionate instructors. I've found my confidence and developed a real love for music.",
    name: "Emma Thompson",
    title: "Vocal Student",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&h=96&q=80",
  },
  {
    quote:
      "The perfect place to explore creativity, learn new instruments, and connect with people who share your passion for music.",
    name: "Noah Williams",
    title: "Drum Student",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=96&h=96&q=80",
  },
];

const headingVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function MusicSchoolTestimonialCards() {
  return (
    <section className="relative isolate overflow-hidden bg-[#030712] py-24 md:py-32">

      {/* Grid pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-20"
      />

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[140px]" />

        <div className="absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-purple-600/10 blur-[120px]" />

        <div className="absolute -right-40 top-1/2 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={headingVariants}
          className="relative z-10 mx-auto mb-16 max-w-3xl text-center"
        >
          <motion.div
            variants={fadeUpVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
              Student Experiences
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUpVariants}
            className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Hear Our Harmony:
            <span className="mt-2 block bg-gradient-to-r from-indigo-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
              Voices of Success
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg"
          >
            Every musician has a story. Discover how our students
            find their rhythm, unlock their creativity, and turn
            their passion for music into something extraordinary.
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-indigo-400 to-transparent"
          />
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative flex flex-col items-center justify-center"
        >

          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#030712] to-transparent md:w-40" />

          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#030712] to-transparent md:w-40" />

          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
          />

        </motion.div>

      </div>
    </section>
  );
}

export default MusicSchoolTestimonialCards;
