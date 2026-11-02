"use client";

import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const featuredWebinars = [
  {
    title: "Understanding Music Theory",
    description:
      "Dive deep into the fundamentals of music theory and enhance your musical skills.",
    slug: "understanding-music-theory",
  },
  {
    title: "The Art of Songwriting",
    description:
      "Learn the craft of songwriting from experienced musicians and songwriters.",
    slug: "the-art-of-songwriting",
  },
  {
    title: "Mastering Your Instrument",
    description:
      "Advanced techniques to master your musical instrument of choice.",
    slug: "mastering-your-instrument",
  },
  {
    title: "Music Production Essentials",
    description:
      "Get started with music production with this comprehensive overview.",
    slug: "music-production-essentials",
  },
  {
    title: "Live Performance Techniques",
    description:
      "Enhance your live performance skills with expert tips and strategies.",
    slug: "live-performance-techniques",
  },
  {
    title: "Digital Music Marketing",
    description:
      "Learn how to promote your music effectively in the digital age.",
    slug: "digital-music-marketing",
  },
];

function UpcomingWebinars() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="text-center mb-6 px-6">
        <h2 className="text-sm font-semibold text-teal-400 uppercase tracking-widest">
          Featured Webinars
        </h2>

        <h3 className="mt-3 text-3xl md:text-4xl font-bold text-white">
          Enhance your musical journey
        </h3>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Join our live sessions and workshops hosted by industry
          professionals.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <HoverEffect
          items={featuredWebinars.map((webinar) => ({
            title: webinar.title,
            description: webinar.description,
            link: "/",
          }))}
        />
      </div>

      <div className="text-center mt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-teal-400 text-teal-400 font-medium hover:bg-teal-400 hover:text-gray-900 transition-all duration-300"
        >
          View All Webinars
          <span>→</span>
        </Link>
      </div>
    </section>
  );
}

export default UpcomingWebinars;
